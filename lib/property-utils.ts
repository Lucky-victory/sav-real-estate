import { properties } from "@/lib/data";
import type { PropertyType } from "@/lib/types";

export function getPropertyById(id: string): PropertyType | undefined {
  return properties.find((property) => property.id === id);
}

export function getRelatedProperties(
  property: PropertyType,
  count = 3
): PropertyType[] {
  // Filter properties with the same status (For Sale/For Rent)
  // and similar number of bedrooms (±1), excluding the current property
  const filtered = properties.filter(
    (p) =>
      p.id !== property.id &&
      p.status === property.status &&
      Math.abs(p.bedrooms - property.bedrooms) <= 1
  );

  // Shuffle the array to get random properties
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());

  // Return the requested number of properties or all if less are available
  return shuffled.slice(0, count);
}
