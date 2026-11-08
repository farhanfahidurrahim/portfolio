import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://md-fahidurrahim.netlify.app"),
  title: "Md. Fahidur Rahim | Software Developer",
  description: "Personal portfolio of Md. Fahidur Rahim - Software Developer with 2+ years of experience specializing in PHP, Laravel, MySQL, PostgreSQL, RESTful APIs, React, and modern web applications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: ["Md. Fahidur Rahim", "Farhan", "Software Developer", "Laravel Developer", "PHP OOP", "Full Stack Developer", "Next.js", "React.js", "Dhaka", "Bangladesh"],
  authors: [{ name: "Md. Fahidur Rahim" }],
  creator: "Md. Fahidur Rahim",
  openGraph: {
    title: "Md. Fahidur Rahim | Software Developer",
    description: "Passionate Software Developer with 2+ years of experience in PHP (OOP), Laravel, MySQL, PostgreSQL, and modern frontend technologies.",
    url: "https://md-fahidurrahim.netlify.app",
    siteName: "Md. Fahidur Rahim Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 800,
        alt: "Md. Fahidur Rahim - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Fahidur Rahim | Software Developer",
    description: "Software Developer with 2+ years of experience in PHP, Laravel, MySQL, RESTful APIs, and React.",
    images: ["/assets/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-[#080a0f] text-slate-100 antialiased selection:bg-[#00bfa6] selection:text-black">
        {children}
      </body>
    </html>
  );
}
