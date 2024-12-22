import BackButton from "@/components/BackButton";
import { DropInView } from "@/components/DropInView";
import { FadeInView } from "@/components/FadeInView";
import { SlideInView } from "@/components/SlideInView";
import Link from "next/link";

export default function MobileAppDevelopment() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-6">Mobile App Development</h1>
                </DropInView>
                <SlideInView>
                    <p className="mb-4">At Tone King Development, we specialize in creating cutting-edge mobile applications for both iOS and Android platforms. Our team of experienced developers ensures that your app is not only functional but also user-friendly and visually appealing.</p>
                </SlideInView>
                <FadeInView>
                    <h2 className="mb-4">Our Mobile Development Process:</h2>
                </FadeInView>
                <FadeInView>
                    <ul className="list-disc list-inside mb-4">
                        <li>Requirement Analysis</li>
                        <li>UI/UX Design</li>
                        <li>Development</li>
                        <li>Testing</li>
                        <li>Deployment</li>
                        <li>Maintenance and Support</li>
                    </ul>
                </FadeInView>
                <SlideInView>
                    <p>Whether you need a simple MVP or a complex enterprise application, we have the skills and experience to bring your vision to life.</p>
                </SlideInView>
                &nbsp;
                <FadeInView>
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <Link href="/contact?service=Mobile App Development">
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