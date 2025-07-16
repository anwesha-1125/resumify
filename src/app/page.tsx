"use client";
import { Button } from "@/components/ui/button";
import resumePreview from "@/assets/resume-preview.jpg";
import Image from "next/image";
import logo from "@/assets/dayfront.png";
import logoDark from "@/assets/darkfront.png";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme } = useTheme();
  return (
    <>
    <ModeToggle />
    
    <main  className={`flex min-h-screen flex-col items-center justify-center gap-6 px-5 py-12 text-center ${
    theme === "dark"
      ? "bg-gradient-to-br from-[#27143a] via-[#100818] to-[#29153d] text-white"
      : "bg-white text-black"
  } md:flex-row md:text-start lg:gap-12`}
    >
      <div className="max-w-prose space-y-3">
      <Image
          src={theme === "dark" ? logoDark : logo}
          alt="Logo"
          width={1100}
          
          className="mx-auto md:ms-0"
        />
        <Button asChild size="lg" className="bg-[#8759e4] hover:bg-[#a87ad7] text-white transition-colors duration-300 p-4 mx-auto flex w-fit"
        >
            <Link href="/resumes">Get started</Link>
          </Button>
      </div>

      <div>
        <Image
          src={resumePreview} 
          alt="Resume preview"
          width={600}
          className="relative rounded-lg text-white bg-[#2b1952] overflow-hidden neon lg:rotate-[1.5deg]"/>
          
      </div> 
    </main>
    </>
  );
}
