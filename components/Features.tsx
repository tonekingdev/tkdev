'use client'

import { FaReact, FaHtml5, FaPython, FaNodeJs, FaWordpress, FaLaptopCode } from "react-icons/fa"
import { TbBrandNextjs, TbBrandJavascript, TbBrandTailwind } from "react-icons/tb"
import React from "react";
import { FadeInView } from "./FadeInView";
import { DropInView } from "./DropInView";

interface Feature {
    name: string;
    icon: React.ReactNode
}

const features: Feature[] = [
    {
        name: "react",
        icon: <FaReact />
    },
    {
        name: "web development",
        icon: <FaHtml5 />
    },
    {
        name: "python",
        icon: <FaPython />
    },
    {
        name: "next.js",
        icon: <TbBrandNextjs />
    },
    {
        name: "javascript",
        icon: <TbBrandJavascript />
    },
    {
        name: "tailwind css",
        icon: <TbBrandTailwind />
    },
    {
        name: "other coding languages",
        icon: <FaNodeJs />
    },
    {
        name: "wordpress",
        icon: <FaWordpress />
    },
    {
        name: "software development",
        icon: <FaLaptopCode />
    },
]

export function Features() {
    return (
        <section className="bg-white dark:bg-gray-600 py-8 w-full">
            <div className="container m-auto">
                <DropInView>
                    <div className="text-center">
                        <h2 className="text-charcoal dark:text-white font-bold text-[24px] md:text-[32px] xl:text-[40px]">We <span className="text-accent dark:text-accent-hover">Specialize</span> in these <span className="text-accent dark:text-accent-hover">Technologies...</span></h2>
                    </div>
                </DropInView>
                <FadeInView>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mx-auto">
                        {features.map((feature, index) => {
                            return (
                                <div className="flex items-center" key={index}>
                                    <div className="text-4xl xl:text-6xl text-accent dark:text-accent-hover font-extrabold drop-shadow-2xl">
                                        {feature.icon}
                                    </div>
                                    <p className={`${feature.name.length < 9 ? "max-w-[100px]" : "max-w-150px"} leading-snug text-charcoal dark:text-white/80 capitalize font-semibold`}>
                                        {feature.name}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </FadeInView>
            </div>
        </section>
    )
}