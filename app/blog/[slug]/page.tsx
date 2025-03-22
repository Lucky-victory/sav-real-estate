"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  MessageCircle,
  Bookmark,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { blogPosts, authors } from "@/lib/blog-data";
import type { BlogPostType, AuthorType } from "@/lib/types";
import Head from "./head";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [author, setAuthor] = useState<AuthorType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [readingTime, setReadingTime] = useState("5 min read");

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find((post) => post.slug === slug);

    if (currentPost) {
      setPost(currentPost);

      // Find the author
      const postAuthor = authors.find(
        (author) => author.name === currentPost.author
      );
      if (postAuthor) setAuthor(postAuthor);

      // Calculate reading time (rough estimate)
      const wordCount = currentPost.content.split(/\s+/).length;
      const time = Math.ceil(wordCount / 200); // Assuming 200 words per minute
      setReadingTime(`${time} min read`);

      // Set initial like count (random for demo)
      setLikeCount(Math.floor(Math.random() * 50) + 10);

      // Find related posts (same category, excluding current)
      const related = blogPosts
        .filter(
          (p) =>
            p.category === currentPost.category && p.slug !== currentPost.slug
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }

    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "Sav Real Estate Blog";

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link Copied",
          description: "The link has been copied to your clipboard.",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Bookmark Removed" : "Bookmark Added",
      description: isBookmarked
        ? "This article has been removed from your bookmarks."
        : "This article has been added to your bookmarks.",
    });
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount(likeCount - 1);
      setHasLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setHasLiked(true);
    }
  };

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Loading article...</h1>
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Head params={{ slug: slug as string }} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full">
          <div className="absolute inset-0">
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
          </div>

          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-12 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-200">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{readingTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Article Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="lg:col-span-2"
              >
                {/* Social Sharing - Vertical */}
                <div className="hidden md:flex flex-col fixed left-4 top-1/2 transform -translate-y-1/2 space-y-3 z-10">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white shadow-md hover:bg-blue-100"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white shadow-md hover:bg-blue-100"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white shadow-md hover:bg-blue-100"
                    onClick={() => handleShare("linkedin")}
                  >
                    <Linkedin className="h-5 w-5 text-blue-700" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white shadow-md hover:bg-gray-100"
                    onClick={() => handleShare("copy")}
                  >
                    <Copy className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Copy Link</span>
                  </Button>
                </div>

                {/* Article */}
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  <div
                    className="mb-8 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-gray-100 text-gray-800 hover:bg-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author Bio */}
                  {author && (
                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={author.avatarUrl}
                            className="object-center object-cover"
                            alt={author.name}
                          />
                          <AvatarFallback>
                            {author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold">{author.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {author.role}
                          </p>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">
                            {author.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Social Sharing - Horizontal */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={handleLike}
                      >
                        <ThumbsUp
                          className={`h-4 w-4 ${
                            hasLiked ? "fill-blue-600 text-blue-600" : ""
                          }`}
                        />
                        <span>{likeCount}</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={handleBookmark}
                      >
                        <Bookmark
                          className={`h-4 w-4 ${
                            isBookmarked ? "fill-blue-600 text-blue-600" : ""
                          }`}
                        />
                        <span>Save</span>
                      </Button>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                      <span className="text-sm text-gray-500">Share:</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="h-4 w-4 text-blue-600" />
                        <span className="sr-only">Share on Facebook</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="h-4 w-4 text-blue-400" />
                        <span className="sr-only">Share on Twitter</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleShare("linkedin")}
                      >
                        <Linkedin className="h-4 w-4 text-blue-700" />
                        <span className="sr-only">Share on LinkedIn</span>
                      </Button>
                    </div>
                  </div>

                  {/* Comments Section Teaser */}
                  <div className="mt-12 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Comments</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Join the conversation and share your thoughts on this
                      article.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Leave a Comment
                    </Button>
                  </div>

                  {/* Post Navigation */}
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Previous Post
                    </Button>
                    <Button variant="outline" className="justify-end gap-2">
                      Next Post
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </motion.div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8 sticky top-24">
                  {/* Related Posts */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Related Articles
                      </h3>
                      <div className="space-y-6">
                        {relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.id} className="group">
                            <Link
                              href={`/blog/${relatedPost.slug}`}
                              className="flex gap-4"
                            >
                              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                                <Image
                                  src={
                                    relatedPost.imageUrl || "/placeholder.svg"
                                  }
                                  alt={relatedPost.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                  {relatedPost.date}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Categories */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        <Link href="/blog?category=Market+Trends">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Market Trends
                          </Badge>
                        </Link>
                        <Link href="/blog?category=Investment+Tips">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            Investment Tips
                          </Badge>
                        </Link>
                        <Link href="/blog?category=Buying+Guide">
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                            Buying Guide
                          </Badge>
                        </Link>
                        <Link href="/blog?category=Legal+Advice">
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                            Legal Advice
                          </Badge>
                        </Link>
                        <Link href="/blog?category=Property+Management">
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                            Property Management
                          </Badge>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Subscribe to Our Newsletter
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Get the latest real estate insights delivered to your
                        inbox.
                      </p>
                      <form className="space-y-4">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Subscribe
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Featured Property */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Featured Property
                      </h3>
                      <div className="space-y-4">
                        <div className="relative h-48 w-full overflow-hidden rounded-md">
                          <Image
                            src="https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_1280.jpg"
                            alt="Featured Property"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold">
                          Luxury Villa in Ikoyi
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Stunning 4 bedroom villa with private pool and garden
                          in a secure estate.
                        </p>
                        <p className="text-xl font-bold text-blue-600">
                          ₦250,000,000
                        </p>
                        <Button asChild className="w-full">
                          <Link href="/properties/prop1">View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Articles Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                More Articles
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Explore more insights and guides from our real estate experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">{post.category}</Badge>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/blog">
                  View All Articles <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Let our expert agents guide you through the process of finding
                the perfect property that meets all your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-blue-700"
                >
                  <Link href="/properties">Browse Properties</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
