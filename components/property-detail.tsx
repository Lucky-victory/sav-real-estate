"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Home,
  Check,
  Share2,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Maximize,
  Play,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PropertyCard from "@/components/property-card";
import PropertyContactForm from "@/components/property-contact-form";
import PropertyMap from "@/components/property-map";
import type { PropertyType } from "@/lib/types";

interface PropertyDetailProps {
  property: PropertyType;
  relatedProperties: PropertyType[];
}

const PropertyDetail = ({
  property,
  relatedProperties,
}: PropertyDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [carouselAPI, setCarouselAPI] = useState<CarouselApi>();
  // Mock multiple images for the gallery
  const propertyImages = [
    property.imageUrl,
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ];

  // Mock price history data
  const priceHistory = [
    { date: "Mar 2025", price: property.price },
    { date: "Jan 2025", price: property.price * 0.95 },
    { date: "Nov 2024", price: property.price * 0.9 },
    { date: "Sep 2024", price: property.price * 0.85 },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
    setIsShareMenuOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <motion.div
        className="text-sm mb-6 text-gray-500 flex items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/properties"
          className="hover:text-blue-600 transition-colors"
        >
          Properties
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{property.title}</span>
      </motion.div>

      {/* Property Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-3xl font-bold text-blue-600">
            ₦{property.price.toLocaleString()}
          </div>
          <div className="flex items-center mt-2 gap-2">
            <Badge
              className={
                property.status === "For Sale" ? "bg-blue-600" : "bg-green-600"
              }
            >
              {property.status}
            </Badge>
            {property.isNew && <Badge className="bg-amber-600">New</Badge>}
          </div>
        </div>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        className="mb-10 relative"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <Carousel className="w-full" setApi={(api) => setCarouselAPI(api)}>
          <CarouselContent>
            {propertyImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {index === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Button
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      >
                        <Play className="h-6 w-6 mr-2" />
                        Virtual Tour
                      </Button>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-2"
            onClick={() => {
              setActiveImageIndex(
                (carouselAPI?.selectedScrollSnap() as number) - 1
              );
            }}
          />
          <CarouselNext
            className="right-2"
            onClick={() => {
              setActiveImageIndex(
                (carouselAPI?.selectedScrollSnap() as number) + 1
              );
            }}
          />
        </Carousel>

        <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
          {propertyImages.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                carouselAPI?.scrollTo(index);
                setActiveImageIndex(index);
              }}
              className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                activeImageIndex === index
                  ? "border-blue-600"
                  : "border-transparent"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10"
            onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10"
          >
            <Maximize className="h-5 w-5" />
          </Button>
        </div>

        {/* Share Menu */}
        {isShareMenuOpen && (
          <div className="absolute top-16 right-4 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 w-48">
            <div className="text-sm font-medium mb-2">Share this property</div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <motion.div
          className="lg:col-span-2"
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="history">Price History</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Property Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Bed className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-500">Bedrooms</span>
                    <span className="font-bold">{property.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Bath className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-500">Bathrooms</span>
                    <span className="font-bold">{property.bathrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Square className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-500">Area</span>
                    <span className="font-bold">{property.size} m²</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-500">Year Built</span>
                    <span className="font-bold">2022</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>{property.description}</p>
                  <p>
                    This exceptional property offers a perfect blend of comfort,
                    style, and functionality. Located in a prime area of{" "}
                    {property.location}, it provides easy access to schools,
                    shopping centers, and public transportation.
                  </p>
                  <p>
                    The spacious interior features high ceilings, abundant
                    natural light, and premium finishes throughout. The modern
                    kitchen is equipped with high-end appliances and ample
                    storage space, making it a chef's dream.
                  </p>
                  <p>
                    Outside, you'll find a beautifully landscaped garden,
                    perfect for relaxation or entertaining guests. The property
                    also includes secure parking and additional storage space.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <h2 className="text-2xl font-bold mb-4">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Central Heating</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>High-Speed Internet</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Security System</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Garage Parking</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Swimming Pool</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Garden</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Balcony</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="location">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 inline-block mr-1" />
                  {property.location}
                </p>
                <div className="h-[400px] w-full rounded-lg overflow-hidden">
                  <PropertyMap location={property.location} />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Nearby Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Education</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>International School</span>
                        <span>0.5 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span>University</span>
                        <span>2.3 km</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Health</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>General Hospital</span>
                        <span>1.2 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pharmacy</span>
                        <span>0.3 km</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Shopping</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Shopping Mall</span>
                        <span>1.8 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Supermarket</span>
                        <span>0.4 km</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Transportation</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Bus Station</span>
                        <span>0.2 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Train Station</span>
                        <span>1.5 km</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <h2 className="text-2xl font-bold mb-4">Price History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {priceHistory.map((item, index) => {
                      const prevPrice =
                        index < priceHistory.length - 1
                          ? priceHistory[index + 1].price
                          : item.price;
                      const change =
                        ((item.price - prevPrice) / prevPrice) * 100;
                      const isIncrease = change > 0;

                      return (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            ₦{item.price.toLocaleString()}
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm ${
                              index === priceHistory.length - 1
                                ? "text-gray-500"
                                : isIncrease
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {index === priceHistory.length - 1
                              ? "Initial listing"
                              : `${isIncrease ? "+" : ""}${change.toFixed(2)}%`}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Properties */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {relatedProperties.map((relatedProperty) => (
                <PropertyCard
                  key={relatedProperty.id}
                  property={relatedProperty}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form & Agent Info */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.2 }}
        >
          {/* Agent Info */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Agent"
                  fill
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">John Adeyemi</h3>
                <p className="text-gray-500 text-sm">
                  Senior Real Estate Agent
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <Button className="flex-1">Call Agent</Button>
              <Button variant="outline" className="flex-1">
                WhatsApp
              </Button>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">
              Interested in this property?
            </h3>
            <PropertyContactForm propertyTitle={property.title} />
          </Card>

          {/* Property Details Summary */}
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Property Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Property ID</span>
                <span className="font-medium">{property.id}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-500">Property Type</span>
                <span className="font-medium">Residential</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="font-medium">{property.status}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-500">Area</span>
                <span className="font-medium">{property.size} m²</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-500">Bedrooms</span>
                <span className="font-medium">{property.bedrooms}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-500">Bathrooms</span>
                <span className="font-medium">{property.bathrooms}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-500">Year Built</span>
                <span className="font-medium">2022</span>
              </div>
            </div>
          </Card>

          {/* Mortgage Calculator Teaser */}
          {/* <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <Home className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-lg">Mortgage Calculator</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Calculate your estimated monthly mortgage payments for this
              property.
            </p>
            <Button className="w-full">Calculate Mortgage</Button>
          </Card> */}
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetail;
