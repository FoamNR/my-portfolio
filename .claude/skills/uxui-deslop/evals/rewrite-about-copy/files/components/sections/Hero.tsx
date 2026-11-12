"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, ArrowRightIcon, GithubIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";

const ROLES = [
  "Software Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Next.js & React Developer",
];

export default function Hero() {
  const { contact } = profileData;

  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTarget = ROLES[currentRoleIndex];

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentTarget.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 75);
      } else {
        // Pause at complete word before starting deletion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        // Word cleared, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-6 lg:pt-10 flex-1 flex flex-col justify-end overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full relative z-10">

        {/* ----- LEFT COLUMN: Headline & Scroll Button ----- */}
        <div className="lg:col-span-4 flex flex-col justify-center pb-8 lg:pb-20 pt-4">

          {/* Animated White Accent Top Bar */}
          <div className="h-[3px] bg-gradient-to-r from-white via-blue-400 to-white mb-8 rounded-full animate-line-expand shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

          {/* Main Headline with Dynamic Typing Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-6">
            <span className="block text-white transition-all hover:translate-x-1 duration-300">
              I&apos;m <span className="bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent">Nonthawat</span>,
            </span>
            <span className="block min-h-[1.25em] text-2xl sm:text-3xl lg:text-[2.6rem] font-semibold tracking-normal mt-1">
              <span className="text-gray-300">a </span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent font-extrabold">
                {displayedText}
              </span>
              <span className="inline-block text-blue-500 font-light animate-cursor ml-1 select-none">
                |
              </span>
            </span>
          </h1>

          {/* Resume Summary */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
            {profileData.bio}
          </p>

          {/* Quick Contact Badges */}
          <div className="flex flex-col gap-2.5 mb-10 text-xs text-gray-300">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MailIcon className="w-4 h-4 text-blue-500" />
              <span>{contact.email}</span>
            </a>
            <div className="inline-flex items-center gap-2 text-gray-400">
              <MapPinIcon className="w-4 h-4 text-blue-500" />
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Circular Down Button */}
          <a
            href="#about"
            className="w-14 h-14 rounded-full bg-[#1d64f2] text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Scroll to About section"
          >
            <ChevronDownIcon className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ----- CENTER COLUMN: Cutout Portrait ----- */}
        <div className="lg:col-span-4 flex items-end justify-center relative -mb-2 sm:-mb-4 pointer-events-none select-none">

          {/* Radial background highlight */}
          <div className="absolute bottom-0 w-[320px] h-[320px] bg-gradient-to-t from-blue-500/20 via-blue-500/5 to-transparent rounded-full blur-2xl -z-10" />

          {/* Cutout Image */}
          <div className="relative w-[340px] sm:w-[420px] lg:w-[460px] aspect-[4/5] flex items-end justify-center">
            <Image
              src="/profile.png"
              alt={profileData.name}
              width={700}
              height={875}
              priority
              className="w-full h-auto object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>

        {/* ----- RIGHT COLUMN: Resume Highlights & Socials ----- */}
        <div className="lg:col-span-4 flex flex-col justify-end pb-8 lg:pb-20 pt-4">

          {/* ABOUT ME Snippet */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-3">
              ABOUT ME
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {profileData.aboutSnippet}
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 mt-3.5 text-xs font-bold text-white tracking-widest hover:text-blue-400 group transition-colors"
            >
              <span>LEARN MORE</span>
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-4" />

          {/* MY WORK Snippet */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-3">
              MY WORK
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {profileData.workSnippet}
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 mt-3.5 text-xs font-bold text-white tracking-widest hover:text-blue-400 group transition-colors"
            >
              <span>BROWSE PROJECTS</span>
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-4" />

          {/* CONNECT / SOCIALS */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-3.5">
              CONNECT WITH ME
            </h2>
            <div className="flex items-center gap-4 text-gray-300">
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{contact.githubUsername}</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                aria-label="Call Phone"
                title={contact.phone}
              >
                <PhoneIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                aria-label="Send Email"
                title={contact.email}
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
