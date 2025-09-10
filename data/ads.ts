export type Ad = { id: string; imageUrl?: string; videoUrl?: string; link?: string; position?: "left"|"right"|"bottom"|"banner" };
export const bannerAds: Ad[] = [
  { id: "ad-b-1", imageUrl: "https://picsum.photos/1200/200", link: "https://example.com/ad1", position: "banner" },
  { id: "ad-b-2", imageUrl: "https://picsum.photos/1200/201", link: "https://example.com/ad2", position: "banner" }
];

export const holdingAds: Ad[] = [
  { id: "ad-l-1", imageUrl: "https://picsum.photos/120/600", link: "https://example.com/left", position: "left" },
  { id: "ad-r-1", imageUrl: "https://picsum.photos/120/600", link: "https://example.com/right", position: "right" },
  { id: "ad-btm-1", imageUrl: "https://picsum.photos/1200/100", link: "https://example.com/bottom", position: "bottom" }
];

export const prerollAds: Ad[] = [
  { id: "ad-pre-1", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", link: "https://example.com/preroll" }
];
