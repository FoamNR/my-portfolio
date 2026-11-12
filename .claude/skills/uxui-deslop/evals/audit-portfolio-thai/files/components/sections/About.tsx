import { TrophyIcon, GraduationCapIcon, BriefcaseIcon, CodeBracketIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const highlights = [
    {
      icon: <TrophyIcon className="w-5 h-5" />,
      color: "blue",
      badgeClass: "bg-blue-500/10 text-blue-400",
      title: "Top 8 Rank",
      subtitle: "PSRU Cyber Hackathon 2026",
      desc: "Competed in software vulnerability identification and security assessments.",
    },
    {
      icon: <GraduationCapIcon className="w-5 h-5" />,
      color: "indigo",
      badgeClass: "bg-indigo-500/10 text-indigo-400",
      title: "B.Sc. CS",
      subtitle: "Computer Science (2022-2026)",
      desc: "Pibulsongkram Rajabhat University with a focus on mobile & web architecture.",
    },
    {
      icon: <BriefcaseIcon className="w-5 h-5" />,
      color: "emerald",
      badgeClass: "bg-emerald-500/10 text-emerald-400",
      title: "CITCOMS Intern",
      subtitle: "Naresuan University (2568-2569)",
      desc: "Maintained university information systems and built the Local Wisdom platform.",
    },
    {
      icon: <CodeBracketIcon className="w-5 h-5" />,
      color: "cyan",
      badgeClass: "bg-cyan-500/10 text-cyan-400",
      title: "Full-Stack",
      subtitle: "Freelance & Projects",
      desc: "Delivered real-world LINE bots, booking systems, and RESTful web services.",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 bg-[#16171d]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={100}>
              <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />
              <h2 className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">
                PROFESSIONAL SUMMARY
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Passionate about engineering reliable, scalable digital solutions
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {profileData.bio} Dedicated to continuous learning, collaborative teamwork, and leveraging modern development tools to build efficient and scalable software architectures across web and mobile platforms.
              </p>

              {/* Language skills */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-gray-400 border-t border-white/5">
                {profileData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-white font-semibold">{lang.name}:</span>
                    <span>{lang.level}</span>
                  </div>
                ))}
                <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block" />
                <div>
                  <span className="text-white font-semibold">Status:</span> Open for opportunities
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Highlights Grid with Staggered Scroll Entrance */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={150 + idx * 100}>
                <div className="p-6 rounded-2xl bg-[#1b1c23] border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.badgeClass} flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>
                    <div className="text-2xl font-black text-white mb-1">{item.title}</div>
                    <div className={`text-sm font-semibold mb-2 ${item.badgeClass.split(" ")[1]}`}>
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
