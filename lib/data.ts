import type { PropertyType, TestimonialType } from "./types";

export const properties: PropertyType[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Luxury 4 Bedroom Villa with Pool",
    description:
      "Stunning 4 bedroom villa with private pool and garden in a secure estate.",
    price: 250000000,
    location: "Ikoyi, Lagos",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_1280.jpg",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 5,
    size: 450,
    isNew: true,
    features: [
      "Swimming Pool",
      "Garden",
      "Security",
      "Garage",
      "Air Conditioning",
    ],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Modern 3 Bedroom Apartment",
    description:
      "Beautifully designed 3 bedroom apartment with stunning city views.",
    price: 120000000,
    location: "Victoria Island, Lagos",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/05/18/05/18/home-8001359_1280.jpg",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    size: 210,
    isNew: false,
    features: [
      "Gym",
      "Swimming Pool",
      "Security",
      "Parking",
      "Air Conditioning",
    ],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    title: "Spacious 2 Bedroom Apartment",
    description: "Well-maintained 2 bedroom apartment in a prime location.",
    price: 1500000,
    location: "Lekki Phase 1, Lagos",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/04/10/06/29/apartment-3306501_1280.jpg",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    isNew: true,
    features: ["24/7 Power", "Security", "Parking", "Air Conditioning"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    title: "Executive 5 Bedroom Mansion",
    description:
      "Luxurious 5 bedroom mansion with state-of-the-art facilities.",
    price: 450000000,
    location: "Banana Island, Lagos",
    imageUrl:
      "https://peteroz.com.ng/wp-content/uploads/2024/10/Executive-Five-Bedroom-duplex1.jpg",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 6,
    size: 650,
    isNew: false,
    features: ["Swimming Pool", "Cinema Room", "Gym", "Garden", "Smart Home"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    title: "Serviced 3 Bedroom Apartment",
    description: "Fully serviced 3 bedroom apartment with modern amenities.",
    price: 2500000,
    location: "Maitama, Abuja",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/01/05/08/39/furniture-3062400_1280.jpg",
    status: "For Rent",
    bedrooms: 3,
    bathrooms: 3,
    size: 180,
    isNew: true,
    features: ["24/7 Power", "Security", "Gym", "Swimming Pool", "Furnished"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    title: "Commercial Office Space",
    description: "Prime commercial office space in a business district.",
    price: 180000000,
    location: "Central Business District, Abuja",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/07/28/13/52/standing-desk-7349890_1280.jpg",
    status: "For Sale",
    bedrooms: 0,
    bathrooms: 2,
    size: 300,
    isNew: false,
    features: [
      "Reception Area",
      "Meeting Rooms",
      "Parking",
      "Security",
      "Elevator",
    ],
  },
];

export const featuredProperties: PropertyType[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Luxury 4 Bedroom Villa with Pool",
    description:
      "Stunning 4 bedroom villa with private pool and garden in a secure estate.",
    price: 250000000,
    location: "Ikoyi, Lagos",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_1280.jpg",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 5,
    size: 450,
    isNew: true,
    features: [
      "Swimming Pool",
      "Garden",
      "Security",
      "Garage",
      "Air Conditioning",
    ],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Modern 3 Bedroom Apartment",
    description:
      "Beautifully designed 3 bedroom apartment with stunning city views.",
    price: 120000000,
    location: "Victoria Island, Lagos",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/05/18/05/18/home-8001359_1280.jpg",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    size: 210,
    isNew: false,
    features: [
      "Gym",
      "Swimming Pool",
      "Security",
      "Parking",
      "Air Conditioning",
    ],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    title: "Spacious 2 Bedroom Apartment",
    description: "Well-maintained 2 bedroom apartment in a prime location.",
    price: 1500000,
    location: "Lekki Phase 1, Lagos",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/04/10/06/29/apartment-3306501_1280.jpg",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    isNew: true,
    features: ["24/7 Power", "Security", "Parking", "Air Conditioning"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    title: "Executive 5 Bedroom Mansion",
    description:
      "Luxurious 5 bedroom mansion with state-of-the-art facilities.",
    price: 450000000,
    location: "Banana Island, Lagos",
    imageUrl:
      "https://peteroz.com.ng/wp-content/uploads/2024/10/Executive-Five-Bedroom-duplex1.jpg",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 6,
    size: 650,
    isNew: false,
    features: ["Swimming Pool", "Cinema Room", "Gym", "Garden", "Smart Home"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    title: "Serviced 3 Bedroom Apartment",
    description: "Fully serviced 3 bedroom apartment with modern amenities.",
    price: 2500000,
    location: "Maitama, Abuja",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/01/05/08/39/furniture-3062400_1280.jpg",
    status: "For Rent",
    bedrooms: 3,
    bathrooms: 3,
    size: 180,
    isNew: true,
    features: ["24/7 Power", "Security", "Gym", "Swimming Pool", "Furnished"],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    title: "Commercial Office Space",
    description: "Prime commercial office space in a business district.",
    price: 180000000,
    location: "Central Business District, Abuja",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/07/28/13/52/standing-desk-7349890_1280.jpg",
    status: "For Sale",
    bedrooms: 0,
    bathrooms: 2,
    size: 300,
    isNew: false,
    features: [
      "Reception Area",
      "Meeting Rooms",
      "Parking",
      "Security",
      "Elevator",
    ],
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    name: "Oluwaseun Adeyemi",
    location: "Lagos",
    rating: 5,
    text: "Sav Real Estate made finding my dream home a breeze. Their team was professional, knowledgeable, and attentive to my needs throughout the entire process.",
    avatarUrl:
      "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    name: "Chioma Okafor",
    location: "Abuja",
    rating: 5,
    text: "I was impressed by the level of service provided by Sav Real Estate. They helped me find the perfect investment property and guided me through every step of the purchase.",
    avatarUrl:
      "https://images.unsplash.com/photo-1602009786436-96b827675d32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    name: "Ibrahim Musa",
    location: "Port Harcourt",
    rating: 4,
    text: "Working with Sav Real Estate was a pleasure. Their property management services have made being a landlord stress-free and profitable.",
    avatarUrl:
      "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
