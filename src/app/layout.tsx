import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLAREx Tech & Trade Limited",
  description:
    "Managed IT, cybersecurity, NOC/SOC, and Odoo ERP solutions for businesses in Dhaka, Bangladesh.",
  icons: {
    icon: "/assets/img/logos/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/css/all.min.css" rel="stylesheet" />
        <link href="/assets/css/fontawesome.min.css" rel="stylesheet" />
        <link href="/assets/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.min.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/boxicons.min.css" rel="stylesheet" />
        <link href="/assets/css/style2.css" rel="stylesheet" />
        {/* Must stay last so it can override the legacy theme. */}
        <link href="/assets/css/modern-pages.css" rel="stylesheet" />
      </head>
      <body className="home-dark2 tt-magic-cursor">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
