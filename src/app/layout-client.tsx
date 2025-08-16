"use client";

import "./globals.css";
import SmoothScroll from "@/components/lenis/smooth-scroll";
import CookiePopup from "@/components/common/cookie-popup";
import CardNav, { CardNavItem } from "@/components/common/navbar/floating-nav";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const items: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "" },
        { label: "Careers", ariaLabel: "About Careers", href: "" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "" },
        { label: "Twitter", ariaLabel: "Twitter", href: "" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "" },
      ],
    },
  ];



  return (
    <>
        <CookiePopup />
        <SmoothScroll>
          {children}
          </SmoothScroll>
        <CardNav
          logo="/next.svg"
          items={items}
          logoAlt="Capsule"
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
    </>
  );
}
