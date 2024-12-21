'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiHome, HiCircleStack, HiViewColumns, HiEnvelope, HiCommandLine } from "react-icons/hi2"

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

export default function Nav() {
    const pathname = usePathname()
    return (
        <nav className=" hidden z-100 xl:flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
            {/*inner*/}
            <div className="flex text-black dark:text-white shadow-lg w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/40 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent dark:text-accent-hover"} relative flex items-center group hover:text-accent-hover dark:hover:text-accent transition-all duration-500`}>
                            <div>
                                {link.icon} 
                            </div>
                        </Link>
                    )
                })}
            </div>
        </nav>
      )
}