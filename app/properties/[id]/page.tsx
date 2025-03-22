import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetail from "@/components/property-detail";
import PropertyDetailSkeleton from "@/components/property-detail-skeleton";
import { getPropertyById, getRelatedProperties } from "@/lib/property-utils";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const property = getPropertyById(params.id);

  if (!property) {
    return {
      title: "Property Not Found | Sav Real Estate",
      description: "The property you are looking for could not be found.",
    };
  }

  return {
    title: `${property.title} | Sav Real Estate`,
    description: property.description.substring(0, 160),
    openGraph: {
      title: `${property.title} | Sav Real Estate`,
      description: property.description.substring(0, 160),
      images: [
        {
          url: property.imageUrl,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      type: "website",
    },
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  const relatedProperties = getRelatedProperties(property, 3);

  return (
    <main className="min-h-screen pb-16">
      <Suspense fallback={<PropertyDetailSkeleton />}>
        <PropertyDetail
          property={property}
          relatedProperties={relatedProperties}
        />
      </Suspense>
    </main>
  );
}
