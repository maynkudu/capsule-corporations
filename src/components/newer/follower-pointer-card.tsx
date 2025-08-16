"use client"

// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react"

import { motion, AnimatePresence, useMotionValue, type MotionValue } from "motion/react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export const FollowerPointerCard = ({
    children,
    className,
    title,
}: {
    children: React.ReactNode
    className?: string
    title?: string | React.ReactNode
}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const ref = React.useRef<HTMLDivElement>(null)
    const [rect, setRect] = useState<DOMRect | null>(null)
    const [isInside, setIsInside] = useState<boolean>(false)

    useEffect(() => {
        const updateRect = () => {
            if (ref.current) {
                setRect(ref.current.getBoundingClientRect())
            }
        }

        updateRect()
        window.addEventListener("scroll", updateRect)
        window.addEventListener("resize", updateRect)

        return () => {
            window.removeEventListener("scroll", updateRect)
            window.removeEventListener("resize", updateRect)
        }
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
            const size = 96 // your pointer width/height in px
            x.set(e.clientX - rect.left - size / 2)
            y.set(e.clientY - rect.top - size / 2)

        }
    }
    const handleMouseLeave = () => {
        setIsInside(false)
    }

    const handleMouseEnter = () => {
        setIsInside(true)
    }
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            style={{
                cursor: "none",
            }}
            ref={ref}
            className={cn("relative", className)}
        >
            <AnimatePresence>{isInside && <FollowPointer x={x} y={y} />}</AnimatePresence>
            {children}
        </div>
    )
}

export const FollowPointer = ({
    x,
    y,
}: {
    x: MotionValue
    y: MotionValue
}) => {
    return (
        <motion.div
            className="fixed z-50 h-24 w-24 rounded-full bg-orange-300 flex items-center justify-center"
            style={{
                top: y,
                left: x,
                pointerEvents: "none",
                boxShadow: "0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)",
            }}

            initial={{
                scale: 0,
                opacity: 1,
                rotate: 0
            }}
            animate={{
                scale: 1,
                opacity: 1,
                rotate: -45
            }}
            exit={{
                scale: 0,
                opacity: 0,
                rotate: 0
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <ArrowRight className="text-black scale-125" />
        </motion.div>
    )
}
