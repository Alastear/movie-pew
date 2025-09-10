"use client";
import { Box, Image, Link, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

type Ad = { id:string; imageUrl?:string; link?:string; position: "left"|"right"|"bottom" };

export default function FloatingAds({ ads }:{ ads: Ad[] }){
  const [hidden, setHidden] = useState<string[]>([]);
  const show = (id:string) => !hidden.includes(id);
  const hide = (id:string) => setHidden((s)=>[...s,id]);

  return (
    <>
      {ads.map((ad) => {
        if(!show(ad.id)) return null;
        const base = {
          position: "fixed" as const, zIndex: 50, p: 2, bg: "blackAlpha.700", borderRadius: "md"
        };
        let pos:any = {};
        if (ad.position === "left") pos = { left: 2, top: "50%", transform: "translateY(-50%)" };
        if (ad.position === "right") pos = { right: 2, top: "50%", transform: "translateY(-50%)" };
        if (ad.position === "bottom") pos = { left: 0, right: 0, bottom: 0, mx: "auto", w: ["100%","90%","70%"] };

        return (
          <Box key={ad.id} {...base} {...pos}>
            <IconButton
              aria-label="close ad"
              icon={<CloseIcon />}
              size="xs"
              onClick={()=>hide(ad.id)}
              position="absolute"
              top={1}
              right={1}
            />
            <Link href={ad.link || "#"} isExternal>
              <Image src={ad.imageUrl} alt={`ad-${ad.id}`} maxH={ad.position==="bottom" ? "100px" : "600px"} />
            </Link>
          </Box>
        );
      })}
    </>
  );
}
