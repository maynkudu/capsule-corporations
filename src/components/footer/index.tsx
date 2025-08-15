'use client'

import { ArrowRight, DotIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'

const Footer = () => {
    const [year, setYear] = useState<number>()
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <div className='flex flex-col w-full min-h-[60vh] bg-[#111212] p-10 font-poppins'>
            <div className='flex'>
                <div className='flex flex-col justify-center border-2 border-green-400 gap-5'>
                    <span className='text-6xl font-medium'>
                        Contact Us
                    </span>
                    <div className="bg-[#282828] w-[40rem] flex justify-between items-center px-2 rounded-full focus-within:ring-4 focus-within:ring-white/30 transition-all duration-300 group">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="px-4 border-0 outline-none py-2 h-16 bg-transparent flex-1"
                        />

                        <button className="bg-orange-300 hover:bg-white transition-all duration-500 ease-in-out h-12 rounded-full w-12 flex justify-center items-center">
                            <ArrowRight className="text-black -rotate-45 group-focus-within:rotate-45 transition-transform duration-500 ease-in-out" />
                        </button>
                    </div>


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

                </div>
            </div>
            <div className='border-2 border-amber-400'>
                <span className='text-[18rem] font-medium [word-spacing:3rem] whitespace-nowrap tracking-[-0.1em]'>
                    Capsule Corps.
                </span>
                <div className='text-xs flex items-center'>
                    <span>
                        &copy; {year} Capsule Corps. All Rights Reserved
                    </span>
                    <DotIcon />
                    <Link href={'/privacy-policy'}>
                        <span>Privacy Policy</span>
                    </Link>
                    <DotIcon />
                    <Link href={'/terms-conditions'}>
                        <span>Terms &amp; Conditions</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer