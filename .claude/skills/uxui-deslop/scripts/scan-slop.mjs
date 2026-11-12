#!/usr/bin/env node
// Quick heuristic scanner for "AI slop" UI patterns in a web project.
// Usage: node scan-slop.mjs [dir ...]   (defaults: app components src data pages)
// Output: findings grouped by category with file:line. Hits are leads, not verdicts.

import fs from "node:fs";
import path from "node:path";

const EXT = new Set([".tsx", ".jsx", ".ts", ".js", ".css", ".mdx", ".html", ".vue"]);
const SKIP = new Set(["node_modules", ".next", "dist", "build", ".git", "out", ".claude"]);

const RULES = [
  // [category, label, regex]
  ["visual", "ambient glow blob (large blur)", /blur-\[(?:[89]\d|\d{3,})px\]|blur-3xl/],
  ["visual", "gradient text", /bg-clip-text[^"'`]*text-transparent|text-transparent[^"'`]*bg-clip-text/],
  ["visual", "glow shadow", /shadow-\w+-\d{3}\/\d{2}|shadow-\[0_0_|drop-shadow-\[/],
  ["visual", "eyebrow label (tiny uppercase wide tracking)", /tracking-\[0\.[2-9]\d*em\][^"'`]*uppercase|uppercase[^"'`]*tracking-\[0\.[2-9]/],
  ["visual", "accent bar above heading", /\bw-1[02] h-1\b[^"'`]*rounded-full/],
  ["visual", "icon in tinted square", /w-(?:8|10|12) h-(?:8|10|12) rounded-(?:lg|xl)[^"'`]*bg-\w+-500\/10/],
  ["visual", "placeholder gradient (card/image area)", /from-\w+-\d{3} via-\w+-\d{3} to-slate-9\d\d/],
  ["visual", "translucent tint chip", /bg-\w+-500\/10[^"'`]*text-\w+-400/],
  ["motion", "hover scale", /hover:scale-1\d\d/],
  ["motion", "hover lift", /hover:-translate-y-/],
  ["motion", "staggered reveal delay", /delay=\{[^}]*idx\s*\*/],
  ["motion", "typewriter / rotating text", /isDeleting|typewriter|displayedText/i, "once"],
  ["motion", "scroll progress bar", /scrollProgress|ScrollProgress/, "once"],
  ["copy", "buzzword", /\b(passionate|dedicated|driven|adaptable|scalable|robust|seamless(?:ly)?|cutting-edge|innovative|leverag(?:e|ing)|harness|empower|elevate|streamline|digital solutions|real-world|architected)\b/i],
  ["copy", "template CTA", /let(?:'|&apos;)s build something|build something great|hire me|feel free to contact|open for opportunities/i],
  ["content", "soft skill / AI tool listed as skill", /["'](Problem Solving|Collaborative Teamwork|Teamwork|Continuous Learning|ChatGPT|Claude|Gemini|QwenAI|Copilot)["']/],
  ["brand", "generic dev brand", /CodeBracketIcon|Built with Next\.js|\.dev<\/span>/, "once"],
];

const roots = process.argv.slice(2);
const dirs = (roots.length ? roots : ["app", "components", "src", "data", "pages"]).filter((d) => fs.existsSync(d));

function walk(p, out) {
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    if (SKIP.has(path.basename(p))) return;
    for (const f of fs.readdirSync(p)) walk(path.join(p, f), out);
  } else if (EXT.has(path.extname(p))) out.push(p);
}

const files = [];
dirs.forEach((d) => walk(d, files));

const hits = {};
let reducedMotion = false;
const seenOnce = new Set(); // "once" rules report the first hit per file
for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/prefers-reduced-motion|motion-safe:|motion-reduce:/.test(line)) reducedMotion = true;
    for (const [cat, label, re, once] of RULES) {
      const m = line.match(re);
      const key = f + "|" + label;
      if (m && !(once && seenOnce.has(key))) {
        if (once) seenOnce.add(key);
        (hits[cat] ??= {});
        (hits[cat][label] ??= []).push(`${f.replace(/\\/g, "/")}:${i + 1}  ${m[0]}`);
      }
    }
  });
}

const order = ["visual", "motion", "copy", "content", "brand"];
let total = 0;
for (const cat of order) {
  if (!hits[cat]) continue;
  console.log(`\n## ${cat.toUpperCase()}`);
  for (const [label, list] of Object.entries(hits[cat]).sort((a, b) => b[1].length - a[1].length)) {
    total += list.length;
    console.log(`- ${label} (${list.length})`);
    list.slice(0, 8).forEach((h) => console.log(`    ${h}`));
    if (list.length > 8) console.log(`    … +${list.length - 8} more`);
  }
}
console.log(`\n## A11Y\n- prefers-reduced-motion handling: ${reducedMotion ? "found" : "NOT FOUND"}`);
console.log(`\nScanned ${files.length} files in [${dirs.join(", ")}] — ${total} hits. Hits are leads; judge each in context.`);
