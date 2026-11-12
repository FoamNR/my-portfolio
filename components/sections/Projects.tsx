"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/portfolio";
import { ProjectCategory } from "@/types/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

const filterTabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "competition", label: "Competitions" },
];

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    projectFilter === "all" ? projectsData : projectsData.filter((p) => p.category === projectFilter);

  return (
    <section id="projects" className="py-24 border-t border-white/5 bg-[#16171d]/40">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projects</h2>

            <div role="group" aria-label="Filter projects" className="flex items-center gap-1 text-sm">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  aria-pressed={projectFilter === tab.id}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                    projectFilter === tab.id ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-[#181920] border border-white/10 overflow-hidden flex flex-col"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={`Screenshot of ${item.title}`}
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover border-b border-white/10"
                />
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-3 text-xs text-gray-400 mb-3">
                  <span className="font-medium text-gray-300">{item.badge}</span>
                  <span>{item.role}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{item.description}</p>

                <div className="mt-auto">
                  <p className="text-xs text-gray-500 mb-4">{item.tech.join(" · ")}</p>
                  {(item.link || item.github) && (
                    <div className="flex gap-4 text-sm font-medium">
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          Live site ↗
                        </a>
                      )}
                      {item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          Code ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
