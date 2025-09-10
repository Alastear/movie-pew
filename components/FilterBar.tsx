"use client";
import { Box, Button, Flex, Input, Select, Wrap, WrapItem, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Option = { id:string; name:string; slug:string };

export default function FilterBar({
  categories, tags, onApply, initial
}:{
  categories: Option[];
  tags: Option[];
  onApply: (f:{category?:string; tags?:string[]; search?:string})=>void;
  initial?: {category?:string; tags?:string[]; search?:string};
}){
  const [category, setCategory] = useState(initial?.category || "");
  const [search, setSearch] = useState(initial?.search || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(initial?.tags || []);

  const toggleTag = (id:string)=>{
    setSelectedTags((t) => t.includes(id) ? t.filter(x=>x!==id) : [...t, id]);
  };

  return (
    <Box p={4} bg="blackAlpha.600" borderRadius="md" mb={4}>
      <Flex gap={2} direction={["column","row"]}>
        <Select placeholder="All Categories" value={category} onChange={(e)=>setCategory(e.target.value)} maxW={["full","250px"]}>
          {categories.map((c)=>(<option key={c.id} value={c.slug}>{c.name}</option>))}
        </Select>
        <Input placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)} />
        <Button onClick={()=>onApply({ category: category || undefined, tags: selectedTags, search: search || undefined })} colorScheme="teal">Apply</Button>
      </Flex>
      <Wrap mt={3}>
        {tags.map((t)=>(
          <WrapItem key={t.id}>
            <Checkbox isChecked={selectedTags.includes(t.slug)} onChange={()=>toggleTag(t.slug)}>
              {t.name}
            </Checkbox>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
