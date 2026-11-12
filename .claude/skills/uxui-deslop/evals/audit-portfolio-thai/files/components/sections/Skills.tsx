import { skillCategoriesData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-[#131418] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="w-12 h-1 bg-blue-600 mb-4 mx-auto rounded-full" />
            <h2 className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
              SKILLS &amp; CAPABILITIES
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Development Stack
            </h3>
          </div>
        </ScrollReveal>

        {/* 4 Cards Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategoriesData.map((category, idx) => (
            <ScrollReveal key={idx} direction="up" delay={100 + idx * 120}>
              <div 
                className="p-6 rounded-2xl bg-[#181920] border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${category.colorClass}`}>
                    {category.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:text-white hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
