"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "Adebayo Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in the Nigerian real estate market, Adebayo has built Sav Real Estate into one of the country's premier property agencies.",
      imageUrl: "https://images.unsplash.com/photo-1594564190328-0bed16a89837?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ngozi Okonkwo",
      position: "Head of Sales",
      bio: "Ngozi brings 10 years of sales expertise and deep market knowledge to help clients find their perfect property match.",
      imageUrl: "https://images.pexels.com/photos/17986441/pexels-photo-17986441/free-photo-of-portrait-of-a-young-woman-with-braided-hair-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Emeka Nwosu",
      position: "Property Manager",
      bio: "Emeka oversees our property management division, ensuring all properties are maintained to the highest standards.",
      imageUrl: "https://images.pexels.com/photos/6109560/pexels-photo-6109560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Fatima Ibrahim",
      position: "Marketing Director",
      bio: "Fatima leads our marketing efforts, showcasing our premium properties to potential buyers across Nigeria and beyond.",
      imageUrl: "https://images.pexels.com/photos/18922740/pexels-photo-18922740/free-photo-of-black-melanin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.pixabay.com/photo/2019/09/30/16/00/house-4516175_1280.jpg"
            alt="About Sav Real Estate"
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
              About Sav Real Estate
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl">
              Your trusted partner in finding the perfect property in Nigeria since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Building Trust in Nigerian Real Estate Since 2010
              </h2>
              <div className="space-y-4 text-gray-500 dark:text-gray-400">
                <p>
                  Sav Real Estate was founded with a simple mission: to provide honest, transparent, and professional
                  real estate services to clients across Nigeria.
                </p>
                <p>
                  What began as a small office in Lagos has grown into one of Nigeria's most trusted real estate
                  agencies, with operations in major cities including Lagos, Abuja, and Port Harcourt.
                </p>
                <p>
                  Our team of experienced professionals is dedicated to understanding each client's unique needs and
                  delivering personalized solutions that exceed expectations.
                </p>
                <p>
                  Whether you're buying your first home, investing in commercial property, or seeking property
                  management services, Sav Real Estate is committed to making your real estate journey smooth and
                  successful.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Professional Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Market Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Transparent Dealings</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://cdn.pixabay.com/photo/2019/09/30/16/00/house-4516175_1280.jpg"
                alt="Sav Real Estate office"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold">13+</h3>
              <p className="text-blue-100">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-blue-100">Properties Sold</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold">1,200+</h3>
              <p className="text-blue-100">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold">3</h3>
              <p className="text-blue-100">Office Locations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Drives Us</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Our core values guide everything we do at Sav Real Estate, from how we interact with clients to how we
              conduct business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Centered</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We put our clients' needs first, taking the time to understand their requirements and providing tailored
                solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We strive for excellence in everything we do, from the properties we list to the service we provide,
                ensuring the highest standards at every step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our
                clients and partners in every interaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet the Experts</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing exceptional service and expertise in the
              Nigerian real estate market.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <Image src={member.imageUrl || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.position}</p>
                  <p className="text-gray-500 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg">
              Whether you're looking to buy, sell, rent, or manage a property, our team is here to help you every step
              of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

