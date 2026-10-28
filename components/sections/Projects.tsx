"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolio";
import { ProjectCategory } from "@/types/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>("all");

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web & API" },
    { id: "mobile", label: "Mobile" },
    { id: "competition", label: "Competitions" },
  ];

  const filteredProjects = projectFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === projectFilter);

  return (
    <section id="projects" className="py-24 border-t border-white/5 bg-[#16171d]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Header & Filter Tabs */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="w-12 h-1 bg-white mb-4 rounded-full" />
              <h2 className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-2">
                PORTFOLIO
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Projects &amp; Work
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#1b1c23] border border-white/5 self-start sm:self-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                    projectFilter === tab.id
                      ? "bg-[#1d64f2] text-white shadow-md shadow-blue-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx * 100}>
              <div
                className="group rounded-2xl bg-[#181920] border border-white/5 overflow-hidden hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Header */}
                <div className={`h-44 w-full bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-white/90">
                    <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-white/80">{item.role}</span>
                  </div>
                  <div className="text-xl font-bold text-white drop-shadow-md">
                    {item.title}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {item.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-300 border border-white/5">
                        {tag}
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
