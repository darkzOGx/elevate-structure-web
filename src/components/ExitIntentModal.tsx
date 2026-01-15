'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Shield, CheckCircle, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm as useReactHookForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

const miniFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone'),
  projectBrief: z.string().min(5, 'Please provide a brief description'),
})

type MiniFormData = z.infer<typeof miniFormSchema>

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [formspreeState, handleFormspreeSubmit] = useFormspree('mdkprqjp')

  const form = useReactHookForm<MiniFormData>({
    resolver: zodResolver(miniFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectBrief: '',
    },
  })

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Improved trigger logic: check both y-position and relatedTarget
      // relatedTarget being null typically means the cursor left the window entirely
      if ((e.clientY <= 0 || e.relatedTarget === null) && !hasShown && !isOpen) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    // Add listener to the document
    document.addEventListener('mouseleave', handleMouseLeave)

    // Optional: Also trigger if user stays idle for too long or scrolls back up fast
    // But let's stick to exit intent for now as requested.

    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown, isOpen])

  const onSubmit = async (data: MiniFormData) => {
    await handleFormspreeSubmit({
      ...data,
      _subject: `QUICK QUOTE: Exit Intent Lead - ${data.name}`,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <DialogTitle className="sr-only">Exit Intent Offer</DialogTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Exit Intent Border Effect */}
          <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-br from-primary via-primary/50 to-emerald-500 animate-gradient-xy pointer-events-none">
            <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-[22px]" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="bg-slate-900 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]" />
              <div className="relative flex justify-between items-start">
                <div className="space-y-1">
                  <Badge className="bg-emerald-500 text-slate-950 border-none px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold mb-2">
                    Exclusive Offer
                  </Badge>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    Get Your <span className="text-emerald-400">Free Quote</span> Now
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {formspreeState.succeeded ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We&apos;ve received your request. A licensed engineer will contact you shortly.
                  </p>
                  <Button onClick={() => setIsOpen(false)} variant="outline" className="mt-4">
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Don&apos;t leave without a professional assessment. Fill in these details and we&apos;ll get back to you within 24 hours.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Full Name" {...field} className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
                              </FormControl>
                              <FormMessage className="text-[10px]" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Phone Number" {...field} className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
                              </FormControl>
                              <FormMessage className="text-[10px]" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Email Address" type="email" {...field} className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectBrief"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="Brief project description (e.g., ADU structural plans, wall removal, etc.)"
                                {...field}
                                className="min-h-[80px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 resize-none text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={formspreeState.submitting}
                        className="w-full h-12 text-base font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group"
                      >
                        {formspreeState.submitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            Get My Free Quote
                            <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-6">
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500 uppercase tracking-tight">
                      <Shield className="h-3 w-3 text-primary" />
                      Licensed PE
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500 uppercase tracking-tight">
                      <Clock className="h-3 w-3 text-primary" />
                      24h Response
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500 uppercase tracking-tight">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Code Compliant
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
