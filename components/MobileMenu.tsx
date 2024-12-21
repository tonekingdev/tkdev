'use client'

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { HiHome, HiCircleStack, HiViewColumns, HiEnvelope, HiCommandLine } from 'react-icons/hi2'
import { Button } from "./ui/button"

const links = [
    {
        name: "home",
        path: "/",
        icon: <HiHome />
    },
    {
        name: "about",
        path: "/about",
        icon: <HiCircleStack />
    },
    {
        name: "projects",
        path: "/projects",
        icon: <HiViewColumns />
    },
    {
        name: "services",
        path: "/services",
        icon: <HiCommandLine />
    },
    {
        name: "contact",
        path: "/contact",
        icon: <HiEnvelope />
    },
]

export function MobileMenu() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex justify-center items-center">
            <AiOutlineMenu className="text-[32px] text-accent dark:text-accent-hover" />
            <span className="sr-only">Toggle Menu</span>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <SheetTitle className="text-left mb-4 text-white">Menu</SheetTitle>
            {/* logo */}
            {/* <div className="mt-32 mb-30 text-2xl">
                <Link href="/">
                    <h2 className="text-3xl font-semibold"><span className="text-charcoal dark:text-white">Tone King</span> <span className="text-accent">Development</span></h2>
                </Link>
            </div> */}
            {/* menu */}
            <nav className="flex flex-col justify-center gap-8 text-white">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent font-bold dark:text-white"}text-xl hover:font-semibold capitalize hover:text-accent-hover transition-all duration-500`}>
                            <div className="flex flex-row gap-x-2 items-center">
                                {link.icon}
                                {link.name}
                            </div>
                        </Link>
                    );
                })}
                <Button variant='destructive' className="shadow-md font-semibold bg-red-600 text-white hover:text-red-600 hover:bg-white hover:border-red-600 dark:bg-primary dark:text-red-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500">
                    <Link href="/contact">Get Started</Link>
                </Button>
            </nav>
        </SheetContent>
    </Sheet>
    )
}