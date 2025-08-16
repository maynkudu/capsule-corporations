'use client'

import { ArrowRight } from "lucide-react"

export default function FooterInput() {
    return (
        <div className="bg-[#282828] w-[40rem] flex justify-between items-center px-2 rounded-full focus-within:ring-4 focus-within:ring-white/30 transition-all duration-300 group">
            <input
                type="text"
                placeholder="Your Email Address"
                className="px-4 border-0 outline-none py-2 h-16 bg-transparent flex-1 font-medium text-lg caret-amber-300"
            />

            <button className="bg-orange-300 hover:bg-white transition-all duration-500 ease-in-out h-12 rounded-full w-12 flex justify-center items-center">
                <ArrowRight className="text-black -rotate-45 group-focus-within:rotate-45 transition-transform duration-500 ease-in-out" />
            </button>
        </div>
    )
}