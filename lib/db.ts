import { videos } from "@/data/videos";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { bannerAds, holdingAds, prerollAds } from "@/data/ads";

// Simple in-memory "DB"
export const db = {
  videos,
  categories,
  tags,
  bannerAds,
  holdingAds,
  prerollAds
};
