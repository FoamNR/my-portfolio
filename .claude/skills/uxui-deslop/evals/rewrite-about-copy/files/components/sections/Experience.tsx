import { BriefcaseIcon, GraduationCapIcon, TrophyIcon } from "@/components/icons";
import { experienceData, educationData, competitionsData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 w-full overflow-hidden">
      
      {/* Heading */}
      <ScrollReveal direction="up" delay={50}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-12 h-1 bg-blue-600 mb-4 mx-auto rounded-full" />
          <h2 className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
            BACKGROUND &amp; TIMELINE
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Education
          </h3>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Work Experience Column (Slides from Left) */}
        <div className="flex flex-col gap-6">
          <ScrollReveal direction="right" delay={100}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <BriefcaseIcon className="w-4 h-4" />
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">Work Experience</h4>
            </div>
          </ScrollReveal>

          {experienceData.map((item, idx) => {
            const borderLeftClass = item.accentColor === "blue" ? "border-l-blue-500" : "border-l-indigo-500";
            const badgeClass = item.accentColor === "blue" 
              ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
              : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
            const bulletClass = item.accentColor === "blue" ? "text-blue-500" : "text-indigo-400";

            return (
              <ScrollReveal key={idx} direction="up" delay={150 + idx * 120}>
                <div 
                  className={`p-6 rounded-2xl bg-[#181920] border border-white/5 relative pl-6 border-l-2 ${borderLeftClass} hover:border-white/10 transition-all`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h5 className="text-base font-bold text-white">{item.title}</h5>
                    <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${badgeClass}`}>
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-400 mb-4">{item.organization}</div>
                  
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                    {item.descriptionItems.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className={`${bulletClass} font-bold`}>•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Education & Competitions Column (Slides from Right) */}
        <div className="flex flex-col gap-6">
          <ScrollReveal direction="left" delay={100}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <GraduationCapIcon className="w-4 h-4" />
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">Education &amp; Competitions</h4>
            </div>
          </ScrollReveal>

          {educationData.map((edu, idx) => {
            const borderLeftClass = edu.accentColor === "emerald" ? "border-l-emerald-500" : "border-l-teal-500";
            const badgeClass = edu.accentColor === "emerald"
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              : "bg-teal-500/10 text-teal-400 border-teal-500/20";
            const bulletClass = edu.accentColor === "emerald" ? "text-emerald-500" : "text-teal-400";

            return (
              <ScrollReveal key={idx} direction="up" delay={150 + idx * 120}>
                <div 
                  className={`p-6 rounded-2xl bg-[#181920] border border-white/5 relative pl-6 border-l-2 ${borderLeftClass} hover:border-white/10 transition-all`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h5 className="text-base font-bold text-white">{edu.degree}</h5>
                    <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${badgeClass}`}>
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-400 mb-4">{edu.institution}</div>
                  
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className={`${bulletClass} font-bold`}>•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Hackathons Box */}
          <ScrollReveal direction="up" delay={400}>
            <div className="p-5 rounded-2xl bg-[#181920] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <TrophyIcon className="w-4 h-4 text-amber-400" />
                <span>Competitions &amp; Camps</span>
              </div>
              <div className="space-y-2.5 text-xs text-gray-300">
                {competitionsData.map((c, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between">
                    <span><strong>{c.title}:</strong> {c.desc}</span>
                    <span className={c.highlight ? "font-bold text-amber-400" : "text-gray-400"}>
                      {c.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
