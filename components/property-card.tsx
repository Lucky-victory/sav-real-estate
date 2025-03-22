"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { PropertyType } from "@/lib/types"

interface PropertyCardProps {
  property: PropertyType
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

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
      <Card className="overflow-hidden h-full">
        <div className="relative">
          <div className="relative h-64 w-full">
            <Image
              src={property.imageUrl || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <Badge className={property.status === "For Sale" ? "bg-blue-600" : "bg-green-600"}>{property.status}</Badge>
            {property.isNew && <Badge className="bg-amber-600">New</Badge>}
          </div>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 z-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            ₦{property.price.toLocaleString()}
            {property.status === "For Rent" && <span className="text-sm font-normal text-gray-500">/month</span>}
          </p>
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.size} m²</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full gap-2">
            <Link href={`/properties/${property.id}`}>
              View Details <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default PropertyCard

