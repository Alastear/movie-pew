"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";                 // ⬅️ เพิ่ม
// import { ArrowBackIcon } from "@chakra-ui/icons"; // ⬅️ เพิ่ม

export default function PrerollAd({ src, clickUrl }: { src: string; clickUrl?: string }) {
  const [show, setShow] = useState(true);
  const [remaining, setRemaining] = useState(3);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const startedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handlePlaying = () => {
      // เริ่มนับถอยหลังเมื่อวิดีโอเริ่มเล่นครั้งแรกเท่านั้น
      if (startedRef.current) return;
      startedRef.current = true;

      let counter = 3;
      setRemaining(counter);

      timerRef.current = setInterval(() => {
        counter -= 1;
        setRemaining(counter);
        if (counter <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          setCanSkip(true);
        }
      }, 1000);
    };

    const handleEnded = () => {
      // จบโฆษณาให้ปิด overlay อัตโนมัติ
      setShow(false);
    };

    v.addEventListener("playing", handlePlaying);
    v.addEventListener("ended", handleEnded);

    return () => {
      v.removeEventListener("playing", handlePlaying);
      v.removeEventListener("ended", handleEnded);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  if (!show) return null;

  return (
    <Box position="absolute" inset={0} bg="blackAlpha.900" zIndex={40} display="flex" alignItems="center" justifyContent="center" p={2}>
      {/* ปุ่มกลับหน้าแรกบน overlay */}
      <Button
        as={NextLink}
        href="/"
        // leftIcon={<ArrowBackIcon />}
        size="sm"
        variant="ghost"
        position="absolute"
        top={2}
        left={2}
      >
        หน้าแรก
      </Button>

      <Box position="relative" w="full" maxW={["100%", "90%", "80%"]}>
        <video ref={videoRef} src={src} controls autoPlay playsInline style={{ width: "100%", height: "auto", display: "block" }} />
        <Button
          size="sm"
          position="absolute"
          top={2}
          right={2}
          onClick={() => setShow(false)}
          isDisabled={!canSkip}
          colorScheme="teal"
        >
          {canSkip ? "Skip Ad" : `Skip in ${remaining}s`}
        </Button>
      </Box>

      {clickUrl && (
        <Button as={Link} href={clickUrl} isExternal colorScheme="yellow" position="absolute" bottom={3} right={3}>
          Visit Sponsor
        </Button>
      )}
    </Box>
  );
}