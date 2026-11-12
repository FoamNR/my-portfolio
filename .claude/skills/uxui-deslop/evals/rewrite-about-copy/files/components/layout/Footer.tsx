import { CodeBracketIcon } from "@/components/icons";
import { profileData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#111215] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <CodeBracketIcon className="w-5 h-5 text-blue-500 stroke-[3]" />
          <span className="text-white font-extrabold text-base tracking-tight">
            {profileData.name} ({profileData.nickname})
          </span>
        </div>

        <div className="text-xs text-gray-500">
          &copy; 2026 {profileData.name}. Built with Next.js &amp; Tailwind CSS.
        </div>

        <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
