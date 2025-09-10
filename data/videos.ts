import { categories } from "./categories";
import { tags } from "./tags";

export type Video = {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  categoryId: string;
  tagIds: string[];
  views: number;
  ratingSum: number;
  ratingCount: number;
};

export const videos: Video[] = [
  {
    id: "v-1",
    title: "Action Demo One",
    slug: "action-demo-one",
    description: "An action-packed demo video.",
    thumbnail: "https://picsum.photos/seed/a/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[0].id, tags[2].id],
    views: 132,
    ratingSum: 400,
    ratingCount: 100
  },
  {
    id: "v-2",
    title: "Funny Moments",
    slug: "funny-moments",
    description: "Comedy compilation.",
    thumbnail: "https://picsum.photos/seed/b/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id, tags[3].id],
    views: 55,
    ratingSum: 230,
    ratingCount: 60
  },
  {
    id: "v-3",
    title: "Fantasy Trailer",
    slug: "fantasy-trailer",
    description: "A teaser from fantasy world.",
    thumbnail: "https://picsum.photos/seed/c/600/340",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    categoryId: categories[2].id,
    tagIds: [tags[0].id, tags[1].id],
    views: 78,
    ratingSum: 310,
    ratingCount: 80
  },
  {
    id: "v-4",
    title: "Ocean Escape",
    slug: "ocean-escape",
    description: "Dive into high-seas adventure and narrow escapes.",
    thumbnail: "https://picsum.photos/seed/d/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[0].id, tags[3].id],
    views: 411,
    ratingSum: 912,
    ratingCount: 220
  },
  {
    id: "v-5",
    title: "City Laughs",
    slug: "city-laughs",
    description: "Sketch comedy set in a bustling city.",
    thumbnail: "https://picsum.photos/seed/e/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id],
    views: 289,
    ratingSum: 520,
    ratingCount: 120
  },
  {
    id: "v-6",
    title: "Dragon Whisper",
    slug: "dragon-whisper",
    description: "A rider tames an ancient dragon of legend.",
    thumbnail: "https://picsum.photos/seed/f/600/340",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    categoryId: categories[2].id,
    tagIds: [tags[0].id, tags[2].id],
    views: 990,
    ratingSum: 1440,
    ratingCount: 320
  },
  {
    id: "v-7",
    title: "Racing Heat",
    slug: "racing-heat",
    description: "Street racers compete for glory.",
    thumbnail: "https://picsum.photos/seed/g/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[2].id],
    views: 623,
    ratingSum: 875,
    ratingCount: 200
  },
  {
    id: "v-8",
    title: "Standup Night",
    slug: "standup-night",
    description: "A night of jokes and crowd work.",
    thumbnail: "https://picsum.photos/seed/h/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id, tags[3].id],
    views: 178,
    ratingSum: 420,
    ratingCount: 100
  },
  {
    id: "v-9",
    title: "Forest of Stars",
    slug: "forest-of-stars",
    description: "Fantasy quest through a glowing forest.",
    thumbnail: "https://picsum.photos/seed/i/600/340",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    categoryId: categories[2].id,
    tagIds: [tags[0].id, tags[1].id, tags[3].id],
    views: 712,
    ratingSum: 1210,
    ratingCount: 260
  },
  {
    id: "v-10",
    title: "Skyline Ops",
    slug: "skyline-ops",
    description: "Heist above the city skyline.",
    thumbnail: "https://picsum.photos/seed/j/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[2].id, tags[0].id],
    views: 344,
    ratingSum: 612,
    ratingCount: 140
  },
  {
    id: "v-11",
    title: "Pranks & Giggles",
    slug: "pranks-and-giggles",
    description: "Hidden camera pranks compilation.",
    thumbnail: "https://picsum.photos/seed/k/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id, tags[4 - 1].id],
    views: 501,
    ratingSum: 960,
    ratingCount: 220
  },
  {
    id: "v-12",
    title: "Crystal Realms",
    slug: "crystal-realms",
    description: "Heroes explore realms carved in crystal.",
    thumbnail: "https://picsum.photos/seed/l/600/340",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    categoryId: categories[2].id,
    tagIds: [tags[0].id],
    views: 267,
    ratingSum: 486,
    ratingCount: 110
  },
  {
    id: "v-13",
    title: "Rogue Agent",
    slug: "rogue-agent",
    description: "An agent on the run uncovers a plot.",
    thumbnail: "https://picsum.photos/seed/m/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[2].id, tags[3].id],
    views: 845,
    ratingSum: 1580,
    ratingCount: 350
  },
  {
    id: "v-14",
    title: "Office Shenanigans",
    slug: "office-shenanigans",
    description: "Comedy in an everyday office.",
    thumbnail: "https://picsum.photos/seed/n/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id],
    views: 99, // (ignore TS if pasting—replace with 99 if needed)
    ratingSum: 360,
    ratingCount: 80
  },
  {
    id: "v-15",
    title: "Moonlit Spire",
    slug: "moonlit-spire",
    description: "A pilgrimage to the tower under moonlight.",
    thumbnail: "https://picsum.photos/seed/o/600/340",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    categoryId: categories[2].id,
    tagIds: [tags[0].id, tags[1].id],
    views: 433,
    ratingSum: 774,
    ratingCount: 170
  },
  {
    id: "v-16",
    title: "Cascade Pursuit",
    slug: "cascade-pursuit",
    description: "Chase sequence through waterfalls and canyons.",
    thumbnail: "https://picsum.photos/seed/p/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[2].id],
    views: 1200,
    ratingSum: 2050,
    ratingCount: 450
  },
  {
    id: "v-17",
    title: "Cafe Chats",
    slug: "cafe-chats",
    description: "Light-hearted sketches around a cafe.",
    thumbnail: "https://picsum.photos/seed/q/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id, tags[3].id],
    views: 268,
    ratingSum: 495,
    ratingCount: 110
  },
  {
    id: "v-18",
    title: "Grove of Echoes",
    slug: "grove-of-echoes",
    description: "A bard seeks the chorus of an ancient grove.",
    thumbnail: "https://picsum.photos/seed/r/600/340",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    categoryId: categories[2].id,
    tagIds: [tags[0].id, tags[3].id],
    views: 654,
    ratingSum: 1180,
    ratingCount: 260
  },
  {
    id: "v-19",
    title: "Bullet Horizon",
    slug: "bullet-horizon",
    description: "Mercenaries fight atop a moving train.",
    thumbnail: "https://picsum.photos/seed/s/600/340",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryId: categories[0].id,
    tagIds: [tags[2].id, tags[0].id],
    views: 931,
    ratingSum: 1710,
    ratingCount: 380
  },
  {
    id: "v-20",
    title: "Holiday Special",
    slug: "holiday-special",
    description: "Wholesome comedy with family vibes.",
    thumbnail: "https://picsum.photos/seed/t/600/340",
    embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    categoryId: categories[1].id,
    tagIds: [tags[1].id, tags[3].id],
    views: 512,
    ratingSum: 980,
    ratingCount: 220
  }
];

