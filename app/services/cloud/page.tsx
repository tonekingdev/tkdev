'use client'

import BackButton from "@/components/BackButton"
import { DropInView } from "@/components/DropInView"
import { FadeInView } from "@/components/FadeInView"
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer"
import { SlideInView } from "@/components/SlideInView"
import { FaCloud, FaServer, FaLock, FaChartLine } from "react-icons/fa"
import Link from "next/link"

export default function CloudSolutions() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="font-bold mb-6">Cloud Solutions</h1>
                </DropInView>
                <SlideInView>
                    <p className="mb-8">Tone King Development offers comprehensive cloud solutions to help businesses leverage the power of cloud computing. Our expert team designs, implements, and manages cloud infrastructures that are scalable, secure, and cost-effective.</p>
                </SlideInView>
                <h2 className="font-bold mb-4">Our Cloud Services:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaCloud className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Cloud Migration</h3>
                            <p>We help businesses seamlessly transition their existing infrastructure and applications to the cloud, minimizing downtime and ensuring data integrity.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaServer className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Cloud Infrastructure Management</h3>
                            <p>Our team designs, implements, and manages robust cloud infrastructures tailored to your specific business needs.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaLock className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Cloud Security</h3>
                            <p>We implement industry-leading security measures to protect your data and applications in the cloud.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaChartLine className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Cloud Optimization</h3>
                            <p>We continuously monitor and optimize your cloud resources to ensure maximum performance and cost-efficiency.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                </div>
                <FadeInView>
                    <h2 className="font-bold mb-4">Cloud Platforms We Work With:</h2>
                    <ul className="list-disc list-inside mb-8">
                        <li>Amazon Web Services</li>
                        <li>Microsoft Azure</li>
                        <li>Google Cloud Platform</li>
                    </ul>
                    <SlideInView>
                        <p>Whether you&apos;re looking to migrate to the cloud, optimize your existing cloud infrastructure, or implement a multi-cloud strategy, our team of cloud experts is here to guide you every step of the way. Contact us to learn how we can help your business harness the full potential of cloud computing.</p>
                    </SlideInView>
                </FadeInView>
                &nbsp;
                <FadeInView>
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <Link href="/contact?service=Cloud Solutions">
                            <button className="mb-4 flex items-center shadow-md font-semibold hover:bg-white hover:text-red-600 dark:bg-white dark:text-red-600 dark:hover:bg-lime-500 dark:hover:text-white px-4 py-1 rounded-md transition-all duration-500">
                                Start Now
                            </button>
                        </Link>
                    </div>
                </FadeInView>
            </div>
        </section>
    )
}