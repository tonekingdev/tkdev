import React from 'react'
import { useToast } from '@/hooks/use-toast'

const ToastContainer = () => {
    const { toasts, dismiss } = useToast()
    return (
    <div>
        {toasts.map((toast) => (
            <div key={toast.id} className={`bg-primary p-4 rounded text-charcoal shadow-lg mb-2 ${toast.open ? 'block' : 'hidden'}`}>
                <div className="font-bold">
                    {toast.title}
                </div>
                <div>
                    {toast.description}
                </div>
                <button
                    onClick={() => dismiss(toast.id)}
                    className="mt-2 bg-red-500 text-white rounded px-2 py-1"
                >
                    Close
                </button>
            </div>
        ))}
    </div>
  )
}

export default ToastContainer