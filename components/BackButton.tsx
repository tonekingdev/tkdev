'use client'

import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export default function BackButton() {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} className="mb-4 flex items-center shadow-md font-semibold hover:bg-white hover:text-red-600 dark:bg-white dark:text-red-600 dark:hover:bg-lime-500 dark:hover:text-white px-4 py-1 rounded-md transition-all duration-500">
            <FaArrowLeft className="mr-2" />
            <span>Back</span>
        </button>
    )
}