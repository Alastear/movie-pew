# movie_pew

โปรเจค Next.js + React + Chakra UI สำหรับดูหนัง (mock)
- หน้า **List**: มีตัวกรอง, แบนเนอร์โฆษณาด้านบน, โฆษณาลอยซ้าย/ขวา/ล่าง
- หน้า **ดูหนัง**: มี iframe สำหรับเล่น, โฆษณาแบบ preroll (วิดีโอ) กด Skip ได้หลัง 3 วินาที, และมี Ads แบบเดียวกับหน้าแรก
- Responsive รองรับมือถือ / แท็บเล็ต
- Mock API ครบตามที่ขอ

## Run

```bash
pnpm i   # หรือ npm i / yarn
pnpm dev # หรือ npm run dev / yarn dev
```

ตั้งค่า base url (ถ้าจำเป็น) ใน `.env.local`:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## API

- `GET /api/video?page=1&limit=10&category=xxx&tags=xxx&tags=yyy&search=zzzz`
- `POST /api/video/count/view/:id`
- `POST /api/video/count/ratting/:id` (body: `{ "score": 1..5 }`)
- `POST /api/ads/count/click/:id`
- `GET /api/list/ads/banner`
- `GET /api/list/ads/holding`
- `GET /api/list/ads/preroll`
- `GET /api/list/categories`
- `GET /api/list/tags`
- `GET /api/:video_name?categories_name=xxxx&special_for_search=yyyy`
- `GET /api/video/:id`

## โครงหน้าเว็บ
- `/` หน้า list + filter + ads
- `/v/[video_name]` หน้าดูหนัง (โหลดวิดีโอผ่าน SEO slug)

## หมายเหตุ
- ข้อมูลและตัวนับต่าง ๆ เก็บในหน่วยความจำ (mock) เพื่อใช้งานง่าย
- สามารถต่อ API จริงภายหลังโดยย้าย logic ไปที่ service layer
# movie-pew
