'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useReactHookForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import * as z from 'zod'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { SERVICE_OPTIONS, BUDGET_RANGES, PROJECT_TIMELINES } from '@/lib/constants'

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    company: z.string().optional(),
    service: z.string().min(1, 'Please select a service'),
    budget: z.string().min(1, 'Please select a budget range'),
    timeline: z.string().min(1, 'Please select a project timeline'),
    projectDescription: z.string().min(10, 'Please provide at least 10 characters'),
    consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
})

type FormData = z.infer<typeof formSchema>

export function SupportForm() {
    const [formspreeState, handleFormspreeSubmit, resetFormspree] = useFormspree('mdkprqjp')

    const form = useReactHookForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            timeline: '',
            projectDescription: '',
            consent: false,
        },
    })

    const onSubmit = async (data: FormData) => {
        const submissionData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company || 'N/A',
            service: data.service,
            budget: data.budget,
            timeline: data.timeline,
            message: data.projectDescription,
            consent: data.consent,
            _subject: `New Support/Consultation Request from ${data.name}`,
        }

        await handleFormspreeSubmit(submissionData)

        if (formspreeState.succeeded) {
            form.reset()
        }
    }

    if (formspreeState.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[400px]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 dark:bg-green-900/10 p-8 rounded-3xl border border-green-100 dark:border-green-900/20"
                >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                        We&apos;ve received your details and will get back to you within 24 hours.
                    </p>
                    <Button
                        onClick={() => {
                            resetFormspree()
                            form.reset()
                        }}
                        variant="outline"
                        className="w-full"
                    >
                        Send Another Request
                    </Button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="p-6 md:p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Let's Discuss Your Project
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Fill out the form below and our engineering team will get back to you shortly.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Info Group */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Personal Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Full Name" {...field} className="bg-slate-50 dark:bg-slate-900/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Email Address" type="email" {...field} className="bg-slate-50 dark:bg-slate-900/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Phone Number" type="tel" {...field} className="bg-slate-50 dark:bg-slate-900/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Company (Optional)" {...field} className="bg-slate-50 dark:bg-slate-900/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Project Info Group */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Project Details</h3>
                        <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-slate-50 dark:bg-slate-900/50">
                                                <SelectValue placeholder="Select Service Needed" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {SERVICE_OPTIONS.map((service) => (
                                                <SelectItem key={service} value={service}>
                                                    {service}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-slate-50 dark:bg-slate-900/50">
                                                    <SelectValue placeholder="Budget Range" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {BUDGET_RANGES.map((budget) => (
                                                    <SelectItem key={budget} value={budget}>
                                                        {budget}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="timeline"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-slate-50 dark:bg-slate-900/50">
                                                    <SelectValue placeholder="Timeline" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {PROJECT_TIMELINES.map((timeline) => (
                                                    <SelectItem key={timeline} value={timeline}>
                                                        {timeline}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="projectDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about your project..."
                                            className="min-h-[100px] bg-slate-50 dark:bg-slate-900/50 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-xs font-normal text-slate-500 dark:text-slate-400">
                                        I agree to the privacy policy and consent to being contacted.
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={formspreeState.submitting}
                    >
                        {formspreeState.submitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Submit Request
                                <Send className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
