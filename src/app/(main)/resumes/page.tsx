import { PlusSquare } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Your resumes",
};

export default function page() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <Button className="mx-auto flex w-fit gap-2 bg-[#8759e4] hover:bg-[#724cbe] text-white">
        <Link href="/editor" className="flex items-center gap-2">
           <PlusSquare className="size-5" />
            <div>New Resume</div>
        </Link>
      </Button>
    </main>
  );
}