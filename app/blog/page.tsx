"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const blogPosts = [
    {
      id: "post1",
      title: "The Future of Lagos Real Estate Market in 2025",
      excerpt: "Explore the emerging trends and predictions for Lagos's dynamic real estate market in the coming year.",
      category: "Market Trends",
      author: "Adebayo Johnson",
      date: "March 15, 2025",
      imageUrl: "/placeholder.svg?height=600&width=800",
      slug: "lagos-real-estate-2025",
    },
    {
      id: "post2",
      title: "Top 5 Areas for Property Investment in Abuja",
      excerpt: "Discover the most promising neighborhoods in Abuja for real estate investment with high ROI potential.",
      category: "Investment Tips",
      author: "Ngozi Okonkwo",
      date: "March 10, 2025",
      imageUrl: "/placeholder.svg?height=600&width=800",
      slug: "abuja-investment-areas",
    },
    {
      id: "post3",
      title: "Essential Checklist for First-Time Home Buyers in Nigeria",
      excerpt: "A comprehensive guide to help first-time buyers navigate the Nigerian property market with confidence.",
      category: "Buying Guide",
      author: "Emeka Nwosu",
      date: "March 5, 2025",
      imageUrl: "/placeholder.svg?height=600&width=800",
      slug: "first-time-buyers-guide",
    },
    {
      id: "post4",
      title: "Understanding Property Taxes and Fees in Nigeria",
      excerpt: "A detailed breakdown of the various taxes and fees associated with property ownership in Nigeria.",
      category: "Legal Advice",
      author: "Fatima Ibrahim",
      date: "February 28, 2025",
      imageUrl: "/placeholder.svg?height=600&width=800",
      slug: "property-taxes-nigeria",
    },
    {
      id: "post5",
      title: "How to Maximize Rental Income from Your Investment Property",
      excerpt:
        "Expert tips and strategies to help landlords increase their rental income while maintaining tenant satisfaction.",
      category: "Property Management",
      author: "Adebayo Johnson",
      date: "February 20, 2025",
      imageUrl: "/placeholder.svg?height=600&width=800",
      slug: "maximize-rental-income",
    },
    {
      id: "post6",
      title: "The Impact of Infrastructure Development on Property Values",
      excerpt: "An analysis of how major infrastructure projects are affecting property values across Nigerian cities.",
      category: "Market Analysis",
      author: "Ngozi Okonkwo",
      date: "February 15, 2025",
      imageUrl: "/placeholder.svg?height=600&width=800",
      slug: "infrastructure-property-values",
    },
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [...new Set(blogPosts.map((post) => post.category))]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Real Estate Blog"
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
              Real Estate Insights & Updates
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl">
              Stay informed with the latest trends, market analysis, and news from the Nigerian real estate market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      variants={fadeIn}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-48">
                          <Image
                            src={post.imageUrl || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <Badge className="mr-2">{post.category}</Badge>
                          <div className="flex items-center ml-auto">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">{post.title}</h2>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Try adjusting your search criteria to find more articles.
                  </p>
                  <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2 hover:text-blue-600"
                            onClick={() => setSearchTerm(category)}
                          >
                            <Tag className="h-4 w-4" />
                            {category}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={post.imageUrl || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="font-medium hover:text-blue-600 transition-colors line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Stay updated with the latest real estate news and insights.
                    </p>
                    <form className="space-y-4">
                      <Input placeholder="Your email address" type="email" />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Have Questions About Real Estate?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Our team of experts is ready to provide personalized advice and guidance.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

