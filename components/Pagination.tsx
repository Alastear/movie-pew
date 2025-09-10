"use client";

import {
  HStack,
  IconButton,
  Button,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Pagination({
  page,
  limit,
  total,
  maxNumbers = 5, // จำนวนปุ่มตัวเลขที่โชว์
}: {
  page: number;
  limit: number;
  total: number;
  maxNumbers?: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(total / Math.max(1, limit)));
  const current = clamp(page, 1, totalPages);

  const createHref = (nextPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (nextPage <= 1) params.delete("page");
    else params.set("page", String(nextPage));

    // คง limit เดิมไว้
    params.set("limit", String(limit));

    const qs = params.toString();
    return qs ? `/?${qs}` : "/";
  };

  const go = (p: number) => {
    const href = createHref(p);
    // ถ้าเปิด typedRoutes อยู่ ให้ cast เป็น any เพื่อเลี่ยงชนิด RouteImpl
    router.push(href as any);
  };

  // สร้างช่วงตัวเลขหน้า
  const { start, end } = useMemo(() => {
    const half = Math.floor(maxNumbers / 2);
    let s = current - half;
    let e = current + half;
    if (s < 1) {
      e += 1 - s;
      s = 1;
    }
    if (e > totalPages) {
      s -= e - totalPages;
      e = totalPages;
    }
    s = Math.max(1, s);
    return { start: s, end: Math.max(s, e) };
  }, [current, totalPages, maxNumbers]);

  if (totalPages <= 1) {
    return (
      <Flex mt={4} justify="center">
        <Text fontSize="sm" color="gray.400">
          Showing {total} result{total !== 1 ? "s" : ""}
        </Text>
      </Flex>
    );
  }

  return (
    <Box mt={6}>
      <Flex direction="column" gap={2} align="center">
        <HStack spacing={1} wrap="wrap" justify="center">
          <IconButton
            aria-label="First page"
            icon={<ArrowLeftIcon />}
            size="sm"
            isDisabled={current === 1}
            onClick={() => go(1)}
          />
          <IconButton
            aria-label="Previous page"
            icon={<ChevronLeftIcon />}
            size="sm"
            isDisabled={current === 1}
            onClick={() => go(current - 1)}
          />

          {start > 1 && (
            <>
              <Button size="sm" onClick={() => go(1)}>
                1
              </Button>
              {start > 2 && (
                <Button size="sm" variant="ghost" isDisabled>
                  …
                </Button>
              )}
            </>
          )}

          {Array.from({ length: end - start + 1 }).map((_, i) => {
            const p = start + i;
            const isActive = p === current;
            return (
              <Button
                key={p}
                size="sm"
                colorScheme={isActive ? "teal" : undefined}
                variant={isActive ? "solid" : "outline"}
                onClick={() => go(p)}
              >
                {p}
              </Button>
            );
          })}

          {end < totalPages && (
            <>
              {end < totalPages - 1 && (
                <Button size="sm" variant="ghost" isDisabled>
                  …
                </Button>
              )}
              <Button size="sm" onClick={() => go(totalPages)}>
                {totalPages}
              </Button>
            </>
          )}

          <IconButton
            aria-label="Next page"
            icon={<ChevronRightIcon />}
            size="sm"
            isDisabled={current === totalPages}
            onClick={() => go(current + 1)}
          />
          <IconButton
            aria-label="Last page"
            icon={<ArrowRightIcon />}
            size="sm"
            isDisabled={current === totalPages}
            onClick={() => go(totalPages)}
          />
        </HStack>

        <Text fontSize="xs" color="gray.400">
          Page {current} of {totalPages} • {total} result{total !== 1 ? "s" : ""}
        </Text>
      </Flex>
    </Box>
  );
}
