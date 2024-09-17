import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { cn } from "@npcs/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import proxy from "node-global-proxy";
import "./globals.css";

proxy.setConfig("http://127.0.0.1:7890");

proxy.start();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingua Vox",
  description:
    "Provides guidance and steps for creating a website application using Next.js that allows users to upload video and subtitle files. The application enables playback of videos in non-Chinese languages and generates Chinese speech based on non-Chinese subtitles.",
  keywords:
    "Next.js website application, video subtitle translation, speech synthesis, multilingual video experience",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "h-screen flex flex-col")}>
          <header className="flex items-center justify-between border-b p-5">
            <div className="flex gap-6">
              <Link href={"/"}>Home</Link>
              <Link href={"/getting-started"}>Getting Started</Link>
            </div>

            <UserButton />
          </header>

          <main className="mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center overflow-auto py-6">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
