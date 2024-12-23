import { Suspense } from "react"
import { Metadata } from "next"
import { FaEnvelope } from "react-icons/fa"
import ContactForm from "@/components/ContactForm"
import { DropInView } from "@/components/DropInView"
import { SlideInView } from "@/components/SlideInView"
import { FadeInView } from "@/components/FadeInView"
import BackButton from "@/components/BackButton"

export const metadata: Metadata = {
    title: 'Contact Us | Tone King Development',
    description: 'Get in touch with Tone King Development for all your web and mobile development needs.',
}

export default function Contact() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-12 text-center">Get in Touch</h1>
                </DropInView>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <SlideInView>
                            <p className="text-xl mb-8">We&apos;d love to hear from you. Whether you have a question about our services, want to start a project, or just want to chat, our team is ready to answer all your questions.</p>
                        </SlideInView>
                        <SlideInView>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FaEnvelope className="text-accent dark:text-accent-hover mr-4" />
                                    <span>info@tonekingdev.com</span>
                                </div>
                            </div>
                        </SlideInView>
                    </div>
                    <div className="md:w-1/2">
                        <FadeInView>
                            <Suspense fallback={<div>Loading form...</div>}>
                                <ContactForm />
                            </Suspense>
                        </FadeInView>
                    </div>
                </div>
                &nbsp;
                <FadeInView>
                    <BackButton />
                </FadeInView>
            </div>
        </section>
    )
}