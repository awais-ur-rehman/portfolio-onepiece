# Awais Ur Rehman

**Full-Stack and AI Engineer** · Rawalpindi / Islamabad, Pakistan

- Email: awaisurrehmanjarral@gmail.com
- GitHub: [github.com/awais-ur-rehman](https://github.com/awais-ur-rehman)
- Timezone: PKT (UTC+5), flexible

---

## Short Bio

I build production web and mobile products, and the AI systems that sit inside them. Around three years of shipping at startups and agencies, with work running live at two of Pakistan's largest banks (UBL and HBL) and a platform serving 50K+ monthly users. My strength is taking something slow or fragile and rebuilding it so it holds under real load: I took a social listening pipeline from 1.4 minutes per message to 0.4 seconds.

Full-stack web is my core. AI (RAG, voice agents, multi-agent systems) is what I add on top.

Currently a Specialist NOC at Engro Enfrashare, where I was made Lead of the RMS project less than two months after joining.

---

## Current Role

### Engro Enfrashare · Islamabad

**Specialist NOC (L2)** · Aug 2026 to present
**Lead, RMS Project** · Oct 2026 to present

- Joined the Network Operations Centre on 10 Aug 2026 and started building RMS software after hours alongside my shift work.
- Appointed Lead of the Enfrashare RMS project on 2 Oct 2026, less than two months in.
- Built **EnfraPulse**, a full-stack role-based access control (RBAC) dashboard in NestJS and React.
- Built the **NOC Escalation Console**, a single-file HTML tool that partially automates the hourly outage escalation workflow: paste parsing, lead lookup from the MBU lead sheet, WhatsApp group routing, reason merging, and CSV export.
- Helped shape the requirements for a NOC process automation initiative covering NMS screen scraping/OCR and automated calling (scraper controls for shift engineers, configurable exports, one-click summaries to chat channels, audit logging).

---

## Past Experience

### Bridgeframe · Sep 2025 to Aug 2026

**Full-Stack Engineer**

- **SANHA Pakistan** ([sanha.org.pk](https://www.sanha.org.pk/)), halal certification body, 50K+ monthly users. Cut page load from **4.2s to 2.3s** through image pipeline optimization, lazy loading, and batched API calls. Built the certification verification system, role-based admin dashboards, and JWT auth.
- **RigZone LLC** ([rigzonellc.com](https://rigzonellc.com/)), multi-vendor service platform. Next.js + TypeScript component architecture, SSR for SEO, CI/CD.
- **Bridgeframe website** ([bridgeframe.co](https://bridgeframe.co/)), built in Next.js.

### ISSM Labelling Solutions · Jan 2025 to Sep 2025

**Full-Stack / AI Engineer**

- **Odin**, a social listening platform that pulls messages from Facebook, Instagram and WhatsApp through an NLP pipeline (sentiment, categorization, priority scoring). **Live at UBL and HBL.**
  - Cut processing time from **1.4 minutes to 0.4 seconds** per message by breaking a synchronous monolith into event-driven Node.js and Python microservices with Redis Pub/Sub, BullMQ and Docker Compose.
  - Fixed NLP misfires on Roman Urdu text with a custom lexicon.
  - Meta Business API integration.
- **Alara**, RAG and voice AI agent platform deployed for **Faysal Bank and Bank Alfalah**.
  - Migrated the voice bot from n8n to LiveKit.
  - Restructured the Neo4j knowledge graph to improve RAG follow-up accuracy.

### Ceven Technologies · Jun 2024 to Dec 2024

**Full Stack Lead**

- Led full-stack development on what was positioned as Pakistan's first AI-powered super app, recognized by Microsoft, Siberkoza and NASTP.
- Wrote production code and mentored junior engineers on the team.

### OxyBlue · Nov 2023 to Jun 2024

**Full-Stack Developer**

- Built an offline-first water delivery PWA that cut order fulfillment time from **25 to 15 minutes**.

### Urban Codes

**Developer** · _(add dates and details)_

---

## Startup

### Payssenger · Co-founder

With Syed Haadi Raza and Bilal Khan.

- Secure offline payments product.
- **1st place, UBL National Innovation Hackathon 2026** (built June 2026).
- **Selected for Cohort 16 at NIC Karachi** (National Incubation Center), Oct 2026.

### Revamped · Founder

Web design agency for local Pakistani businesses and US restaurant and roofing clients.

- Built a full spec and design package for **Top Craft Roofs** (McKinney, TX): competitor analysis, Next.js route map, design system, SEO work, and voice agent planning.
- Built the restaurant demo site [smokingrills.vercel.app](https://smokingrills.vercel.app) and ran US lead research for outreach.

---

## Projects

### AI and Machine Learning

| Project                                    | What it is                                                                                                                                           | Stack / highlight                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **MedLens AI**                             | Real-time voice and vision first aid companion, built with Dr. Muhammad Khan. Handles scenarios like a snake bite with a mid-session switch to Urdu. | Gemini Live, Cloud Run. Shipped in about 6 days                                                                        |
| **OculaCare**                              | Final-year project for eye care, used with real ophthalmologists                                                                                     | Flutter, CNN, Neo4j, RAG. 1st place COMSATS Industrial Expo 2024, 2nd place Securiti.ai National AI Security Challenge |
| **QuotePilot**                             | B2B procurement RFQ agent                                                                                                                            | Built for the TinyFish hackathon                                                                                       |
| **Vantage**                                | App Store Optimization audit agent                                                                                                                   | Mastra, single structured-output LLM call                                                                              |
| **DripScore**                              | AI outfit rater                                                                                                                                      | Flutter + Node.js                                                                                                      |
| **FIFA World Cup 2026 Predictor**          | Match and tournament predictions                                                                                                                     | Dixon-Coles model, Monte Carlo simulation, Next.js ISR, Python JSON artifacts                                          |
| **Naruto Jutsu AR / Hand-Seal Recognizer** | Recognizes hand seals and triggers five jutsu effects                                                                                                | MediaPipe Tasks API, Random Forest, **99.64% accuracy**                                                                |
| **Witch Hat Atelier Spell-Sigil System**   | Anime-inspired sigil recognition (ongoing)                                                                                                           | Creative technical practice                                                                                            |
| **AI Short Film**                          | Entry for the Higgsfield Global Film Festival, adapted from Walter de la Mare's "The Listeners"                                                      | Full 42-shot prompt set and production strategy                                                                        |

### Product and Full-Stack

| Project                            | What it is                                                                                                                    | Stack                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Marriage Hall Invoicing System** | Booking and invoicing with thermal receipt printing, built for integration with the PRA e-invoicing system. Runs fully local. | Node.js, React / Next.js                       |
| **Regulars** _(in progress)_       | App connecting people who frequent the same cafés and gyms, as friends and community                                          | Flutter (Bloc/Cubit), Node.js, admin dashboard |
| **WildSnap** _(helped a friend)_   | Wildlife photography game                                                                                                     | Flutter + BLoC, Node.js, iNaturalist CV API    |
| **Collegium Backend**              | Dockerized Node.js backend on a VPS                                                                                           | Node.js, Docker, Ubuntu                        |

---

## Achievements

- 🥇 **1st Place**, UBL National Innovation Hackathon 2026 (Payssenger)
- 🚀 **NIC Karachi, Cohort 16** (Payssenger), 2026
- 🥈 **Kaggle Silver Medal**, March Machine Learning Mania 2026 (23rd of 3,462 teams)
- 🥇 **1st Place**, COMSATS Industrial Expo 2024 (OculaCare)
- 🥈 **2nd Place**, Securiti.ai National AI Security Challenge (OculaCare)
- 📈 Appointed **RMS Project Lead** at Engro Enfrashare within two months of joining
- 🎤 **Organizer, TEDxCUI** ([ted.com/tedx/events/57789](https://www.ted.com/tedx/events/57789))
- 🏆 Competed in PayPal's "Build What's Next with PayPal and AI" hackathon (Oct 2026)

### Kaggle

- March ML Mania 2026: Silver Medal
- AIMO3 (IMO-level math): vLLM with Qwen3 and Gemma 4
- NeuroGolf 2026: ONNX network optimization, ~6166 board score

---

## What I'm Good At

- **Performance and scaling**: turning slow, synchronous systems into event-driven ones that hold up under bursts.
- **Full-stack product work**: from database schema to polished frontend, shipped and deployed.
- **Production AI**: RAG pipelines, voice agents, multi-agent systems, knowledge graphs. Built for banks, not demos.
- **Shipping fast**: MedLens went from idea to deployed in about six days; hackathon wins under time pressure.
- **Leading and mentoring**: Full Stack Lead at Ceven, Project Lead at Enfrashare.
- **Automating operations**: turning manual NOC workflows into tools people actually use on shift.
- **Planning before building**: PRD to TRD to implementation plan, then build.

---

## Skills and Tools

**Languages:** TypeScript, JavaScript, Python, Dart

**Frontend:** React, Next.js, Tailwind CSS, shadcn/ui, Redux, Context API, Material UI, PWAs

**Backend:** Node.js, Express, NestJS, FastAPI, REST APIs, JWT auth, RBAC

**Mobile:** Flutter, Bloc/Cubit

**Data and messaging:** MongoDB, PostgreSQL, Redis (Pub/Sub), BullMQ, Neo4j

**AI / ML:** RAG pipelines, multi-agent systems, Google ADK, Gemini and Gemini Live, Vertex AI, LangChain, LiveKit, Mastra, n8n, vLLM, Qwen3, Gemma, MediaPipe, CNNs, scikit-learn (Random Forest), ONNX

**Cloud and DevOps:** Docker, Docker Compose, Google Cloud Platform, Cloud Run, Vercel, CI/CD, Linux VPS

**Integrations:** Meta Business API, WhatsApp, iNaturalist API, thermal printers, government e-invoicing (PRA)

**Daily workflow:** Claude Code, Cursor, Git / GitHub

---

## Education

**BS Software Engineering** · COMSATS University Islamabad
2025

---

## Interests and Hobbies

- **Anime and manga**: Naruto, Hunter x Hunter, One Piece, Witch Hat Atelier. Several of my side projects (the jutsu recognizer, the spell-sigil system) come straight from this.
- **Football**: I play regularly.
- **F.R.I.E.N.D.S**: a permanent rewatch. I keep a physical notebook of memorable life events, each titled like a Friends episode ("The One Where...").
- **Kaggle competitions**: forecasting, math reasoning, model optimization.
- **Hackathons**: I like building under a deadline with a small team.
- **AI filmmaking**: experimenting with AI-generated short film.

---

## Suggested Taglines

- "I make slow systems fast and ship AI that banks actually use."
- "Full-stack engineer. 1.4 minutes to 0.4 seconds."
- "Building web, mobile and AI products from Islamabad."

---

> **To fill in before publishing:** Urban Codes dates and role, live links for MedLens, DripScore, the FIFA predictor and the jutsu recognizer (or GitHub repos), LinkedIn URL, and a profile photo.
