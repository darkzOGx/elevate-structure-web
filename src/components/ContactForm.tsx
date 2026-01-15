'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useReactHookForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import * as z from 'zod'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/badge'
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
import { COMPANY_INFO, SERVICE_OPTIONS, BUDGET_RANGES, PROJECT_TIMELINES } from '@/lib/constants'

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

export function ContactForm() {
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
      _subject: `New Consultation Request from ${data.name}`,
    }

    await handleFormspreeSubmit(submissionData)

    if (formspreeState.succeeded) {
      form.reset()
    }
  }

  if (formspreeState.succeeded) {
    return (
      <Section id="contact" className="bg-muted/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PremiumCard className="border-green-500/20 bg-green-500/5">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">
                    Thank You for Your Inquiry!
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We&apos;ve received your project details and will respond within 24 hours
                    with a detailed consultation and quote.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground bg-background/50 p-6 rounded-xl border border-border/50">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Your inquiry has been forwarded to our licensed engineers
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Expect a response within 24 hours
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    We&apos;ll include a preliminary assessment and next steps
                  </p>
                </div>
                <Button
                  onClick={() => {
                    resetFormspree()
                    form.reset()
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </Section>
    )
  }

  return (
    <Section id="contact" className="bg-muted/10">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get Started
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Ready to Start Your <span className="relative inline-block px-4 py-2 transform -rotate-1">
              <span className="absolute inset-0 bg-[#C5D6B6] rounded-2xl transform rotate-1"></span>
              <span className="relative text-slate-900 z-10">Project?</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get a free consultation and detailed quote for your engineering project.
            Our licensed Professional Engineers are ready to help bring your vision to life.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 shadow-xl border border-slate-200 dark:border-slate-800 p-0">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              
              <div className="p-8 space-y-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  Contact Information
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Phone</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Email</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors break-all leading-tight"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Office</p>
                    <p className="font-medium text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                      {COMPANY_INFO.address.streetAddress}<br />
                      {COMPANY_INFO.address.addressLocality}, {COMPANY_INFO.address.addressRegion} {COMPANY_INFO.address.postalCode}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                    <Clock className="h-6 w-6 text-primary transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Business Hours</p>
                    <div className="font-medium text-slate-700 dark:text-slate-300 space-y-1.5 text-base">
                      {COMPANY_INFO.businessHours.map((hours, index) => (
                        <p key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                          {hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 shadow-xl border border-slate-200 dark:border-slate-800 p-0">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary/60" />
            
            <div className="p-8 space-y-6">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                Why Choose Us?
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Free consultation & quote</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">24-hour response guarantee</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Licensed Professional Engineers</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">100% satisfaction guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 shadow-2xl border border-slate-200 dark:border-slate-800">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-primary/60" />
            
            <div className="p-8 md:p-10">
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Get Your Free Consultation</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Complete the form and receive your consultation within 24 hours.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Personal Details</h4>
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Smith" 
                                {...field} 
                                className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300" 
                              />
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
                            <FormLabel className="text-slate-700 dark:text-slate-300">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                type="email" 
                                {...field} 
                                className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300">Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(949) 981-4448" 
                                type="tel" 
                                {...field} 
                                className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300" 
                              />
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
                            <FormLabel className="text-slate-700 dark:text-slate-300">Company (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Company Name" 
                                {...field} 
                                className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Project Details</h4>
                    <div className="grid gap-6 md:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300">Service Needed *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                                  <SelectValue placeholder="Select service" />
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

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300">Budget Range *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                                  <SelectValue placeholder="Select budget" />
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
                            <FormLabel className="text-slate-700 dark:text-slate-300">Project Timeline *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                                  <SelectValue placeholder="Select timeline" />
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
                          <FormLabel className="text-slate-700 dark:text-slate-300">Project Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your project in detail. Include any specific requirements, goals, or challenges you're facing..."
                              className="min-h-[150px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none p-4"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Consent */}
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50/50 dark:bg-slate-900/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-relaxed">
                          <FormLabel className="text-base font-normal text-slate-600 dark:text-slate-400">
                            I agree to the{' '}
                            <a href="/privacy" className="text-primary hover:underline font-semibold">
                              privacy policy
                            </a>{' '}
                            and consent to being contacted about my project. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg h-14 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                    disabled={formspreeState.submitting}
                  >
                    {formspreeState.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    We respect your privacy and never share your information.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}