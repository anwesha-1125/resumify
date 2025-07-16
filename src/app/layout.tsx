import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Resumify",
    absolute:"Resumify",
  },
  description: "AI Resume Builder is the easiest way to create a professional, job-winning resume that helps you land your dream job. Turn your skills into a job-winning resume — effortlessly. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>

        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
     
  );
}
