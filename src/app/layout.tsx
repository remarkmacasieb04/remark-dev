import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolio } from "@/content/portfolio";
import { FloatingCompanion } from "@/components/ui/floating-companion";

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.seo.siteUrl),
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  keywords: [
    "Remark F. Macasieb",
    "Junior Developer",
    "Aspiring Full Stack Developer",
    "React Portfolio",
    "Next.js Portfolio",
    "Mobile and Web Development",
  ],
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: portfolio.seo.siteUrl,
    siteName: portfolio.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050812",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="grid-overlay absolute inset-0 opacity-35" />
          <div className="animate-aurora-slow absolute left-[-8rem] top-[-6rem] h-[34rem] w-[34rem] rounded-full bg-glow/14 blur-3xl" />
          <div className="animate-aurora-medium absolute right-[-6rem] top-16 h-[30rem] w-[30rem] rounded-full bg-accent/12 blur-3xl" />
          <div className="animate-aurora-fast absolute left-1/2 top-1/3 h-[18rem] w-[64rem] -translate-x-1/2 rotate-[8deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] blur-3xl" />
          <div className="animate-aurora-slow absolute bottom-[-10rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-warm/10 blur-3xl" />
        </div>
        <FloatingCompanion />
        {children}
      </body>
    </html>
  );
}
