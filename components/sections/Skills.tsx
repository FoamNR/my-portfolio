import { skillCategoriesData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-[#131418]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10">Skills</h2>

          <dl className="divide-y divide-white/10 border-y border-white/10">
            {skillCategoriesData.map((category) => (
              <div key={category.title} className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-2 sm:gap-6 py-5">
                <dt className="text-sm font-medium text-gray-300">{category.title}</dt>
                <dd className="text-sm text-white leading-relaxed">{category.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
