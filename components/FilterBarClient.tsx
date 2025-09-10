"use client";

import { useRouter } from "next/navigation";
import FilterBar from "./FilterBar";

type Option = { id: string; name: string; slug: string };

export default function FilterBarClient({
  categories,
  tags,
  initial,
}: {
  categories: Option[];
  tags: Option[];
  initial?: { category?: string; tags?: string[]; search?: string };
}) {
  const router = useRouter();

  const handleApply = (f: { category?: string; tags?: string[]; search?: string }) => {
    const params = new URLSearchParams();
    if (f.category) params.set("category", f.category);
    (f.tags || []).forEach((t) => params.append("tags", t));
    if (f.search) params.set("search", f.search);
    const href = `/?${params.toString()}`;
    router.push(href as any);
  };

  return (
    <FilterBar
      categories={categories}
      tags={tags}
      initial={initial}
      onApply={handleApply}
    />
  );
}
