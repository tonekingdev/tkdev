"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from '@/hooks/use-toast' 
import ToastContainer from './ToastContainer'

const serviceOptions = [
    "General Inquiry",
    "Mobile App Development",
    "Web Development",
    "Cloud Solutions",
    "Database Management",
    "AI & Machine Learning",
    "Cybersecurity",
    "Website Redesign"
] as const
  
export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    })

    const { toast } = useToast()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
        const response = await fetch('/submit-form.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData),
        })

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        const text = await response.text();
        console.log('Raw response:', text);

        let data;
        try {
            data = JSON.parse(text);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            throw new Error('Invalid response from server');
        }

        if (data.error) {
            throw new Error(data.error)
        }

        toast({
            title: "Success!",
            description: data.message || "Your message has been sent. We'll get back to you soon.",
        })
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
        } catch (error) {
        console.error('Form submission error:', error)
        toast({
            title: "Error",
            description: error instanceof Error ? error.message : "There was a problem submitting your form. Please try again.",
            variant: "destructive",
        })
        } finally {
        setIsSubmitting(false)
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="space-y-4 p-8 bg-white/20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-primary/20">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                    <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                    <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white">Subject</label>
                    <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                    {serviceOptions.map((option) => (
                        <option key={option} value={option} className="dark:text-charcoal">{option}</option>
                    ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
                    <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    />
                </div>
                <Button variant='destructive' type="submit" disabled={isSubmitting} className="shadow-md dark:bg-primary hover:bg-white hover:border-red-600 hover:text-accent dark:text-red-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500">
                {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
  )
}