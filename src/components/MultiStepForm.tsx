'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  Home, 
  HardHat, 
  FileText,
  CheckCircle2,
  Loader2,
  Upload
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Section } from '@/components/ui/Section'
import { useForm as useFormspree } from '@formspree/react'

// Form Schemas for each step
const personalInfoSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  company: z.string().optional(),
})

const projectTypeSchema = z.object({
  projectType: z.enum(['residential', 'commercial', 'retrofit', 'adu', 'other']),
  role: z.string().min(1, 'Please select your role'),
})

const projectDetailsSchema = z.object({
  address: z.string().min(5, 'Project address is required'),
  description: z.string().min(20, 'Please provide more details about the project'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

// Combined schema for final submission
const formSchema = z.intersection(
  z.intersection(personalInfoSchema, projectTypeSchema),
  projectDetailsSchema
)

type FormData = z.infer<typeof formSchema>

const STEPS = [
  { id: 1, title: 'Project Type', icon: HardHat },
  { id: 2, title: 'Project Details', icon: Building2 },
  { id: 3, title: 'Contact Info', icon: FileText },
]

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formspreeState, handleFormspreeSubmit] = useFormspree('mdkprqjp') // Using same ID as contact form
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      projectType: 'residential',
      role: '',
      description: '',
      name: '',
      email: '',
      phone: '',
    }
  })

  const validateStep = async (currentStep: number) => {
    let fieldsToValidate: (keyof FormData)[] = []
    
    if (currentStep === 1) {
      fieldsToValidate = ['projectType', 'role']
    } else if (currentStep === 2) {
      fieldsToValidate = ['address', 'description']
    } else if (currentStep === 3) {
      fieldsToValidate = ['name', 'email', 'phone']
    }

    const result = await form.trigger(fieldsToValidate)
    return result
  }

  const handleNext = async () => {
    const isValid = await validateStep(step)
    if (isValid) {
      setStep(prev => Math.min(prev + 1, 3))
    }
  }

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data: FormData) => {
    await handleFormspreeSubmit({
      ...data,
      _subject: `New Multi-Step Project Inquiry: ${data.projectType} - ${data.name}`
    })
  }

  if (formspreeState.succeeded) {
    return (
      <Section className="min-h-[600px] flex items-center justify-center">
        <PremiumCard className="max-w-xl w-full text-center p-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for providing your project details. Our engineering team will review your information and contact you within 24 hours with a preliminary assessment.
            </p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
            >
              Start New Request
            </Button>
          </motion.div>
        </PremiumCard>
      </Section>
    )
  }

  return (
    <Section id="start-project" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Start Your <span className="text-gradient">Engineering Project</span>
          </h2>
          <p className="text-muted-foreground">
            Tell us about your project needs and get a detailed consultation.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary -translate-y-1/2 rounded-full" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          
          <div className="relative flex justify-between">
            {STEPS.map((s) => {
              const Icon = s.icon
              const isActive = s.id <= step
              const isCompleted = s.id < step

              return (
                <div key={s.id} className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? 'var(--primary)' : 'var(--secondary)',
                      color: isActive ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                      scale: isActive ? 1.1 : 1,
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-300 border-4 border-background shadow-sm"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </motion.div>
                  <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {s.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <PremiumCard className="p-8 min-h-[400px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-lg font-semibold">What type of project is this?</FormLabel>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              { value: 'residential', label: 'Residential', icon: Home },
                              { value: 'commercial', label: 'Commercial', icon: Building2 },
                              { value: 'retrofit', label: 'Seismic Retrofit', icon: HardHat },
                              { value: 'adu', label: 'ADU / Addition', icon: Home },
                              { value: 'other', label: 'Other', icon: FileText },
                            ].map((type) => (
                              <div key={type.value} className="relative">
                                <input
                                  type="radio"
                                  className="peer sr-only"
                                  id={type.value}
                                  {...field}
                                  value={type.value}
                                  checked={field.value === type.value}
                                />
                                <label
                                  htmlFor={type.value}
                                  className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-muted bg-background hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 cursor-pointer transition-all duration-200"
                                >
                                  <type.icon className="w-8 h-8 mb-3 text-muted-foreground peer-checked:text-primary" />
                                  <span className="font-medium">{type.label}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I am a...</FormLabel>
                          <FormControl>
                            <select 
                              className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              {...field}
                            >
                              <option value="">Select your role</option>
                              <option value="homeowner">Homeowner</option>
                              <option value="architect">Architect</option>
                              <option value="contractor">Contractor</option>
                              <option value="developer">Developer</option>
                              <option value="realtor">Real Estate Agent</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Address or City</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 123 Main St, Irvine CA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the scope of work, specific requirements, and any existing conditions..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Desired Timeline</FormLabel>
                            <FormControl>
                              <select 
                                className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                {...field}
                              >
                                <option value="">Select timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="1-3months">1-3 Months</option>
                                <option value="3-6months">3-6 Months</option>
                                <option value="planning">Just Planning</option>
                              </select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estimated Budget</FormLabel>
                            <FormControl>
                              <select 
                                className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                {...field}
                              >
                                <option value="">Select budget</option>
                                <option value="under5k">Under $5k</option>
                                <option value="5k-15k">$5k - $15k</option>
                                <option value="15k-50k">$15k - $50k</option>
                                <option value="50k+">$50k+</option>
                              </select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Ltd." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Whats Next?
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                        <li>Our team will review your project details</li>
                        <li>We will check zoning and code requirements for your address</li>
                        <li>You will receive a call or email within 24 hours</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between pt-6 border-t border-border">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={step === 1 ? 'invisible' : ''}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>

                {step < 3 ? (
                  <Button type="button" onClick={handleNext}>
                    Next Step
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={formspreeState.submitting}>
                    {formspreeState.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </PremiumCard>
      </div>
    </Section>
  )
}

