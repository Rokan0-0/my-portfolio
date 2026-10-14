# Portfolio Content Breakdown & Update Template

This file lists **everything personal/editable** in the portfolio, **where it lives**, and **what it currently says** (from the original author, Naman Barkiya).

**How to use:** Fill in the `YOUR VALUE` fields / replace the example entries with your own info, then hand this file back. Delete anything you don't want (e.g. whole sections, projects, blogs). Leave a field as `KEEP` to keep it, or `REMOVE` to drop it.

---

## 0. Site Map (what pages exist)

| Route | Page | Data source |
|---|---|---|
| `/` | Home: hero + featured Projects, Experience, Contributions, Blogs, Skills | all configs below |
| `/projects` + `/projects/[id]` | Project list + detail page (gallery, description) | `config/projects.ts` |
| `/experience` + `/experience/[id]` | Timeline + detail page | `config/experience.ts` |
| `/contributions` | Open-source contributions | `config/contributions.ts` |
| `/skills` | Skills with 1–5 star ratings | `config/skills.ts` |
| `/blogs` + `/blogs/[slug]` | Markdown blog | `content/blogs/*.md` |
| `/contact` | Contact form (submits to a Google Form) + "star the repo" card | `.env`, `components/contact/github-redirect-card.tsx` |
| `/resume` | Redirects to your resume URL | `.env` → `NEXT_PUBLIC_RESUME_LINK` |
| `/community` | Redirects to a Discord invite | `.env` → `NEXT_PUBLIC_DISCORD_LINK` |

**Navbar order** (`config/routes.ts`): Projects, Experience, Contributions, Skills, Blogs, Community, Contact
**Footer**: icon links from `config/socials.ts`
**Also present**: dark/light mode toggle, a GitHub star badge (for the template repo), page animations.

```
Which pages do you want? (KEEP / REMOVE each)
- Projects:       KEEP
- Experience:     KEEP
- Contributions:  KEEP
- Skills:         KEEP
- Blogs:          KEEP
- Community:      KEEP
- Contact:        KEEP
- Resume button:  KEEP
- GitHub star badge / "star the template" card: KEEP
Nav order (if different):
```

---

## 1. Identity & SEO — `config/site.ts`, `app/manifest.ts`, `app/(root)/page.tsx`

| Field | Current value | YOUR VALUE |
|---|---|---|
| Full name | Naman Barkiya | |
| Job title / tagline | Applied AI Engineer | |
| Hero sub-text (home page) | "Software engineer working at the intersection of AI, data, and scalable software systems." | |
| Site description (SEO, 1–2 sentences) | "Naman Barkiya - Applied AI Engineer working at the intersection of AI, data, and scalable software systems. Explore my projects, experience, and contributions..." | |
| Username / handle | namanbarkiya | |
| Website URL (domain) | https://nbarkiya.xyz | |
| Twitter/X URL | https://x.com/namanbarkiya | |
| GitHub URL | https://github.com/namanbarkiya | |
| Social share image (OG image URL, 1200×630) | Cloudinary link | |
| Favicon (.ico URL or file) | Cloudinary link + `app/favicon.ico` | |
| Logo icon | Cloudinary link | |
| SEO keywords | Naman Barkiya, Applied AI Engineer, AI Engineer, Software Engineer, Full Stack, ML, Data Eng, UBS, Python, React, Next.js, TypeScript, Databricks... | |
| Profile photo | `public/profile-img.jpg` | (provide new image file) |

> Also hardcoded in: `app/manifest.ts` (PWA name/short name), `public/robots.txt` (sitemap domain), `app/(root)/projects/[projectId]/page.tsx` (author name + GitHub username shown on project pages), `app/api/github-stars/route.ts` + `components/contact/github-redirect-card.tsx` (template repo link). I'll update all of these from the values above.

---

## 2. Section Headings — `config/pages.ts`

Each page has a title + subtitle (shown on the page and on the home page sections).

| Page | Current subtitle | YOUR SUBTITLE |
|---|---|---|
| Home | Welcome to my portfolio website. | |
| Projects | Showcasing impactful projects and technical achievements. | |
| Experience | Professional journey and career timeline. | |
| Contributions | Open-source contributions and community involvement. | |
| Skills | Key skills that define my professional identity. | |
| Blogs | Thoughts on AI, software engineering, and building in public. | |
| Contact | Let's connect and explore collaborations. | |
| Resume | Naman Barkiya's resume. | |

---

## 3. Social Links (footer) — `config/socials.ts`

Available icons: GitHub, LinkedIn, Twitter, Gmail (others can be added on request).

| Platform | Display name | Link |
|---|---|---|
| Github | @namanbarkiya | https://github.com/namanbarkiya |
| LinkedIn | Naman Barkiya | https://www.linkedin.com/in/namanbarkiya |
| Twitter | @namanbarkiya | https://twitter.com/namanbarkiya |
| Gmail | naman.barkiya02 | mailto:naman.barkiya02@gmail.com |

```
YOUR SOCIALS:
- Github:   name=        link=
- LinkedIn: name=        link=
- Twitter:  name=        link=
- Email:    name=        link=mailto:
- Other:
```

---

## 4. Experience — `config/experience.ts`

Shown as a timeline; first 3 appear on the home page. Order = order listed.
Fields per job:

```
- id:            short-url-slug (used in /experience/<id>)
  position:
  company:
  location:
  startDate:     YYYY-MM-DD
  endDate:       YYYY-MM-DD or Present
  companyUrl:
  logo:          (image file, saved to public/experience/)
  skills:        [from the allowed skills list in §8]
  description:   (2–3 short lines, shown on the card)
    -
  achievements:  (detailed bullets, shown on detail page)
    -
```

**Current entries (replace these):**
1. **UBS** — Software Development Engineer, Mumbai, Aug 2024 – Present (Typescript, React, Databricks, Java, Python)
2. **Muze AI** — Founding Engineer, Bengaluru, Oct 2023 – Mar 2024 (FastAPI, Python, AWS, Next.js, React, Typescript)
3. **Builtdesign** — Web Developer Intern, Nagpur, Jul 2021 – Jul 2022 (React, Angular, GraphQL, AWS, HTML, CSS, JS)

```
YOUR EXPERIENCE:

```

---

## 5. Projects — `config/projects.ts`

First 3 are "featured" on the home page. Each project has a detail page with an image gallery.

```
- id:                short-url-slug
  name:
  type:              Personal | Professional
  category:          [Full Stack, Frontend, Backend, UI/UX, Web Dev, Mobile Dev, 3D Modeling]
  shortDescription:  (1–2 sentences, on the card)
  websiteLink:       (optional)
  githubLink:        (optional)
  techStack:         [from allowed skills list in §8]
  startDate:         YYYY-MM-DD
  endDate:           YYYY-MM-DD
  logo:              (image, saved to public/projects/<id>/logo.png)
  paragraphs:        (detail page, 1–5 paragraphs)
    -
  bullets:           (detail page, key points)
    -
  gallery:           (sections of screenshots; optional)
    - title:
      description:
      images: [file names]
```

**Current entries (replace/remove):**
| # | Name | Type | Links |
|---|---|---|---|
| 1 | Portfolio Website (130+ stars) | Personal | site + GitHub |
| 2 | Convot (AI chatbot platform) | Personal | — |
| 3 | Niya SaaS Template | Personal | site + GitHub |
| 4 | Portfolio Card (3D, Three.js) | Personal | site + GitHub |
| 5 | TheSuperFocus (Pomodoro app) | Personal | — |
| 6 | Builtdesign | Professional | site |
| 7 | The Super Quotes (RN app) | Professional | Play Store |
| 8 | Apex Shopping App | Personal | GitHub |
| 9 | Builtdesign Blogs | Professional | site |
| 10 | Cirql Dashboard | Personal | site |
| 11 | Inscript Hindi Typing | Personal | site + GitHub |

> All their screenshots live in `public/projects/*` and will be deleted/replaced.

```
YOUR PROJECTS:

```

---

## 6. Open-Source Contributions — `config/contributions.ts`

First 3 featured on home page.

```
- repo:         repo-name
  owner:        org/user
  description:  what you did
  link:         PR or repo URL
```

**Current:** minimal-next-portfolio, niya-saas-template (own repos); microsoft/autogen PR #1445; creativecommons PRs #738, #719.

```
YOUR CONTRIBUTIONS (or REMOVE section):

```

---

## 7. Skills — `config/skills.ts`

Sorted by rating (1–5); top 6 featured on the home page. Each has a one-line description.

**Current (rating):** Next.js 5, React 5, Express 5, Node 5, MongoDB 5, TypeScript 5, JavaScript 5, Tailwind 5, GraphQL 4, Nest.js 4, HTML 4, CSS 4, React Native 4, Redux 4, Material UI 4, Netlify 4, Angular 3, Socket.io 3, AWS 3, Bootstrap 2, MySQL 2

```
YOUR SKILLS:
- name:          rating: (1-5)  description:
-
```

---

## 8. Allowed Skill / Tech Names — `config/constants.ts`

Tech stacks on projects/experience must use these names (with icons available for most). **New ones can be added** — just list them.

Next.js, React, GraphQL, Nest.js, express.js, Node.js, MongoDB, Typescript, Javascript, HTML 5, CSS 3, React Native, Angular, Redux, Socket.io, Material UI, Tailwind CSS, AWS, Bootstrap, Google Auth, MySQL, Java, Databricks, Python, Docker, Kubernetes, PostgreSQL, Redis, Git, CI/CD, Jenkins, FastAPI, Django, Vue.js, Sass, Firebase, Azure, Google Cloud, Figma, Webpack, Jest, Cypress, Storybook, Prisma, Supabase, Vercel, Netlify, Three.js, WebGL, TensorFlow, PyTorch, Spring Boot, Laravel, PHP, Flutter, Dart, Flask, SQL, NoSQL, Framer Motion

```
Extra techs to add:
```

---

## 9. Blogs — `content/blogs/*.md`

Each post is a markdown file with this header:

```
---
title: ""
date: "YYYY-MM-DD"
description: ""
tags: ["", ""]
coverImage: "/path/to/image.png"
featured: true        # shows on home page
readingTime: 5        # minutes
---
Markdown body...
```

**Current posts (all by original author):**
- 3d-card-threejs-blender.md
- aeo-vs-seo-chatgpt-ranking.md
- building-production-ai-chatbot-convot.md
- how-i-got-150-stars-nextjs-portfolio-template.md
- niya-fastapi-starter-template.md
- niya-saas-starter-template.md

```
Blogs: REMOVE ALL / provide your own posts below / hide Blogs section
```

---

## 10. Environment Variables — `.env` (not committed)

| Variable | Purpose | YOUR VALUE |
|---|---|---|
| `NEXT_PUBLIC_RESUME_LINK` | URL the Resume button opens (e.g. Google Drive PDF) | |
| `GOOGLE_FORM_LINK` | Pre-filled Google Form URL for contact form | |
| `GOOGLE_FORM_FIELD_ID_NAME` / `_EMAIL` / `_MESSAGE` / `_SOCIAL` | Form field entry IDs | |
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | Google Analytics ID (G-XXXX), optional | |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification, optional | |
| `NEXT_PUBLIC_DISCORD_LINK` | Discord invite for `/community`, optional | |

> Contact form works by posting to a Google Form. Alternative (e.g. email via SendGrid/Nodemailer — both already installed) possible on request.

---

## 11. Design / Look (optional)

Theme colours in `app/globals.css` + `tailwind.config.js`; fonts are Cal Sans (headings) + Inter.

```
Any design changes? (colours, fonts, layout, animations):
```
