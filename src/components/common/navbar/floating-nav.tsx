import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
};

export type CardNavItem = {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
};

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items: CardNavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
    logo,
    logoAlt = "Logo",
    items,
    className = "",
    ease = "power3.out",
    baseColor = "#fff",
    menuColor,
    buttonBgColor,
    buttonTextColor,
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const lastScrollY = useRef(0);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) {
            const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
            if (contentEl) {
                const prevStyles = {
                    visibility: contentEl.style.visibility,
                    pointerEvents: contentEl.style.pointerEvents,
                    position: contentEl.style.position,
                    height: contentEl.style.height,
                };

                contentEl.style.visibility = "visible";
                contentEl.style.pointerEvents = "auto";
                contentEl.style.position = "static";
                contentEl.style.height = "auto";

                contentEl.offsetHeight;

                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;

                Object.assign(contentEl.style, prevStyles);

                return topBar + contentHeight + padding;
            }
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: "hidden" });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease,
        });

        tl.to(
            cardsRef.current,
            { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
            "-=0.1"
        );

        return tl;
    };

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    // scroll-based visibility
    useEffect(() => {
        const navEl = navRef.current;
        if (!navEl) return;

        gsap.set(navEl, { y: -100, autoAlpha: 0 });

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Hide if less than 500px
            if (scrollY < 500) {
                gsap.to(navEl, { y: -100, autoAlpha: 0, duration: 0.3, ease: "power2.out" });
                if (isExpanded) setIsExpanded(false);
                if (isHamburgerOpen) setIsHamburgerOpen(false);
                lastScrollY.current = scrollY;
                return;
            }

            // scroll direction: down hides, up shows
            if (scrollY > lastScrollY.current) {
                gsap.to(navEl, { y: -100, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
                if (isExpanded) setIsExpanded(false);
                if (isHamburgerOpen) setIsHamburgerOpen(false);
            } else {
                gsap.to(navEl, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" });
            }

            lastScrollY.current = scrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isExpanded, isHamburgerOpen]);

    return (
        <div
            ref={navRef}
            className={`fixed left-1/2 -translate-x-1/2 w-full z-[99] top-0 ${className}`}
        >
            <nav
                className={`card-nav flex text-black justify-between px-5 items-center h-[60px] p-0 rounded-none shadow-md relative overflow-hidden will-change-[height] bg-white/70 backdrop-blur-2xl`}
            >
                <div>Capsule</div>
                <div className=" flex justify-center items-center gap-5">
                    <Link
                        href={"/products"}
                        className="flex justify-center items-center gap-1"
                    >
                        <span>PRODUCTS</span>
                        <BiChevronDown />
                    </Link>
                    <Link
                        href={"/products"}
                        className="flex justify-center items-center gap-1"
                    >
                        <span>RESOURCES</span>
                        <BiChevronDown />
                    </Link>
                </div>
                <div>
                    <Link href={"/contact"} className="bg-black px-4 py-3 text-white font-poppins">CONTACT</Link>
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
