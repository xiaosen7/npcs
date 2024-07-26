import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { actions } from "@libs/actions";
import { SyncElementClass } from "@libs/theme";
import { cn } from "@npcs/shared/jsx";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Npcs Notes",
  description: "A Notes application code by next.js-practical-cases",
};

export const dynamic = "force-dynamic";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await actions.user.createIfNeeded();
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={cn(
            nunito.className,
            "h-screen bg-primary text-primary px-6 py-12 overflow-y-auto flex flex-col justify-center items-center"
          )}
        >
          {children}
        </body>
      </html>
      <SyncElementClass />
    </ClerkProvider>
  );
}
