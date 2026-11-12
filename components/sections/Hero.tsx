import Image from "next/image";
import { ChevronDownIcon, ArrowRightIcon, GithubIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";

export default function Hero() {
  const { contact } = profileData;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-8 lg:pt-10 flex-1 flex flex-col justify-end">
      {/* md: text left, portrait right, details below text. lg: three columns. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-end w-full">

        {/* Left: name, positioning, contact */}
        <div className="lg:col-span-4 flex flex-col justify-center pb-4 lg:pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.1] mb-4">
            I&apos;m Nonthawat.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 font-medium leading-snug mb-6">
            {profileData.positioning}
          </p>

          <p className="text-gray-300 text-base leading-relaxed max-w-sm mb-8">
            {profileData.bio}
          </p>

          <div className="flex flex-col gap-2.5 mb-10 text-sm text-gray-300">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MailIcon className="w-4 h-4 text-blue-500" />
              <span>{contact.email}</span>
            </a>
            <div className="inline-flex items-center gap-2 text-gray-400">
              <MapPinIcon className="w-4 h-4 text-blue-500" />
              <span>{contact.location}</span>
            </div>
          </div>

          <a
            href="#about"
            className="w-12 h-12 rounded-full border border-white/15 text-white flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDownIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Center: portrait */}
        <div className="md:col-start-2 md:row-start-1 md:row-span-2 lg:col-start-auto lg:row-start-auto lg:row-span-1 lg:col-span-4 md:self-start lg:self-end flex items-end justify-center -mb-2 sm:-mb-4 pointer-events-none select-none">
          <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-[4/5] flex items-end justify-center">
            <Image
              src="/profile.png"
              alt={profileData.name}
              width={700}
              height={875}
              priority
              className="w-full h-auto object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right: short pointers into the page */}
        <div className="lg:col-span-4 flex flex-col justify-end pb-8 lg:pb-20">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-white mb-2">Background</h2>
            <p className="text-sm text-gray-400 leading-relaxed">{profileData.aboutSnippet}</p>
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              More about me
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-px bg-white/10 my-4" />

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-white mb-2">Recent work</h2>
            <p className="text-sm text-gray-400 leading-relaxed">{profileData.workSnippet}</p>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              See projects
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-px bg-white/10 my-4" />

          <div className="flex items-center gap-3 text-gray-300">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-sm text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{contact.githubUsername}</span>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              aria-label={`Call ${contact.phone}`}
              title={contact.phone}
            >
              <PhoneIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
