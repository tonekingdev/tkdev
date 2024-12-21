import { FaCode, FaDesktop, FaMobileAlt, FaRocket } from 'react-icons/fa'
import BackButton from '@/components/BackButton'
import { DropInView } from '@/components/DropInView'
import { SlideInView } from '@/components/SlideInView'
import { FadeInView } from '@/components/FadeInView'
import { GlassmorphicContainer } from '@/components/GlassmorphicContainer'

export default function WebDevelopment() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-6">Web Development</h1>
                </DropInView>
                <SlideInView>
                    <p className="mb-8">At Tone King Development, we specialize in creating cutting-edge web applications that are both functional and visually appealing. Our team of expert developers uses the latest technologies to ensure your web presence is robust, scalable, and future-proof.</p>
                </SlideInView>
                <FadeInView>
                    <h2 className="mb-4">Our Web Development Process:</h2>
                </FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <FadeInView>
                        <GlassmorphicContainer className='p-6'>
                            <FaDesktop className='text-3xl text-accent dark:text-accent-hover mb-2' />
                            <h3 className="font-semibold mb-2">Responsive Design</h3>
                            <p>We create websites that look great and function flawlessly on all devices, from desktops to smartphones.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className='p-6'>
                            <FaCode className='text-3xl text-accent dark:text-accent-hover mb-2' />
                            <h3 className="font-semibold mb-2">Clean, Efficient Code</h3>
                            <p>Our developers write clean, maintainable code that ensures your website runs smoothly and efficiently.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className='p-6'>
                            <FaMobileAlt className='text-3xl text-accent dark:text-accent-hover mb-2' />
                            <h3 className="font-semibold mb-2">Progressive Web Apps</h3>
                            <p>We build progressive web apps that offer a native app-like experience right in the browser.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className='p-6'>
                            <FaRocket className='text-3xl text-accent dark:text-accent-hover mb-2' />
                            <h3 className="font-semibold mb-2">Performance Optimization</h3>
                            <p>We optimize your web applications for speed and performance, ensuring fast load times and smooth user experiences.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                </div>
                <FadeInView>
                    <h2 className="mb-4">Technologies We Use:</h2>
                </FadeInView>
                <FadeInView>
                    <ul className="list-disc list-inside mb-8">
                        <li>React.js and Next.js for dynamic, server-side rendered applications</li>
                        <li>Vue.js and Next.js for lightweight, high-performance apps</li>
                        <li>Node.js and Express for robust backend services</li>
                        <li>GraphQL for efficient, flexible APIs</li>
                        <li>Tailwind CSS for rapid, customizable UI development</li>
                    </ul>
                </FadeInView>
                <SlideInView>
                    <p>Whether you need a simple landing page or a complex web application, our team has the skills and experience to bring your vision to life. Contact us today to start your web development journey!</p>
                </SlideInView>
                &nbsp;
                <BackButton />
            </div>
        </section>
    )
}