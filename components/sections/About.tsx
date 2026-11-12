import { profileData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 bg-[#16171d]/60">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Bio */}
            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-blue-400 mb-3">About</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                {profileData.aboutHeading}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">{profileData.aboutBody}</p>

              <dl className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/10 text-sm">
                {profileData.languages.map((lang) => (
                  <div key={lang.name} className="flex gap-2">
                    <dt className="text-white font-medium">{lang.name}</dt>
                    <dd className="text-gray-400">{lang.level}</dd>
                  </div>
                ))}
                <div className="flex gap-2">
                  <dt className="text-white font-medium">Status</dt>
                  <dd className="text-gray-400">{profileData.availability}</dd>
                </div>
              </dl>
            </div>

            {/* Highlights: plain facts, not clickable */}
            <ul className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden self-start">
              {profileData.aboutHighlights.map((item) => (
                <li key={item.title} className="bg-[#1a1b21] p-6">
                  <div className="text-2xl font-bold text-white mb-1">{item.title}</div>
                  <div className="text-sm font-medium text-gray-300 mb-3">{item.subtitle}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
