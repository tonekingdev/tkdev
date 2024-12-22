'use client'

import BackButton from "@/components/BackButton"
import { DropInView } from "@/components/DropInView"
import { FadeInView } from "@/components/FadeInView"
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer"
import { SlideInView } from "@/components/SlideInView"
import { FaDatabase, FaSearch, FaShieldAlt, FaSyncAlt } from "react-icons/fa"
import Link from "next/link"

export default function DatabaseManagement() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <DropInView>
                    <h1 className="mb-6">Database Management</h1>
                </DropInView>
                <SlideInView>
                    <p className="mb-8">At Tone King Development, we provide comprehensive database management services to ensure your data is secure, efficient, and always available. Our expert team handles everything from database design and implementation to ongoing maintenance and optimization.</p>
                </SlideInView>
                <FadeInView>
                    <h2 className="mb-4">Our Database Management Services:</h2>
                </FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaDatabase className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Database Design & Implementation</h3>
                            <p>We design and implement robust database structures tailored to your specific business needs and data requirements.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaSearch className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Performance Tuning</h3>
                            <p>Our experts optimize your database queries and structures to ensure fast data retrieval and efficient operations.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaShieldAlt className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Data Security</h3>
                            <p>We implement robust security measures to protect your valuable data from unauthorized access and potential threats.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                    <FadeInView>
                        <GlassmorphicContainer className="p-6">
                            <FaSyncAlt className="text-3xl text-accent dark:text-accent-hover mb-2" />
                            <h3 className="font-semibold mb-2">Backup & Recovery</h3>
                            <p>We set up and manage regular backup procedures and create disaster recovery plans to ensure your data is always safe and recoverable.</p>
                        </GlassmorphicContainer>
                    </FadeInView>
                </div>
                <FadeInView>
                    <h2 className="font-bold mb-4">Database Technologies We Work With:</h2>
                    <ul className="list-disc list-inside mb-8">
                        <li>Relational Databases: MySQL, PostgreSQL, Oracle, Microsoft SQL Server</li>
                        <li>NoSQL Databases: MongoDB, Cassandra, Redis</li>
                        <li>Cloud Databases: Amazon RDS, Google Cloud SQL, Azure SQL Database</li>
                        <li>Big Data Solutions: Hadoop, Spark</li>
                    </ul>
                    <SlideInView>
                        <p>Whether you need help with database design, migration, performance optimization, or ongoing management, our team of database experts is here to ensure your data infrastructure supports your business goals. Contact us today to learn how we can help you manage and leverage your data effectively.</p>
                    </SlideInView>
                </FadeInView>
                &nbsp;
                <FadeInView>
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <Link href="/contact?service=Database Management">
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