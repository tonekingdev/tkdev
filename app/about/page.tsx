'use client'

import BackButton from "@/components/BackButton"
import { DropInView } from "@/components/DropInView"
import { FadeInView } from "@/components/FadeInView"
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer"
import { SlideInView } from "@/components/SlideInView"
import Image from "next/image"

export default function AboutPage() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <div className="flex flex-col xl:flex-row items-center gap-12 mb-8">
                    <div className="xl:w-1/2">
                        <SlideInView>
                            <Image alt="Favicon" src="/img/android-chrome-512x512.png" width={600} height={400} className="rounded-lg shadow-lg" />
                        </SlideInView>
                    </div>
                    <div className="xl:w-1/2">
                        <FadeInView>
                            <p className="mb-4">
                                Tone King Development is a DBA under PC BRAINIACS LLC, which was formed in August 2013. We have partnered with Tech Town, Detroit&apos;s entrepreneurship hub, to provide cutting-edge development services to tech startups and established SMBs alike.
                            </p>
                            <p className="mb-4">
                                Our team has successfully developed two MVP apps for tech startup companies and has been selected to develop a third for a new tech startup company in the upcoming cohort starting in January 2025. Additionally, we offer comprehensive web services for SMBs, ranging from new development projects to complete website redesigns.
                            </p>
                            <p className="mb-4">
                                We specialize in creating scalable, user-friendly applications and websites that help businesses of all sizes grow and succeed in the digital landscape. Our passion for innovation and commitment to excellence sets us apart in the competitive world of tech development.
                            </p>
                        </FadeInView>
                    </div>
                </div>
                <div className="py-8">
                    <DropInView>
                        <h2 className="text-xl font-bold mb-4">Our Success Stories</h2>
                    </DropInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-4 mb-2">
                        <DropInView>
                                <h3 className="text-xl font-bold mb-2 text-accent dark:text-lime-500">V-Storm</h3>
                            </DropInView>
                            <p>
                                A healthcare learning management platform that improves the competencies of healthcare personnel and students. V-Storm demonstrates our ability to create impactful solutions in the healthcare education sector using React Native, Node.js, and Firebase.
                            </p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-4 mb-8">
                            <DropInView>
                                <h3 className="text-xl font-bold mb-2 text-accent dark:text-lime-500">Localsine</h3>
                            </DropInView>
                            <p>
                                A platform that connects local catering companies with pharmaceutical organizations for their meet and greet events, keeping the dollar in the local community. Developed using React Native, Node.js, and Firebase, this MVP won the voter&apos;s choice award, showcasing our commitment to creating innovative solutions that make a difference.
                            </p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <p>
                            These successful projects highlight our expertise in developing innovative, user-centric applications that address real-world needs. By leveraging powerful technologies like React Native, Node.js, and Firebase, we&apos;re able to create robust, scalable solutions for various industries. Our services extend beyond app development to include comprehensive web solutions for SMBs, ensuring businesses of all sizes can benefit from our expertise. We&apos;re excited to continue pushing the boundaries of what&apos;s possible in software development and to help more businesses achieve their digital goals.
                        </p>
                    </FadeInView>
                </div>
                <BackButton />
            </div>
        </section>
    )
}