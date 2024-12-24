import Link from 'next/link'
import { IconType } from 'react-icons';
import { FaMobileAlt, FaDesktop, FaCloud, FaDatabase, FaRobot, FaLock, FaPencilRuler } from 'react-icons/fa'
import ClientBackButton from '@/components/ClientBackButton'

interface Service {
    name: string;
    href: string;
    icon: IconType;
    color: string;
}

const services: Service[] = [
  { name: 'Mobile App Development', href: '/services/mobile', icon: FaMobileAlt, color: 'from-accent to-accent-hover' },
  { name: 'Web Development', href: '/services/web', icon: FaDesktop, color: 'from-accent-hover to-accent' },
  { name: 'Website Redesign', href: '/services/redesign', icon: FaPencilRuler, color: 'from-accent to-accent-hover' },
  { name: 'Cloud Solutions', href: '/services/cloud', icon: FaCloud, color: 'from-accent-hover to-accent' },
  { name: 'Database Management', href: '/services/database', icon: FaDatabase, color: 'from-accent to-accent-hover' },
  { name: 'AI & Machine Learning', href: '/services/ai', icon: FaRobot, color: 'from-accent-hover to-accent' },
  { name: 'Cybersecurity', href: '/services/security', icon: FaLock, color: 'from-accent to-accent-hover' },
]

export default function Services() {
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-center mb-6">Our Services</h1>
      <p className="text-center mb-12">
        From startup MVPs to comprehensive SMB web solutions, we leverage cutting-edge technologies like React Native, Node.js, and Firebase to deliver robust and scalable solutions across various domains.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link key={service.name} href={service.href} className="block">
              <div className={`p-6 h-full bg-gradient-to-br rounded-lg ${service.color} transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95`}>
                <Icon className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p>Click to learn more about our {service.name.toLowerCase()} services.</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <ClientBackButton />
      </div>
    </section>
  )
}