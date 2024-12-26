import React, { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { motion, AnimatePresence } from 'framer-motion'

const ToastContainer = () => {
    const { toasts, dismiss } = useToast()

    useEffect(() => {
        toasts.forEach(toast => {
            if (toast.duration) {
                const timer = setTimeout(() => {
                    dismiss(toast.id)
                }, toast.duration)
                return () => clearTimeout(timer)
            }
        })
    }, [toasts, dismiss])

    return (
        <div 
            className="fixed top-4 right-4 z-50 space-y-2 max-w-md w-full"
            aria-live="polite"
            aria-atomic="true"
        >
            <AnimatePresence>
                {toasts.map((toast, index) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className={`bg-primary p-4 rounded text-charcoal shadow-lg mb-2 relative ${toast.open ? 'block' : 'hidden'}`}
                        style={{ zIndex: 9999 - index }}
                    >
                        <button
                            onClick={() => dismiss(toast.id)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            aria-label="Close notification"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="font-bold" role="alert">
                            {toast.title}
                        </div>
                        <div>{toast.description}</div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default ToastContainer