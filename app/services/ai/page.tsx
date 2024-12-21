'use client'

import BackButton from "@/components/BackButton"
import { DropInView } from "@/components/DropInView"
import { FadeInView } from "@/components/FadeInView"
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer"
import { FaRobot, FaBrain, FaChartBar, FaComments } from "react-icons/fa"

export default function AIandMachineLearning() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-6">AI & Machine Learning</h1>
                </DropInView>
                <FadeInView>
                    <p className="mb-8">
                        Tone King Development is at the forefront of Artificial Intelligence and Machine Learning technologies. We help businesses harness the power of AI to gain insight, automate processes, and creative innovative solutions that drive growth and efficiency.
                    </p>
                </FadeInView>
                <FadeInView>
                    <h2 className="font-bold mb-4">Our AI & Machine Learning Services:</h2>
                </FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaRobot className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Custom AI Solutions</h3>
                            <p>We develop tailored AI solutions that address your specific business challenges and opportunities.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaBrain className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Machine Learning Models</h3>
                            <p>Our team designs and implements machine learning models that can predict outcomes, classify data, and provide valuable insights.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaChartBar className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                            <p>We leverage AI to analyze your data and provide accurate predictions to inform your business decisions.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaComments className="text-3xl text-accent dark:text-lime-500 mb-2" />
                            <h3 className="font-semibold mb-2">Natural Language Processing</h3>
                            <p>We build NLP solutions for tasks like sentiment analysis, chatbots, and automated content generation.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                </div>
                &nbsp;
                <FadeInView>
                    <BackButton />
                </FadeInView>
            </div>
        </section>
    )
}