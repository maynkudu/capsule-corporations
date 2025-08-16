"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react"

interface MousePosition {
    x: number
    y: number
}

interface MouseContextType {
    mousePosition: MousePosition
    isTracking: boolean
}

const MouseContext = createContext<MouseContextType>({
    mousePosition: { x: 0, y: 0 },
    isTracking: false,
})

export const useGlobalMouse = () => useContext(MouseContext)

export const GlobalMouseProvider = ({ children }: { children: React.ReactNode }) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
    const [isTracking, setIsTracking] = useState(false)

    console.log(mousePosition)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (!isTracking) setIsTracking(true)
        }

        const handleMouseEnter = () => setIsTracking(true)
        const handleMouseLeave = () => setIsTracking(false)

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [isTracking])

    return (
        <MouseContext.Provider value={{ mousePosition, isTracking }}>
            {children}
        </MouseContext.Provider>
    )
}
