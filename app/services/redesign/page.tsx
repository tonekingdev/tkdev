import { FaPencilRuler, FaMobileAlt, FaSearch, FaRocket } from "react-icons/fa";
import BackButton from "@/components/BackButton";
import { DropInView } from "@/components/DropInView";
import { SlideInView } from "@/components/SlideInView";
import { FadeInView } from "@/components/FadeInView";
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer";
import Link from "next/link";

export default function WebsiteRedesign() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-6">Website Redesign</h1>
                </DropInView>
                <SlideInView>
                    <p className="mb-8">At Tone King Development, we specialize in transforming outdated websites into modern, user-friendly, and high-performing digital assets. Our website redesign services are tailored to help SMBs revitalize their online presence and drive business growth.</p>
                </SlideInView>
                <FadeInView>
                    <h2 className="mb-4">Our Website Redesign Process:</h2>
                </FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaPencilRuler className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Strategic Planning</h3>
                            <p>We analyze your current website, business goals, and target audience to create a comprehensive redesign strategy.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaMobileAlt className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Responsive Design</h3>
                            <p>We ensure your new website looks great and functions flawlessly on all devices, from desktops to smartphones.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaSearch className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">SEO Optimization</h3>
                            <p>We implement best practices for search engine optimization to improve your website&apos;s visibility and ranking.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaRocket className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Performance Boost</h3>
                            <p>We optimize your website for speed and performance, ensuring fast load times and smooth user experiences.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                </div>
                <FadeInView>
                    <h2 className="mb-4">Benefits of Our Website Redesign Services:</h2>
                </FadeInView>
                <FadeInView>
                    <ul className="list-disc list-inside mb-8">
                        <li>Improved user experience and navigation</li>
                        <li>Mobile-friendly, responsive design</li>
                        <li>Enhanced brand consistency and visual appeal</li>
                        <li>Increased conversion rates and lead generation</li>
                        <li>Better search engine rankings and visibility</li>
                        <li>Faster loading times and improved performance</li>
                    </ul>
                </FadeInView>
                <SlideInView>
                    <p>Whether you need a complete overhaul or a strategic refresh, our team has the skills and experience to transform your website into a powerful business tool. Contact us today to start your website redesign journey and take your online presence to the next level!</p>
                </SlideInView>
                &nbsp;
                <FadeInView>
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <Link href="/contact?service=Website Redesign">
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