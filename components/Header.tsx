'use client'

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { DarkModeToggle } from "./DarkModeToggle"
import Nav, { links } from "./Nav"
import { MobileMenu } from "./MobileMenu"
import { Button } from "./ui/button"

export default function Header() {
    useEffect(() => {
        //Prefetech all navigation routes
        links.forEach(link => {
            if (link.path !== '/') {
                void fetch(link.path)
            }
        })
    }, [])

    return (
        <header className="py-8 xl:py-12 z-100">
            {/* logo */}
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image src='/img/tonekingdevLogo.png' alt='Logo' width={100} height={100} className="rounded-full shadow-md" priority />
                </Link>
                <div className="flex items-center gap-2 xl:mr-16">
                    <Link href="/contact">
                        <Button variant='destructive' className="hidden md:block shadow-md font-semibold hover:text-red-600 hover:bg-white hover:border-red-600 dark:bg-white dark:text-red-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500">Get Started</Button>
                    </Link>
                    <DarkModeToggle />
                    {/* mobile menu */}
                    <div className="xl:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
            <Nav />
        </header>
    )
}