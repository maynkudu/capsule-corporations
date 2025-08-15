"use client";
import { useEffect, useState, useRef, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const [scaleX, setScaleX] = useState(1);
    const lastScrollTime = useRef(0);
    const animationFrame = useRef<number>(0);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        });

        const handleWheel = (e: WheelEvent) => {
            const direction = e.deltaY > 0 ? 1 : -1;
            const intensity = Math.min(Math.abs(e.deltaY) / 100, 1);

            // Calculate vertical position relative to viewport center
            const centerY = window.innerHeight / 2;
            const rect = document.body.getBoundingClientRect();
            const distanceFromCenter = Math.abs(centerY - (window.scrollY + centerY));
            const verticalFactor = 1 - Math.min(distanceFromCenter / centerY, 1); // 1 at center, 0 at top/bottom

            let targetScaleX = 1;
            if (direction > 0) {
                // Convex at center
                targetScaleX = 1 - intensity * 0.02 * verticalFactor;
            } else {
                // Concave at center
                targetScaleX = 1 + intensity * 0.02 * verticalFactor;
            }

            setScaleX(targetScaleX);
            lastScrollTime.current = performance.now();
        };

        window.addEventListener("wheel", handleWheel, { passive: true });

        function raf(time: number) {
            lenis.raf(time);

            // Smoothly return to normal
            if (performance.now() - lastScrollTime.current > 100) {
                setScaleX((prev) => prev + (1 - prev) * 0.08);
            }

            animationFrame.current = requestAnimationFrame(raf);
        }

        animationFrame.current = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.removeEventListener("wheel", handleWheel);
            if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        };
    }, []);

    return (
        <div
            style={{
                transform: `scaleX(${scaleX})`,
                transformOrigin: "center center",
                transition: "transform 0.05s ease-out",
                perspective: "1000px",
            }}
        >
            {children}
        </div>
    );
}
