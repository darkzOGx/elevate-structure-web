'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { SupportForm } from '@/components/SupportForm'

export function FloatingCTA() {
  const [showNotification, setShowNotification] = useState(true)

  // Auto-show notification after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
    >
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-800 max-w-[280px] relative mb-2"
          >
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 relative">
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Expert Online</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                  Have a question about your project? Get a free consultation now.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="rounded-full shadow-2xl shadow-primary/30 h-16 w-16 p-0 bg-primary hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center relative overflow-visible"
          >
            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 duration-1000" />

            <MessageSquare className="h-7 w-7" />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <DialogHeader className="sr-only">
            <DialogTitle>Chat with Support</DialogTitle>
          </DialogHeader>
          <SupportForm />
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

