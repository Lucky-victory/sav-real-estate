"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import PropertyCard from "@/components/property-card"
import { featuredProperties } from "@/lib/data"

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 500000000])
  const [propertyType, setPropertyType] = useState<string[]>([])
  const [bedrooms, setBedrooms] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const filteredProperties = featuredProperties.filter((property) => {
    // Search term filter
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())

    // Price range filter
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]

    // Property type filter
    const matchesType =
      propertyType.length === 0 ||
      (property.bedrooms === 0 && propertyType.includes("commercial")) ||
      (property.bedrooms > 0 && propertyType.includes("residential"))

    // Bedrooms filter
    const matchesBedrooms = bedrooms.length === 0 || bedrooms.includes(property.bedrooms)

    return matchesSearch && matchesPrice && matchesType && matchesBedrooms
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg"
            alt="Properties in Nigeria"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Find Your Perfect Property
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl">
              Browse our extensive collection of premium properties across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search by location or property name"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="w-full md:w-auto gap-2" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="space-y-4">
                <h3 className="font-medium">Property Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="residential"
                      checked={propertyType.includes("residential")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setPropertyType([...propertyType, "residential"])
                        } else {
                          setPropertyType(propertyType.filter((type) => type !== "residential"))
                        }
                      }}
                    />
                    <label
                      htmlFor="residential"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Residential
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="commercial"
                      checked={propertyType.includes("commercial")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setPropertyType([...propertyType, "commercial"])
                        } else {
                          setPropertyType(propertyType.filter((type) => type !== "commercial"))
                        }
                      }}
                    />
                    <label
                      htmlFor="commercial"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Commercial
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Bedrooms</h3>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <Checkbox
                        id={`bed-${num}`}
                        checked={bedrooms.includes(num)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setBedrooms([...bedrooms, num])
                          } else {
                            setBedrooms(bedrooms.filter((b) => b !== num))
                          }
                        }}
                      />
                      <label
                        htmlFor={`bed-${num}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 500000000]}
                    max={500000000}
                    step={10000000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>₦{priceRange[0].toLocaleString()}</span>
                    <span>₦{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Properties List Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">{filteredProperties.length} Properties Found</h2>
            <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {filteredProperties.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No properties found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search criteria to find more properties.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setPriceRange([0, 500000000])
                  setPropertyType([])
                  setBedrooms([])
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

