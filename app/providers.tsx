'use client'

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <ThemeProvider attribute="class">
            <AnimatePresence mode="wait">
                <motion.div key={pathname} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </ThemeProvider>
    )
}