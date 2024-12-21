import Link from "next/link";
import { Social } from "./Social";

export default function Footer() {
    return (
        <footer className="py-8 xl:py-12 z-100 w-full font-medium text-base">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-solid border-accent dark:border-lime-500 pt-3">
                <div>
                    <span>Copyright &copy; {new Date().getFullYear()} Tone King Development. All Rights Reserved.</span>
                </div>
                <div className="flex items-center">
                    Build with <span className="text-2xl px-1 text-accent dark:text-lime-500">&#9825;</span> by &nbsp;<Link className="underline underline-offset-2" href="/">Tone King <span className="dark:text-lime-500 text-accent">Development</span></Link>
                </div>
                <div className="flex items-center">
                    <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent dark:text-lime-500 dark:border-lime-500 hover:bg-accent dark:hover:bg-lime-500 hover:text-white dark:hover:text-white hover:transition-all duration-500" />
                </div>
            </div>
        </footer>
    )
}