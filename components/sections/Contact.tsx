import { MailIcon, PhoneIcon, GithubIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const { contact } = profileData;

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-[#16171d]/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="up" delay={50}>
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Open for opportunities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Let&apos;s build something great together.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
            I am currently seeking an entry-level or junior role in software, web, or mobile development. Feel free to contact me for job opportunities or freelance collaborations!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <MailIcon className="w-4 h-4" />
              <span>{contact.email}</span>
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>{contact.phone}</span>
            </a>

            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub: {profileData.nickname}NR</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
