import { MailIcon, PhoneIcon, GithubIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const { contact } = profileData;

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-[#16171d]/60">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">{profileData.contactHeading}</h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl mb-8">{profileData.contactBody}</p>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
          >
            <MailIcon className="w-4 h-4" />
            {contact.email}
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 text-sm text-gray-300">
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
              <PhoneIcon className="w-4 h-4 text-gray-400" />
              {contact.phone}
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <GithubIcon className="w-4 h-4 text-gray-400" />
              {contact.githubUsername}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
