export const profile = {
  name: "Awais ur Rehman",
  email: "awaisurrehmanjarral@gmail.com",
  github: "https://github.com/awais-ur-rehman",
  role: "Full-Stack & AI Engineer",
  location: "Islamabad, Pakistan",
  introduction:
    "I build web, mobile, and AI products that hold up in the real world.",
  biography:
    "Around three years of shipping at startups and agencies, with systems running at Pakistan’s leading banks and products serving 50K+ monthly users. Full-stack engineering is my core. AI is what I build on top.",
};

export const projects = [
  {
    slug: "odin",
    name: "Odin",
    category: "Production AI · Systems engineering",
    title: "84 seconds became 0.4.",
    description:
      "A social listening engine, rebuilt to make sense of conversations at the speed they happen.",
    cover: "/images/work/odin.svg",
    color: "#d9ded2",
    year: "2025",
    role: "Full-Stack / AI Engineer",
    organization: "ISSM Labelling Solutions",
    stack: [
      "Node.js",
      "Python",
      "Redis",
      "BullMQ",
      "Docker",
      "Meta Business API",
    ],
    challenge:
      "Facebook, Instagram, and WhatsApp messages were passing through a synchronous NLP monolith. Processing a single message took 1.4 minutes, delaying the sentiment, categorization, and priority insights teams needed.",
    approach:
      "I separated the system into event-driven Node.js and Python microservices with Redis Pub/Sub and BullMQ, orchestrated through Docker Compose. A custom Roman Urdu lexicon addressed language-specific NLP misfires, while the Meta Business API connected the channels.",
    result:
      "Processing fell from 84 seconds to 0.4 seconds per message. The platform runs live at UBL and HBL.",
    metrics: [
      "210× faster processing",
      "0.4s per message",
      "Live at UBL & HBL",
    ],
  },
  {
    slug: "payssenger",
    name: "Payssenger",
    category: "Fintech · Co-founder",
    title: "Payments beyond the signal.",
    description:
      "Secure offline payments, built with a small team and a belief that connectivity shouldn’t be a barrier.",
    cover: "/images/work/payssenger.svg",
    color: "#d4b4a5",
    year: "2026",
    role: "Co-founder",
    organization: "Payssenger",
    stack: ["Offline payments", "Product engineering", "Fintech"],
    challenge:
      "Payments need to work in situations where connectivity cannot be taken for granted. Our team set out to build a secure offline payments product under the pressure of a national hackathon.",
    approach:
      "I co-founded Payssenger with Syed Haadi Raza and Bilal Khan. We built the product in June 2026 and continued developing it beyond the competition.",
    result:
      "Payssenger won first place at the UBL National Innovation Hackathon 2026 and was selected for Cohort 16 at NIC Karachi in October 2026.",
    metrics: [
      "1st · UBL Hackathon 2026",
      "NIC Karachi · Cohort 16",
      "Co-founded in 2026",
    ],
  },
  {
    slug: "medlens",
    name: "MedLens AI",
    category: "Voice & vision · Applied AI",
    title: "A little clarity when it matters.",
    description:
      "A real-time voice and vision first-aid companion that can switch to Urdu in the middle of a conversation.",
    cover: "/images/work/medlens.svg",
    color: "#b5bbc9",
    year: "2026",
    role: "Engineer & builder",
    organization: "Built with Dr. Muhammad Khan",
    stack: ["Gemini Live", "Google Cloud Run", "Voice", "Vision"],
    challenge:
      "In first-aid scenarios, people need a conversational interface that can respond to what they say and show, while remaining understandable in their own language.",
    approach:
      "I built MedLens with Dr. Muhammad Khan using Gemini Live and Cloud Run. The experience combines real-time voice and vision and supports a mid-session switch to Urdu, including in scenarios such as a snake bite.",
    result:
      "The companion went from idea to a deployed product in approximately six days.",
    metrics: ["Built in ~6 days", "Live voice + vision", "English ↔ Urdu"],
  },
  {
    slug: "sanha",
    name: "SANHA Pakistan",
    category: "Full-stack · Web performance",
    title: "Less waiting. More trust.",
    description:
      "Certification verification and admin tools for a platform serving more than 50,000 people a month.",
    cover: "/images/work/sanha.svg",
    color: "#c9d0a7",
    year: "2025–2026",
    role: "Full-Stack Engineer",
    organization: "Bridgeframe",
    stack: ["React", "APIs", "JWT", "RBAC", "Web performance"],
    challenge:
      "SANHA Pakistan needed fast public pages, a certification verification system, and secure role-based tools for its administrators.",
    approach:
      "I built the verification system, JWT authentication, and role-based admin dashboards. I optimized the image pipeline, added lazy loading, and batched API calls to reduce the work required to load a page.",
    result:
      "Page load time dropped from 4.2 seconds to 2.3 seconds on a platform serving 50K+ monthly users.",
    metrics: [
      "50K+ monthly users",
      "4.2s → 2.3s load time",
      "Verification + RBAC",
    ],
    link: "https://www.sanha.org.pk/",
  },
  {
    slug: "alara",
    name: "Alara",
    category: "Conversational AI · RAG",
    title: "Conversations with context.",
    description:
      "Voice agents and knowledge retrieval built for real banking conversations.",
    cover: "/images/work/alara.svg",
    color: "#b9b1c9",
    year: "2025",
    role: "Full-Stack / AI Engineer",
    organization: "ISSM Labelling Solutions",
    stack: ["LiveKit", "Neo4j", "RAG", "Voice agents"],
    challenge:
      "A voice AI platform needed a stronger real-time foundation and better follow-up retrieval across connected knowledge.",
    approach:
      "I migrated the voice bot from n8n to LiveKit and restructured the Neo4j knowledge graph to improve the accuracy of RAG follow-up questions.",
    result: "Alara was deployed for Faysal Bank and Bank Alfalah.",
    metrics: [
      "LiveKit voice foundation",
      "Neo4j knowledge graph",
      "Deployed for two banks",
    ],
  },
  {
    slug: "oculacare",
    name: "OculaCare",
    category: "Healthtech · Mobile & ML",
    title: "A different way to see.",
    description:
      "An eye-care product developed with real ophthalmologists, connecting mobile, machine learning, and retrieval.",
    cover: "/images/work/oculacare.svg",
    color: "#b3cbc5",
    year: "2024–2025",
    role: "Software engineering · Final-year project",
    organization: "COMSATS University Islamabad",
    stack: ["Flutter", "CNN", "Neo4j", "RAG"],
    challenge:
      "Our final-year project explored how an eye-care application could connect an accessible mobile experience with useful machine-learning and knowledge-retrieval capabilities.",
    approach:
      "OculaCare brought together Flutter, convolutional neural networks, Neo4j, and RAG. We worked with real ophthalmologists rather than designing the product in isolation.",
    result:
      "OculaCare won first place at the COMSATS Industrial Expo 2024 and second place in the Securiti.ai National AI Security Challenge.",
    metrics: [
      "1st · COMSATS Expo 2024",
      "2nd · Securiti.ai Challenge",
      "Built with ophthalmologists",
    ],
  },
] as const;

export const experience = [
  {
    company: "Engro Enfrashare",
    date: "Aug 2026 — present",
    role: "Specialist NOC (L2) · RMS Project Lead",
    description:
      "Appointed RMS lead less than two months after joining. Built EnfraPulse in NestJS and React, the NOC Escalation Console, and helped shape operational automation requirements.",
  },
  {
    company: "Bridgeframe",
    date: "Sep 2025 — Aug 2026",
    role: "Full-Stack Engineer",
    description:
      "Shipped SANHA Pakistan’s certification and admin systems, Next.js architecture and SSR for RigZone LLC, and the Bridgeframe website.",
  },
  {
    company: "ISSM Labelling Solutions",
    date: "Jan 2025 — Sep 2025",
    role: "Full-Stack / AI Engineer",
    description:
      "Rebuilt Odin’s processing pipeline and worked on Alara’s voice and RAG infrastructure for production banking deployments.",
  },
  {
    company: "Ceven Technologies",
    date: "Jun 2024 — Dec 2024",
    role: "Full Stack Lead",
    description:
      "Led development on an AI-powered super app, wrote production code, and mentored junior engineers.",
  },
  {
    company: "OxyBlue",
    date: "Nov 2023 — Jun 2024",
    role: "Full-Stack Developer",
    description:
      "Built an offline-first water-delivery PWA that reduced order fulfillment from 25 minutes to 15 minutes.",
  },
];

export const achievements = [
  "1st place · UBL National Innovation Hackathon 2026 · Payssenger",
  "Selected for NIC Karachi, Cohort 16 · 2026",
  "Kaggle silver medal · March ML Mania 2026 · 23rd of 3,462 teams",
  "1st place · COMSATS Industrial Expo 2024 · OculaCare",
  "2nd place · Securiti.ai National AI Security Challenge · OculaCare",
  "RMS Project Lead at Engro Enfrashare within two months of joining",
  "Organizer · TEDxCUI",
  "Participant · Build What’s Next with PayPal and AI · October 2026",
];

export const skillGroups = [
  { name: "Languages", values: "TypeScript, JavaScript, Python, Dart" },
  {
    name: "Web & mobile",
    values:
      "React, Next.js, Tailwind CSS, shadcn/ui, Redux, Flutter, Bloc/Cubit, PWAs",
  },
  {
    name: "Backend & data",
    values:
      "Node.js, NestJS, Express, FastAPI, PostgreSQL, MongoDB, Redis, BullMQ, Neo4j, REST, JWT, RBAC",
  },
  {
    name: "AI & ML",
    values:
      "RAG, voice agents, multi-agent systems, Gemini Live, Google ADK, Vertex AI, LiveKit, LangChain, Mastra, n8n, MediaPipe, CNNs, scikit-learn, ONNX, vLLM",
  },
  {
    name: "Shipping",
    values:
      "Docker, Docker Compose, Google Cloud, Cloud Run, Vercel, CI/CD, Linux VPS, Git, GitHub",
  },
];

export const experiments = [
  ["QuotePilot", "B2B procurement RFQ agent · TinyFish hackathon"],
  ["Vantage", "App Store Optimization audit agent · Mastra"],
  ["DripScore", "AI outfit rater · Flutter & Node.js"],
  [
    "FIFA World Cup 2026 Predictor",
    "Dixon–Coles model, Monte Carlo simulation, Next.js ISR",
  ],
  [
    "Jutsu Hand-Seal Recognizer",
    "MediaPipe & Random Forest · 99.64% accuracy · five jutsu effects",
  ],
  [
    "Witch Hat Atelier Sigils",
    "An ongoing experiment in spell-sigil recognition",
  ],
  [
    "Marriage Hall Invoicing",
    "Local booking, invoicing, thermal receipts, and PRA integration work",
  ],
  [
    "Regulars",
    "Community around cafés and gyms · Flutter & Node.js · in progress",
  ],
  [
    "WildSnap",
    "Wildlife photography game · Flutter & iNaturalist CV API · collaborator",
  ],
  ["Collegium", "Dockerized Node.js backend on a Linux VPS"],
  ["Revamped", "My web design agency for Pakistani businesses and US clients"],
  [
    "AI Filmmaking",
    "A 42-shot production strategy adapting Walter de la Mare’s The Listeners",
  ],
];
