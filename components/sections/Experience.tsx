import { experienceData, educationData, competitionsData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TimelineEntry = { heading: string; place: string; period: string; points: string[] };

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-white/10 ml-1.5 space-y-10">
      {entries.map((e) => (
        <li key={e.heading + e.period} className="pl-8 relative">
          <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500" aria-hidden />
          <div className="text-sm text-gray-400 mb-1">{e.period}</div>
          <h4 className="text-lg font-semibold text-white">{e.heading}</h4>
          <div className="text-sm text-gray-300 mb-3">{e.place}</div>
          <ul className="space-y-2 text-sm text-gray-300 leading-relaxed list-disc pl-4 marker:text-gray-500">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const work = experienceData.map((x) => ({
    heading: x.title,
    place: x.organization,
    period: x.period,
    points: x.descriptionItems,
  }));
  const education = educationData.map((x) => ({
    heading: x.degree,
    place: x.institution,
    period: x.period,
    points: x.highlights,
  }));

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 w-full">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-14">Experience &amp; education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h3 className="text-sm font-medium text-blue-400 mb-6">Work</h3>
            <Timeline entries={work} />
          </div>

          <div>
            <h3 className="text-sm font-medium text-blue-400 mb-6">Education</h3>
            <Timeline entries={education} />

            <h3 className="text-sm font-medium text-blue-400 mt-14 mb-4">Competitions &amp; camps</h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {competitionsData.map((c) => (
                  <tr key={c.title}>
                    <td className="py-3 pr-4">
                      <div className="text-white font-medium">{c.title}</div>
                      <div className="text-gray-400">{c.desc}</div>
                    </td>
                    <td className={`py-3 text-right whitespace-nowrap ${c.highlight ? "text-white font-semibold" : "text-gray-400"}`}>
                      {c.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
