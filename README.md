# Turiya Football — Grassroots Sports Business System

A production-quality sports-tech platform built for grassroots and village football communities across India and Northeast India.

---

## 🌟 Key Features

1. **Light, Premium, Modern Sports-Tech Aesthetics**:
   - Palette: Deep Football Green (`#0B6B3A`), Bright Green (`#19C463`), Lime Accents (`#D8FF3E`), Navy Typography (`#102A43`), and Clean Light Green Backgrounds (`#F7FAF8`, `#EAF6EF`, `#FFFFFF`).
   - Strictly NO dark/black theme.
   - Clean, sporty typography with extra-bold headings (`Outfit` / `Plus Jakarta Sans`).

2. **Full Information Architecture & Routes**:
   - `/` — Complete Homepage with all 16 sections (Hero, Impact Stats, Why Turiya, 6-Stage Ecosystem, League, Tournaments, Player Discovery, Clubs, Academies, Opportunities, Community Stories, Movement Impact, News Dispatches, Smartphone App Download, Join by Role, Footer).
   - `/about` — Mission, 3 foundational pillars, and Northeast India grassroots focus.
   - `/league` & `/league/[slug]` — Standings table, upcoming fixtures, recent results, team rosters, and rules.
   - `/tournaments` & `/tournaments/[slug]` — Grassroots knockout cups, prize pools, matchday schedule, and team registration modal.
   - `/academies` & `/academies/[slug]` — Rural training centers, age categories, coaching staff, facilities, and batch admissions.
   - `/opportunities` & `/opportunities/[slug]` — Multi-category scouting trials, coaching vacancies, referee certification clinics, and physiotherapy fellowships.
   - `/players` & `/players/[slug]` — Digital player passports with photos, match statistics, technical ratings, biography, honors, and action gallery.
   - `/clubs` & `/clubs/[slug]` — Community clubs, squad distribution, coaching leadership, and league affiliations.
   - `/stories` & `/stories/[slug]` — Editorial village stories and quotes.
   - `/support` — Help desk, FAQ, and regional field coordinator contacts.
   - **Strict Rule Observed**: "PASS" is NOT present in the navigation or tabs.

3. **Backend & Architecture**:
   - Decoupled API service layer (`/lib/api/`) ready for Laravel/PHP REST API endpoints.
   - Full MySQL 8.0 database schema and migrations guide documented in `docs/database_schema.md`.
   - Typed data models in `types/index.ts`.
   - Interactive modals for:
     - "Join Turiya" with 8 role pathways.
     - "Register Team" for tournaments.
     - "Apply Online" for trials and opportunities.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📁 Directory Structure
```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── league/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── tournaments/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── academies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── opportunities/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── players/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── clubs/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── stories/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── support/page.tsx
├── components/
│   ├── navbar/
│   ├── footer/
│   ├── ui/
│   ├── cards/
│   ├── sections/
│   └── modals/
├── lib/
│   ├── api/
│   └── constants/
├── types/
├── styles/
└── docs/
```

---

© 2026 Turiya Football. Grassroots Sports Business System.
