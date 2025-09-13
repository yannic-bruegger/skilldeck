# SkillDeck 🎴

SkillDeck is an open-source tool for managing and discovering skills within a team or organization.  
Think of skills as **cards**, and each person has their own **deck**. When starting a project, define the skills you need and let SkillDeck help you find the right people.

---

## ✨ Features (MVP)
- **Entra ID login** (Microsoft SSO).
- **Profiles** with photo, role, and skills.
- **Skill cards**: name, level (0–5), last used.
- **Search & filter**: quickly find people by skill.
- **Projects**: define required skills and match against people’s decks.
- **Simple scoring**: rank candidates by fit (level, recency, experience).

---

## 🏗️ Architecture
- **Frontend:** Next.js (App Router, TypeScript, Tailwind, shadcn/ui)
- **Backend:** Node.js (Fastify/NestJS) REST API
- **Database:** PostgreSQL with RLS (Row-Level Security)
- **Auth:** Auth.js with Microsoft Entra ID (OIDC)
- **Storage:** Azure Blob (for profile photos, optional)

---

## 🚀 Getting Started (Dev)
### Prerequisites
- Node.js 18+
- pnpm
- Docker (for Postgres)

### Setup
```bash
# clone the repo
git clone https://github.com/<your-org>/skilldeck.git
cd skilldeck

# install deps
pnpm install

# start Postgres (local dev)
docker-compose up -d

# run migrations
pnpm migrate

# start frontend & api
pnpm dev
