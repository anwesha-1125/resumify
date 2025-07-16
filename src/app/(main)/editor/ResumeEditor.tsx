"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import GeneralInfoForm from "./forms/generalInfoForm";


export function ResumeEditor() {
  return (
    <div>
      <header className="space-y-1.5 border-b px-3 py-6 text-center">
        <h1 className="text-2xl font-bold">Design your Resume</h1>
        <p className="text-sm text-muted-foreground">Follow the steps below to create your resume. Your progress will be saved automatically.</p>
      </header>

      <main className="relative grow h-screen">
        <div className="absolute inset-0 flex w-full">
            <div className="w-full md:w-1/2 p-3">
              <GeneralInfoForm />
            </div>
            <div className="grow md:border-r"></div>
            <div className="hidden w-1/2 md:flex">Right</div>
        </div>
      </main>

      <footer className="border-t px-3 py-6 w-full">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button variant="secondary">
              Previous Step
            </Button>
            
            <Button className="bg-[#8759e4] hover:bg-[#724cbe]">
              Next Step
            </ Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" asChild>
              <Link href="/resumes">Close</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}