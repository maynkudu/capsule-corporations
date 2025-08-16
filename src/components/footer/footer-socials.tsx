"use client"

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export default function FooterSocials() {
    return (
        <div className="flex gap-1">
            <Link href="https://facebook.com" className="flex justify-center items-center bg-white text-black px-2 rounded-xl scale-90 hover:-translate-y-1 transition-all duration-500 ease-in-out group">
                <FaFacebookF className="scale-90" />
                <ArrowRight className="-rotate-45 scale-75 group-hover:rotate-45 transition-all duration-500 ease-in-out" />
            </Link>

            <Link href="https://twitter.com" className="flex justify-center items-center bg-white text-black px-2 rounded-xl scale-90 hover:-translate-y-1 transition-all duration-500 ease-in-out group">
                <BsTwitterX className="scale-90" />
                <ArrowRight className="-rotate-45 scale-75 group-hover:rotate-45 transition-all duration-500 ease-in-out" />
            </Link>

            <Link href="https://instagram.com" className="flex justify-center items-center bg-white text-black px-2 rounded-xl scale-90 hover:-translate-y-1 transition-all duration-500 ease-in-out group">
                <BsInstagram className="scale-90" />
                <ArrowRight className="-rotate-45 scale-75 group-hover:rotate-45 transition-all duration-500 ease-in-out" />
            </Link>

            <Link href="https://linkedin.com" className="flex justify-center items-center bg-white text-black px-2 rounded-xl scale-90 hover:-translate-y-1 transition-all duration-500 ease-in-out group">
                <LiaLinkedinIn className="" />
                <ArrowRight className="-rotate-45 scale-75 group-hover:rotate-45 transition-all duration-500 ease-in-out" />
            </Link>
        </div>
    )
}