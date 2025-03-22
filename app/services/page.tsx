"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Home,
  Building,
  Building2,
  Briefcase,
  LineChart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { testimonials } from "@/lib/data";

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      id: "property-sales",
      title: "Property Sales",
      description:
        "Find your dream home or investment property with our expert guidance throughout the buying process.",
      icon: <Home className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      features: [
        "Personalized property search based on your requirements",
        "Expert market analysis and property valuation",
        "Negotiation support to secure the best price",
        "Guidance through legal and documentation processes",
        "Post-sale support and assistance",
      ],
      image:
        "https://images.pexels.com/photos/7937764/pexels-photo-7937764.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "property-rentals",
      title: "Property Rentals",
      description:
        "Discover premium rental properties that match your lifestyle and budget with our personalized service.",
      icon: <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      features: [
        "Wide selection of residential and commercial rentals",
        "Tenant screening and verification",
        "Lease agreement preparation and review",
        "Property inspection and condition reporting",
        "Ongoing tenant support services",
      ],
      image:
        "https://images.pexels.com/photos/8146147/pexels-photo-8146147.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "property-management",
      title: "Property Management",
      description:
        "Maximize your property's potential with our comprehensive management services for landlords and investors.",
      icon: <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      features: [
        "Tenant acquisition and screening",
        "Rent collection and financial reporting",
        "Property maintenance and repairs coordination",
        "Regular property inspections",
        "Legal compliance and documentation management",
      ],
      image:
        "https://images.pexels.com/photos/7937742/pexels-photo-7937742.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: "investment-advisory",
      title: "Investment Advisory",
      description:
        "Make informed real estate investment decisions with our expert market analysis and advisory services.",
      icon: <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      features: [
        "Market trend analysis and investment opportunity identification",
        "ROI projections and financial planning",
        "Portfolio diversification strategies",
        "Due diligence and risk assessment",
        "Long-term investment planning",
      ],
      image:
        "https://images.pexels.com/photos/7937693/pexels-photo-7937693.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: "market-analysis",
      title: "Market Analysis",
      description:
        "Stay ahead with our in-depth analysis of the Nigerian real estate market trends and forecasts.",
      icon: <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      features: [
        "Comprehensive market reports and insights",
        "Property value trends and projections",
        "Neighborhood analysis and growth potential",
        "Economic factors affecting real estate",
        "Customized analysis for specific property types",
      ],
      image:
        "https://images.pexels.com/photos/5816291/pexels-photo-5816291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "legal-services",
      title: "Legal Services",
      description:
        "Navigate the legal complexities of real estate transactions with our expert legal support.",
      icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      features: [
        "Title verification and due diligence",
        "Contract preparation and review",
        "Legal documentation processing",
        "Dispute resolution assistance",
        "Regulatory compliance guidance",
      ],
      image:
        "https://images.pexels.com/photos/7731397/pexels-photo-7731397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.pixabay.com/photo/2017/07/08/06/48/sa-rapita-2483668_1280.jpg"
            alt="Our Services"
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
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl">
              Comprehensive real estate solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">What We Offer</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              From property acquisition to management, we offer end-to-end
              services tailored to your needs.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Link
                  href={`#${service.id}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="property-sales" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="text-xs md:text-sm"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} id={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">Inquire About This Service</Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How We Work
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth and efficient experience
              for all your real estate needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We begin with a detailed consultation to understand your
                specific needs and requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We create a customized strategy based on your goals, timeline,
                and budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team executes the strategy, keeping you informed at every
                step of the process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We provide continuous support and follow-up to ensure your
                complete satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Client Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients
              about their experience with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-500 dark:text-gray-400 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatarUrl}
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Contact us today to discuss how our services can meet your real
              estate needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
