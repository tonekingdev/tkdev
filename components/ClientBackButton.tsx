'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

export default function ClientBackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-charcoal dark:text-accent-hover hover:text-accent transition-colors duration-200"
    >
      <FaArrowLeft className="mr-2" />
      <span>Back</span>
    </button>
  )
}