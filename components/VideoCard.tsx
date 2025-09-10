"use client";
import { Box, Image, Text, LinkBox, LinkOverlay, HStack, Badge } from "@chakra-ui/react";
import NextLink from "next/link";

export default function VideoCard({ v }:{ v: any }){
  const rating = v.ratingCount ? (v.ratingSum / v.ratingCount).toFixed(1) : "0.0";
  return (
    <LinkBox as="article" bg="gray.800" borderRadius="lg" overflow="hidden" _hover={{ transform: "translateY(-2px)" }} transition="0.2s">
      <Image src={v.thumbnail} alt={v.title} w="full" h="180px" objectFit="cover" />
      <Box p={3}>
        <LinkOverlay as={NextLink} href={`/v/${v.slug}`}>
          <Text fontWeight="bold" noOfLines={1}>{v.title}</Text>
        </LinkOverlay>
        <HStack spacing={2} mt={1}>
          <Badge>{rating}★</Badge>
          <Text fontSize="sm" color="gray.300">{v.views} views</Text>
        </HStack>
      </Box>
    </LinkBox>
  );
}
