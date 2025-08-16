'use client'

import { ArrowRight, DotIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import FooterSocials from './footer-socials'
import FooterInput from './footer-input'
import MultiColumnNav from './footer-nav'

const Footer = () => {
    const [year, setYear] = useState<number>()
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <div className='flex flex-col w-full min-h-[60vh] bg-[#111212] p-10 font-poppins'>
            <div className='flex'>
                <div className='flex flex-col justify-center gap-5'>
                    <span className='text-4xl tracking-tighter font-medium'>
                        Stay in touch
                    </span>
                    <FooterInput />
                    <FooterSocials />
                </div>
                <MultiColumnNav
                    leftItems={[
                        { label: 'Service', href: '/service' },
                        { label: 'Work', href: '/work' },
                        { label: 'About', href: '/about' },
                        { label: 'Culture', href: '/culture' },
                    ]}
                    middleItems={[
                        { label: 'EPISODE', href: '/episode' },
                        { label: 'Kitse', href: '/kitse' },
                        { label: 'CapsD', href: '/capsd' },
                    ]}
                    rightItems={[
                        { label: 'Testimonials', href: '/testimonials' },
                        { label: 'Blog', href: '/blog' },
                        { label: 'Contact', href: '/contact' },
                    ]}
                />

            </div>
            <div className=''>
                <span className='text-[18rem] font-medium [word-spacing:3rem] whitespace-nowrap tracking-[-0.1em]'>
                    Capsule Corps.
                </span>
                <div className='flex justify-between items-center text-xs'>
                    <div className='flex items-center'>
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
                    <div className='flex items-center'>
                        <span>
                            Website Made By CapsD
                        </span>
                        <DotIcon />
                        <span>
                            Maynkudu
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer