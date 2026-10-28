import Image from "next/image";
import { profileData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#111215] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-md overflow-hidden border border-blue-500/30">
            <Image
              src="/logo.png"
              alt="NDEV Logo"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
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
