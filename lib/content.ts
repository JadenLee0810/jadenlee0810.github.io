/**
 * All portfolio content in one place, sourced from the resume. Section pages
 * render these entries as Google-style search results via <ResultCard />.
 */

export type ResultEntry = {
  id: string;
  /** Site name in the breadcrumb row, e.g. "Legali AI". */
  source: string;
  /** Fake URL path under the source, e.g. "https://legali.ai › team". */
  breadcrumb: string;
  /** Blue link line. */
  title: string;
  /** External destination; omit to render a non-navigating title. */
  href?: string;
  /** Muted prefix inside the snippet, e.g. "May 2026 – Present · SF, CA —". */
  meta?: string;
  snippet: string;
  bullets?: string[];
  /** Tech-stack chips, rendered like "People also search for" pills. */
  chips?: string[];
  /** Small sitelinks under the snippet, e.g. a GitHub repo. */
  links?: { label: string; href: string }[];
  /** Single letter shown in the favicon circle; defaults to source[0]. */
  favicon?: string;
  /** Brand mark drawn in a white Google-style favicon circle. */
  icon?: 'github' | 'linkedin' | 'gmail' | 'pdf' | 'instagram';
  /** Path to an image (under /public) used as the favicon instead of a letter. */
  iconSrc?: string;
  /** Official preview image shown under the title (e.g. a site's social card). */
  image?: { src: string; alt: string };
  /** Favicon circle background (Tailwind classes). */
  faviconClass?: string;
};

export const profile = {
  name: 'Jaden J. Lee',
  email: 'jadenlee0810@gmail.com',
  location: 'Berkeley, California',
  linkedin: 'https://www.linkedin.com/in/jadenl027/',
  github: 'https://github.com/JadenLee0810',
  instagram: 'https://www.instagram.com/jaden_l_e_e/',
  resumePdf: '/resume.pdf',
} as const;

export const education: ResultEntry[] = [
  {
    id: 'cdss',
    source: 'Berkeley CDSS',
    breadcrumb: 'https://cdss.berkeley.edu › about',
    title: 'College of Computing, Data Science and Society',
    href: 'https://cdss.berkeley.edu',
    meta: 'Expected May 2028 · Berkeley, CA —',
    snippet: 'B.A. Statistics (Computer Science Concentration).',
    chips: ['Statistics', 'Computer Science'],
    iconSrc: '/cdss-icon.ico',
  },
  {
    id: 'ls',
    source: 'Berkeley L&S',
    breadcrumb: 'https://ls.berkeley.edu',
    title: 'College of Letters & Science — UC Berkeley',
    href: 'https://ls.berkeley.edu',
    meta: 'Expected May 2028 · Berkeley, CA —',
    snippet: 'B.A. Applied Mathematics (Economics Concentration).',
    chips: ['Applied Mathematics', 'Economics'],
    iconSrc: '/ls-icon.ico',
  },
  {
    id: 'crean',
    source: 'Crean Lutheran High School',
    breadcrumb: 'https://www.creanlutheran.org',
    title: 'Crean Lutheran High School',
    href: 'https://www.creanlutheran.org',
    snippet: 'High school in Irvine, California.',
    iconSrc: '/crean-icon.ico',
  },
];

export const experience: ResultEntry[] = [
  {
    id: 'legali',
    source: 'Legali AI',
    breadcrumb: 'https://legali.ai › team › jaden-lee',
    title: 'Data Engineering Intern — Legali AI (StartX F26, SkyDeck Pad-13)',
    href: 'https://legali.ai',
    meta: 'May 2026 – Present · San Francisco, CA —',
    snippet:
      'Building the trust-and-safety and AI infrastructure behind an AI-native legal platform.',
    bullets: [
      'Built and shipped an Attorney Verification Service and Lawyer Marketplace (Node/Express, Postgres) with state-bar license checks, email identity verification, MFA enforcement, and rate-limited anti-fraud guards gating listing activation.',
      'Engineered LLM-powered document processors with LangChain, pgvector semantic retrieval, and AWS Bedrock to automate contract review workflows.',
      'Built a real-time WebSocket Messaging Service with AES-256-GCM encryption and consent-token attachments.',
    ],
    chips: ['Node/Express', 'Postgres', 'LangChain', 'pgvector', 'AWS Bedrock', 'WebSockets'],
    iconSrc: '/legali-icon.png',
  },
  {
    id: 'lyrn',
    source: 'Lyrn AI',
    breadcrumb: 'https://lyrnmusic.com',
    title: 'Founder — Lyrn AI (NVIDIA Inception)',
    href: 'https://lyrnmusic.com/',
    meta: 'April 2026 – Present · Berkeley, CA —',
    snippet:
      'An AI-native platform that democratizes music education through an accessible virtual learning environment.',
    bullets: [
      'Created an AI-native platform using audio artificial-intelligence agent research to replace legacy dynamic time-warp methods.',
      'Orchestrated comprehensive market strategies and crafted high-signal venture collateral to pipeline the startup to access capital, building a team of 5+ through early talent recruitment.',
      'Drove early product adoption by interviewing 10+ music professionals, securing an upcoming pilot program with 50+ students and validating a 28% reduction in teacher workflow time.',
    ],
    chips: ['Audio AI', 'EdTech', 'NVIDIA Inception', 'Founder'],
    iconSrc: '/lyrn-icon.png',
  },
  {
    id: 'nasa',
    source: 'NASA SEES',
    breadcrumb: 'https://www.nasa.gov › sees › interns',
    title: 'Research Intern — NASA STEM Enhancement in Earth Science',
    href: 'https://www.csr.utexas.edu/education-outreach/high-school-internships/sees/',
    meta: 'May 2024 – August 2024 · Remote —',
    snippet:
      'Solar-energy research with the NASA Center for Space Research at UT Austin.',
    bullets: [
      'Analyzed solar energy generation across 60+ months and 50+ dimensions of Electric Reliability Council of Texas data to compare solar and non-solar generation during major solar events.',
      'Completed a course sequence on global climate and space guided by the NASA Center for Space Research at UT Austin (NASA CSR).',
      'Presented at the NASA SEES Science Symposium 2024.',
    ],
    chips: ['Data Analysis', 'ERCOT', 'Earth Science'],
    faviconClass: 'bg-[#0B3D91] text-white',
  },
];

export const projects: ResultEntry[] = [
  {
    id: 'safepics',
    source: 'SafePics',
    breadcrumb: 'https://safepics.us',
    title: 'SafePic: Edit your photos. Keep them yours.',
    href: 'https://safepics.us/',
    meta: 'April 2026 – May 2026 —',
    snippet:
      'Free, private image editor that runs entirely in your browser. Remove backgrounds with on-device AI, redact sensitive info, compress, and encrypt photos with quantum-resistant encryption. No uploads, no account.',
    iconSrc: '/safepics-icon.svg',
    image: { src: '/safepics-og.png', alt: 'SafePic: private, in-browser image editor' },
    bullets: [
      'ONNX-powered edge AI for on-device background removal — no cloud uploads or external API calls.',
      'ML-KEM-768 / CRYSTALS-Kyber encryption via the Web Crypto API, with a selectable lossy/lossless export system with custom export size and format.',
    ],
    chips: ['ONNX Runtime', 'Web Crypto API', 'ML-KEM-768', 'Edge AI'],
    links: [{ label: 'GitHub repo', href: 'https://github.com/JadenLee0810/safepic' }],
    faviconClass: 'bg-google-green text-white',
  },
  {
    id: 'vigil',
    source: 'Vigil AI',
    breadcrumb: 'https://vigil.ai › product',
    title: 'Vigil AI — Real-Time Patient Monitoring OS for Nurses',
    meta: 'December 2025 – April 2026 —',
    snippet:
      'An operating system for nurses performing real-time analysis for patient monitoring, prediction, and patient workflow.',
    bullets: [
      'Integrates security cameras and vitals monitors such as Apple Watches and continuous glucose monitors.',
      'Designed an edge-AI infrastructure for cybersecurity and patient privacy that only offloads crucial data — with patients defining what "crucial data" means via an onboarding quiz.',
      'Presented for the UC Berkeley SkyDeck Accelerator under the ENGIN 198: Introduction to Startups DeCal.',
    ],
    chips: ['Edge AI', 'Healthcare', 'Privacy', 'SkyDeck'],
    faviconClass: 'bg-google-red text-white',
  },
  {
    id: 'bewear',
    source: 'BeWear',
    breadcrumb: 'https://bewear.app › about',
    title: 'BeWear — Explainable Sustainability Scores for Fashion Brands',
    meta: 'October 2025 —',
    snippet:
      'An AI-powered ethical fashion platform that identifies clothing brands from images and generates explainable sustainability scores across labor, sourcing, environmental impact, and transparency.',
    bullets: [
      'Helped engineer an Elasticsearch database of 6,000+ brands with fuzzy matching and typo tolerance; integrated Google Lens via SerpAPI and Claude for visual brand identification and extraction.',
      'Developed a LangGraph-based greenwashing investigation agent with Tavily web search and real-time SSE streaming.',
    ],
    chips: ['Elasticsearch', 'LangGraph', 'Claude', 'SerpAPI', 'Tavily'],
    faviconClass: 'bg-google-yellow text-[#202124]',
  },
];

export const socials: ResultEntry[] = [
  {
    id: 'linkedin',
    source: 'LinkedIn',
    breadcrumb: 'https://www.linkedin.com › in › jadenl027',
    title: 'Jaden Lee | LinkedIn',
    href: profile.linkedin,
    snippet:
      'Statistics & Applied Mathematics at UC Berkeley · Data Engineering Intern at Legali AI · Founder of Lyrn AI. Connect with me here.',
    icon: 'linkedin',
  },
  {
    id: 'lyrn-site',
    source: 'Lyrn',
    breadcrumb: 'https://lyrnmusic.com',
    title: 'Lyrn',
    href: 'https://lyrnmusic.com/',
    snippet:
      'The AI-powered system for modern music education. Built for teachers, engineered for students.',
    iconSrc: '/lyrn-icon.png',
  },
  {
    id: 'safepics-site',
    source: 'SafePics',
    breadcrumb: 'https://safepics.us',
    title: 'SafePic: Edit your photos. Keep them yours.',
    href: 'https://safepics.us/',
    snippet:
      'Free, private image editor that runs entirely in your browser. Remove backgrounds with on-device AI, redact sensitive info, compress, and encrypt photos with quantum-resistant encryption. No uploads, no account.',
    iconSrc: '/safepics-icon.svg',
  },
  {
    id: 'github',
    source: 'GitHub',
    breadcrumb: 'https://github.com › JadenLee0810',
    title: 'JadenLee0810 (Jaden Lee) · GitHub',
    href: profile.github,
    snippet:
      'Repositories including SafePics (post-quantum image editing), a multiplayer card game, and quant experiments.',
    icon: 'github',
  },
  {
    id: 'email',
    source: 'Gmail',
    breadcrumb: 'mailto: jadenlee0810@gmail.com',
    title: 'Email — jadenlee0810@gmail.com',
    href: `mailto:${profile.email}`,
    snippet: 'The fastest way to reach me for internships, projects, or anything else.',
    icon: 'gmail',
  },
  {
    id: 'legali-site',
    source: 'legali.ai',
    breadcrumb: 'https://legali.ai',
    title: 'legal literacy platform for women and survivors | Legali',
    href: 'https://legali.ai',
    snippet:
      'In 200 languages, Lea is a trauma-informed AI companion designed for people navigating unsafe or abusive situations. Tell your story, document what happened ...',
    iconSrc: '/legali-icon.png',
  },
];

export const skills = [
  { label: 'Programming Languages', items: ['Python', 'TypeScript', 'CUDA', 'SQL', 'MATLAB', 'Java'] },
  { label: 'ML Infrastructure & AI', items: ['PyTorch', 'ONNX Runtime', 'LangChain', 'AWS Bedrock', 'NumPy'] },
  {
    label: 'Backend, Web & Databases',
    items: ['PostgreSQL', 'pgvector', 'Node.js', 'Express', 'SQLite', 'React', 'Tailwind CSS', 'Git'],
  },
] as const;
