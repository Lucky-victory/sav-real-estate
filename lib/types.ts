export interface PropertyType {
  id: string
  title: string
  description: string
  price: number
  location: string
  imageUrl: string
  status: "For Sale" | "For Rent"
  bedrooms: number
  bathrooms: number
  size: number
  isNew: boolean
  features: string[]
}

export interface TestimonialType {
  id: string
  name: string
  location: string
  rating: number
  text: string
  avatarUrl: string
}

export interface BlogPostType {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  imageUrl: string
  tags: string[]
}

export interface AuthorType {
  name: string
  role: string
  bio: string
  avatarUrl: string
}

