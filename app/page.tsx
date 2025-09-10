import { Container, SimpleGrid, Heading } from "@chakra-ui/react";
import AdsBanner from "@/components/AdsBanner";
import FloatingAds from "@/components/FloatingAds";
import FilterBarClient from "@/components/FilterBarClient";
import VideoCard from "@/components/VideoCard";
import Pagination from "@/components/Pagination"; // ⬅️ เพิ่ม

async function fetchJSON(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}${path}`, { cache: "no-store" });
  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams?.page || 1);
  const limit = Number(searchParams?.limit || 8);
  const category = typeof searchParams?.category === "string" ? searchParams?.category : undefined;
  const tagsParam = searchParams?.tags;
  const search = typeof searchParams?.search === "string" ? searchParams?.search : undefined;
  const tags = Array.isArray(tagsParam)
    ? (tagsParam as string[])
    : (typeof tagsParam === "string" ? [tagsParam] : []);

  const [cats, tagList, banners, holding, list] = await Promise.all([
    fetchJSON("/api/list/categories"),
    fetchJSON("/api/list/tags"),
    fetchJSON("/api/list/ads/banner"),
    fetchJSON("/api/list/ads/holding"),
    fetchJSON(
      `/api/video?page=${page}&limit=${limit}${
        category ? `&category=${category}` : ""
      }${tags.map((t) => `&tags=${t}`).join("")}${
        search ? `&search=${encodeURIComponent(search)}` : ""
      }`,
    ),
  ]);

  return (
    <Container maxW="7xl" py={6}>
      <Heading size="lg" mb={4}>
        movie_pew — Videos
      </Heading>

      <FilterBarClient categories={cats} tags={tagList} initial={{ category, tags, search }} />

      <AdsBanner images={banners} />

      <SimpleGrid columns={[2, 3, 4]} spacing={4}>
        {list.items.map((v: any) => (
          <VideoCard key={v.id} v={v} />
        ))}
      </SimpleGrid>

      {/* ⬇️ เพจจิเนชัน */}
      <Pagination page={page} limit={limit} total={list.total} />

      <FloatingAds ads={holding} />
    </Container>
  );
}
