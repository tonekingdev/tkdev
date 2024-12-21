'use client'

import { useState, useEffect } from "react"
import { HiMoon } from 'react-icons/hi2'
import { BsSunFill } from 'react-icons/bs'

export function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        //Check Local storage for theme preference
        const theme = localStorage.getItem('theme')
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    }

    return (
        <div className="relative w-16 h-8 flex items-center mx-3 dark:bg-lime-500 bg-gray-400 cursor-pointer rounded-full p-2 transition-all duration-700 ease-in-out" onClick={toggleDarkMode}>
            <HiMoon className="text-white shadow-sm" size={18} />
            <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transition-all duration-300 ease-in-out" style={{ left: isDarkMode ? "2px" : "calc(100% - 26px)", transition: "left 0.3s ease-in-out" }}></div>
            <BsSunFill className="ml-auto text-yellow-500 shadow-sm" size={18} />
        </div>
    )
}