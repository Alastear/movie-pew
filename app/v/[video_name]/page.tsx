import NextLink from "next/link";                  // ⬅️ เพิ่ม
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react"; // ⬅️ เพิ่ม Button
// import { ArrowBackIcon } from "@chakra-ui/icons";   // ⬅️ เพิ่มไอคอน
import FloatingAds from "@/components/FloatingAds";
import AdsBanner from "@/components/AdsBanner";
import PrerollAd from "@/components/PrerollAd";

async function fetchJSON(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}${path}`, { cache: "no-store" });
  return res.json();
}

export default async function Page({ params, searchParams }: { params: { video_name: string }, searchParams: { [k: string]: string | string[] | undefined } }) {
  const { video_name } = params;
  const video = await fetchJSON(`/api/${video_name}${searchParams?.categories_name ? `?categories_name=${searchParams.categories_name}` : ""}${searchParams?.special_for_search ? `${searchParams?.categories_name ? "&" : "?"}special_for_search=${searchParams.special_for_search}` : ""}`);
  const [banners, holding, prerolls] = await Promise.all([
    fetchJSON("/api/list/ads/banner"),
    fetchJSON("/api/list/ads/holding"),
    fetchJSON("/api/list/ads/preroll")
  ]);

  // Increment view count (fire-and-forget)
  fetch(`/api/video/count/view/${video.id}`, { method: "POST" });

  return (
    <Container maxW="7xl" py={6} position="relative">
      {/* ปุ่มกลับหน้าแรก */}
      <Button
        as={NextLink}
        href="/"
        // leftIcon={<ArrowBackIcon />}
        size="sm"
        variant="outline"
        mb={3}
      >
        กลับหน้าแรก
      </Button>

      <Heading size="lg" mb={2}>{video.title}</Heading>
      <Text color="gray.300" mb={4}>{video.description}</Text>
      <Box position="relative" bg="black" borderRadius="md" overflow="hidden" aspectRatio={16 / 9 as any}>
        <iframe /* ...เหมือนเดิม */ />
        {prerolls[0]?.videoUrl && <PrerollAd src={prerolls[0].videoUrl} clickUrl={prerolls[0].link} />}
      </Box>
      <AdsBanner images={banners} />
      <FloatingAds ads={holding} />
    </Container>
  );
}
