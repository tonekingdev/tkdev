"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from '@/hooks/use-toast' 
import ToastContainer from './ToastContainer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

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

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.enum(serviceOptions, { required_error: "Please select a subject." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: 'General Inquiry',
        },
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/submit-form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data),
            })

            const text = await response.text();
            let responseData;
            try {
                responseData = JSON.parse(text);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                throw new Error('Invalid response from server');
            }

            if (responseData.error) {
                throw new Error(responseData.error)
            }

            toast({
                title: "Success!",
                description: responseData.message || "Your message has been sent. We'll get back to you soon.",
                duration: 5000, // Auto-dismiss after 5 seconds
            })
            reset()
        } catch (error) {
            console.error('Form submission error:', error)
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "There was a problem submitting your form. Please try again.",
                variant: "destructive",
                duration: 7000, // Auto-dismiss after 7 seconds
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="relative">
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8 bg-white/20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-primary/20">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                    <Input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                    <Input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white">Subject</label>
                    <select
                        id="subject"
                        {...register('subject')}
                        className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${errors.subject ? 'border-red-500' : ''}`}
                    >
                        {serviceOptions.map((option) => (
                            <option key={option} value={option} className="dark:text-charcoal">{option}</option>
                        ))}
                    </select>
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
                    <Textarea
                        id="message"
                        {...register('message')}
                        className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>
                <Button 
                    variant='destructive' 
                    type="submit" 
                    disabled={isSubmitting}
                    className="shadow-md dark:bg-primary hover:bg-white hover:border-red-600 hover:text-accent dark:text-red-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </form>
        </div>
    )
}