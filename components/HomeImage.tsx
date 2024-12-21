'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function HomeImage() {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity:1,
                transition: { delay: 2, duration: 0.3, ease: "easeIn" },
             }}>
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
                    <Image src="/img/creativity-digital-reality.png" priority alt="Creativity in Digital Reality" width={500} height={500} className="object-cover rounded-lg" />
                </div>
            </motion.div>
        </div>
    )
}