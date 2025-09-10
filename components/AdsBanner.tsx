"use client";
import { Box, Image, Link } from "@chakra-ui/react";

export default function AdsBanner({ images }:{ images: {id:string; imageUrl:string; link?:string}[] }){
  if (!images?.length) return null;
  return (
    <Box as="section" w="full" my={4}>
      {images.map((ad) => (
        <Box key={ad.id} my={2} textAlign="center">
          <Link href={ad.link || "#"} isExternal>
            <Image src={ad.imageUrl} alt={`ad-${ad.id}`} mx="auto" borderRadius="md" />
          </Link>
        </Box>
      ))}
    </Box>
  );
}
