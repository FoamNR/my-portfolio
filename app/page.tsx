import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { educationData, profileData, skillCategoriesData } from "@/data/portfolio";
import { siteDescription, siteUrl } from "@/lib/site";

// Structured data so search engines understand this page is about a person.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: profileData.name,
    alternateName: profileData.nickname,
    url: siteUrl,
    image: `${siteUrl}/profile.png`,
    jobTitle: profileData.role,
    description: siteDescription,
    email: `mailto:${profileData.contact.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Phitsanulok", addressCountry: "TH" },
    alumniOf: educationData.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
    knowsAbout: skillCategoriesData.flatMap((c) => c.skills),
    knowsLanguage: ["th", "en"],
    sameAs: [profileData.contact.githubUrl],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131418] text-[#f3f4f6] flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
