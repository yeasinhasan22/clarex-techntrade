import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLAREx Tech Limited",
  description:
    "CLAREx Tech — business transformation, automation, managed IT, cybersecurity, and Odoo/ERP solutions in Dhaka, Bangladesh.",
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
      </head>
      <body className="home-dark2 tt-magic-cursor">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
