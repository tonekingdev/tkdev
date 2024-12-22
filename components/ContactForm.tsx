/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "@/hooks/use-toast"

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
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.enum(serviceOptions, {
        required_error: "Please select a subject.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactForm() {
    const searchParams = useSearchParams()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: searchParams?.get('service') as z.infer<typeof formSchema>['subject'] || "General Inquiry",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        //Send the form data to your backend
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            toast({
                title: "Success!",
                description: "Your message has been sent. We'll get back to you soon.",
            })
            form.reset()
        } catch (error) {
            toast({
                title: "Error",
                description: "There was a problem submitting the form. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white/20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-primary/20 p-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <select
                                    {...field}
                                    className="w-full p-3 bg-primary/10 border border-primary/20 rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-accent-hover focus:border-transparent"
                                >
                                    {serviceOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant='destructive' type="submit" disabled={isSubmitting} className="shadow-md font-semibold hover:text-red-600 hover:bg-white hover:border-red-600 dark:bg-primary dark:text-red-500 dark:hover:bg-lime-500 dark:hover:text-white transition-all duration-500">
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}