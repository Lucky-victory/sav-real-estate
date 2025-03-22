import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PropertyNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        The property you are looking for does not exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/properties">Browse All Properties</Link>
      </Button>
    </div>
  );
}
