"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { jsPDF } from "jspdf"

interface ChecklistItem {
  id: number
  text: string
  completed: boolean
}

const initialChecklist: ChecklistItem[] = [
  {
    id: 1,
    text: "Localsine provides Tone King Development with a shared mailbox for repository purposes",
    completed: false,
  },
  {
    id: 2,
    text: "Begin development on the backend",
    completed: false,
  },
  {
    id: 3,
    text: "Begin development on the frontend",
    completed: false,
  },
  {
    id: 4,
    text: "Determine which server the app will be hosted on, i.e. AWS, Heroku, Google Cloud, etc.",
    completed: false,
  },
  {
    id: 5,
    text: "Complete backend",
    completed: false,
  },
  {
    id: 6,
    text: "Complete Frontend",
    completed: false,
  },
  {
    id: 7,
    text: "Upload to the chosen server",
    completed: false,
  },
  {
    id: 8,
    text: "Run Test",
    completed: false,
  },
  {
    id: 9,
    text: "Add to Android, iOS, and Web",
    completed: false,
  },
  {
    id: 10,
    text: "Test for launch",
    completed: false,
  },
  {
    id: 11,
    text: "Launch Localsine App",
    completed: false,
  },
]

export default function ClientChecklist() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist)
  const { toast } = useToast()

  // Load saved state from localStorage
  useEffect(() => {
    const savedChecklist = localStorage.getItem("localsineChecklist")
    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist))
    }
  }, [])

  // Save to localStorage when checklist changes
  useEffect(() => {
    localStorage.setItem("localsineChecklist", JSON.stringify(checklist))
  }, [checklist])

  const handleToggle = (id: number) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const isAllCompleted = checklist.every((item) => item.completed)

  const generatePDF = () => {
    const doc = new jsPDF()

    // Add header
    doc.setFontSize(20)
    doc.text("Localsine Project Checklist", 20, 20)

    // Add completion date
    doc.setFontSize(12)
    doc.text(`Completed on: ${new Date().toLocaleDateString()}`, 20, 30)

    // Add checklist items
    doc.setFontSize(12)
    checklist.forEach((item, index) => {
      const yPosition = 45 + index * 10
      doc.text(`☑ ${item.text}`, 20, yPosition)
    })

    // Save the PDF
    doc.save("localsine-project-checklist.pdf")

    toast({
      title: "PDF Generated",
      description: "Your checklist has been downloaded as a PDF.",
      duration: 3000,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {checklist.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start space-x-3 p-4 rounded-lg transition-colors ${
              item.completed ? "bg-primary/10" : "hover:bg-primary/5"
            }`}
          >
            <Checkbox
              id={`task-${item.id}`}
              checked={item.completed}
              onCheckedChange={() => handleToggle(item.id)}
              className="mt-1"
            />
            <label
              htmlFor={`task-${item.id}`}
              className={`flex-1 cursor-pointer text-primary/80 ${
                item.completed ? "line-through text-primary/50" : ""
              }`}
            >
              {item.text}
            </label>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 border-t border-primary/20">
        <Button
          onClick={generatePDF}
          disabled={!isAllCompleted}
          className="w-full"
          variant={isAllCompleted ? "default" : "secondary"}
        >
          <Download className="mr-2 h-4 w-4" />
          {isAllCompleted ? "Download Completed Checklist" : "Complete all tasks to download"}
        </Button>
      </div>
    </div>
  )
}

