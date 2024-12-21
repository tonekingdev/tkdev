import BackButton from "@/components/BackButton"
import { GlassmorphicContainer } from "@/components/GlassmorphicContainer"
import Image from "next/image"
import { FaAward, FaHospital, FaUtensils } from "react-icons/fa"

const projects = [
    {
        name: 'V-Storm',
        description: 'A healthcare learning management platform that improves the competencies of healthcare personnel and students.',
        image: '/img/vStormLogin.png',
        icon: FaHospital,
        technologies: ['React Native', 'Node.js', 'Firebase'],
        features: [
            'Interactive learning modules',
            'Progress tracking',
            'Certification management',
            'Real-time collaboration tools'
        ]
    },
    {
        name: 'Localsine',
        description: 'A platform connecting local catering companies with pharmaceutical organizations for meet and greet events.',
        image: '/img/localsineSplash.png',
        icon: FaUtensils,
        technologies: ['React Native', 'Node.js', 'Firebase'],
        features: [
            'Vendor management',
            'Event scheduling',
            'Menu customization',
            'Analytics dashboard'
        ],
        award: "Voter's Choice Award Winner"
    },
]

export default function Projects() {
    return (
        <section>
            <div className="container mx-auto py-8">
                <h1 className="text-center mb-12">Our Projects</h1>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <GlassmorphicContainer key={project.name} className="overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <Image src={project.image} alt={project.name} width="200" height="400" className="w-full pt-4 h-64 object-contain" />
                                </div>
                                <div className="p-6 md:w-1/2">
                                    <div className="flex items-center mb-4">
                                        <project.icon className="text-3xl text-accent dark:text-lime-500 mr-2" />
                                        <h2 className="text-2xl font-bold">
                                            {project.name}
                                        </h2>
                                    </div>
                                    <p className="mb-4">
                                        {project.description}
                                    </p>
                                    {project.award && (
                                        <div className="flex items-center mb-4 text-accent dark:text-lime-500">
                                            <FaAward className="mr-2" />
                                            <span>{project.award}</span>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold mb-2">
                                        Key Features:
                                    </h3>
                                    <ul className="list-disc list-inside mb-4">
                                        {project.features.map((feature, index) => (
                                            <li key={index}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Technologies Used:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-accent dark:bg-lime-500 text-primary text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </GlassmorphicContainer>
                    ))}
                </div>
                &nbsp;
                <BackButton />
            </div>
        </section>
    )
}