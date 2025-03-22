"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { TestimonialType } from "@/lib/types"

interface TestimonialCardProps {
  testimonial: TestimonialType
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div variants={item}>
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
          <div className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonial.avatarUrl || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TestimonialCard

