import BackButton from "@/components/BackButton";
import { DropInView } from "@/components/DropInView";
import { FadeInView } from "@/components/FadeInView";
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer";
import { SlideInView } from "@/components/SlideInView";
import { FaShieldAlt, FaUserSecret, FaLock, FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Cybersecurity() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-6">Cybersecurity</h1>
                </DropInView>
                <FadeInView>
                    <p className="mb-8">At Tone King Development, we understand that cybersecurity is crucial in today&apos;s digital landscape. Our team of security experts provides comprehensive cybersecurity solutions to protect your business from evolving threats and ensure the integrity of your data and systems.</p>
                </FadeInView>
                <FadeInView>
                    <h2 className="mb-4">Our Cybersecurity Services:</h2>
                </FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaShieldAlt className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="mb-2">Vulnerability Assessment</h3>
                            <p>We conduct thorough assessments of your systems and networks to identify potential vulnerabilities and provide remediation strategies.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaUserSecret className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="mb-2">Penetration Testing</h3>
                            <p>Our ethical hackers perform controlled cyberattacks to test your defenses and uncover security weaknesses.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaLock className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="mb-2">Security Audits</h3>
                            <p>We conduct comprehensive security audits to ensure your systems comply with industry standards and best practices.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaCode className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="mb-2">Secure Code Review</h3>
                            <p>Our experts review your application code to identify and fix security vulnerabilities before they can be exploited.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                </div>
                <FadeInView>
                    <h2 className="mb-4">Our Cybersecurity Approach:</h2>
                </FadeInView>
                <FadeInView>
                    <ul className="list-disc list-inside mb-8">
                        <li>Proactive threat detection and prevention</li>
                        <li>Continuous monitoring and incident response</li>
                        <li>Implementation of robust access controls and encryption</li>
                        <li>Regular security awareness training for your team</li>
                        <li>Compliance with industry-specific security regulations (GDPR, HIPAA, etc.)</li>
                    </ul>
                </FadeInView>
                <SlideInView>
                    <p>In an era where cyber threats are constantly evolving, protecting your digital assets is more important than ever. Our cybersecurity experts are committed to safeguarding your business against potential threats and ensuring the confidentiality, integrity, and availability of your data. Contact us today to learn how we can enhance your cybersecurity posture.</p>
                </SlideInView>
                &nbsp;
                <FadeInView>
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <Link href="/contact?service=Cybersecurity">
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