import { FadeInView } from "@/components/FadeInView";
import Link from "next/link";
import { Features } from "@/components/Features";
import { HomeImage } from "@/components/HomeImage";
import { JsonLd } from "@/components/JsonLd";
import { SlideInView } from "@/components/SlideInView";
import { Button } from "@/components/ui/button";
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer";
import { FaRocket, FaFileCode, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <JsonLd 
        data={{
          "@context": "https://scheme.org",
          "@type": "WebSite",
          "name": "Tone King Development",
          "url": "https://www.tonekingdev.com",
          "description": "Software development for start-up companies with instant quotes and SMB discounts",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.tonekingdev.com/search?q={search_term_string)",
            "query-input": "required name=search_term_string"
          }
        }} 
      />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:justify-between py-8 xl:pb-24">
          <div className="order-2 xl:order-none mt-8 xl:mt-0">
            <HomeImage />
          </div>
          <div className="text-center xl:text-left px-8">
            <FadeInView>
              <h1 className="pb-2">Transforming Dreams into <br /> <span className="text-red-600 dark:text-lime-500">Digital Reality</span></h1>
              <p>
                At Tone King Development, we merge creativity with innovation to revolutionize your online presence. With mastery in React, Next.Js, Python, and AI technologies, we craft dynamic websites, intuitive applications, and groundbreaking software solutions. Let us be your partner in progress, turning your ideas into captivating digital experiences that set you apart in the digital landscape.
              </p>
            </FadeInView>
            <SlideInView>
              <Link href="/contact">
                <Button variant='outline' className="shadow-md font-semibold hover:text-red-600 hover:bg-white hover:border-red-500 dark:hover:border-lime-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500">
                Start Now
              </Button>
              </Link>
            </SlideInView>
          </div>
        </div>
      </div>
      <Features />
      <section className="container flex flex-col xl:flex-row py-8 gap-8 mx-auto justify-center items-center" aria-label="Our Features">
        <FadeInView>
          <GlassmorphicContainer className="p-8 md:p-6">
            <FaRocket className="w-12 h-12 mx-auto mb-4 text-red-500 dark:text-lime-500" aria-hidden="true" />
            <h2 className="text-xl font-semibold dark:font-bold mb-2 text-center text-charcoal dark:text-lime-500">Fast Development</h2>
            <p className="text-center">
              We quickly turn your ideas into functional digital solutions.
            </p>
          </GlassmorphicContainer>
        </FadeInView>
        <FadeInView>
          <GlassmorphicContainer className="p-8">
            <FaFileCode className="w-12 h-12 mx-auto mb-4 text-red-500 dark:text-lime-500" aria-hidden="true" />
            <h2 className="text-xl font-semibold dark:font-bold mb-2 text-center text-charcoal dark:text-lime-500">Web Development</h2>
            <p className="text-center">
              Expert CMS and custom coding solutions for your web projects including redesign.
            </p>
          </GlassmorphicContainer>
        </FadeInView>
        <FadeInView>
          <GlassmorphicContainer className="p-8">
            <FaUsers className="w-12 h-12 mx-auto mb-4 text-red-500 dark:text-lime-500" aria-hidden="true" />
            <h2 className="text-xl font-semibold dark:font-bold mb-2 text-center text-charcoal dark:text-lime-500">SMB Benefits</h2>
            <p className="text-center">
              Special benefits for small and medium-sized businesses.
            </p>
          </GlassmorphicContainer>
        </FadeInView>
        <FadeInView>
          <GlassmorphicContainer className="p-8">
            <FaLightbulb className="w-12 h-12 mx-auto mb-4 text-red-500 dark:text-lime-500" aria-hidden="true" />
            <h2 className="text-xl font-semibold dark:font-bold mb-2 dark:text-lime-500">Innovative Solutions</h2>
            <p className="text-center">
              Our team crafts creative and efficient solutions for complex business problems.
            </p>
          </GlassmorphicContainer>
        </FadeInView>
      </section>
      <section className="container mx-auto">
        <FadeInView>
          <GlassmorphicContainer className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to bring your idea to life?</h2>
            <p className="text-xl mb-8">Get started with a free consultation today!</p>
            <div className="flex justify-center space-x-4">
              <Button variant='destructive' size="lg" className="shadow-md font-semibold hover:text-red-500 hover:bg-white hover:border-red-500 dark:bg-primary dark:text-red-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500 ease-in-out">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </GlassmorphicContainer>
        </FadeInView>
      </section>
    </>
  );
}