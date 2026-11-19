/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Varun Kumar Kambhampati', // shown in navbar, footer, hero, about
  pageTitle: 'Varun Kumar Kambhampati – Agentic AI Developer', // browser tab title
  role: 'Agentic AI Developer', // footer subtitle
  email: 'kvvarun2022@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '15125470214',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'AGENTIC AI • RAG • PRODUCTION LLM SYSTEMS',
  headline: 'VARUN KUMAR KAMBHAMPATI', // big text, use CAPS
  roles: ['AGENTIC AI DEVELOPER', 'AI & ML ENGINEER'] as [string, string],
  tagline: 'I build agentic AI and RAG systems that move from prototype to secure, reliable production.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Varun Kumar Kambhampati',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'I BUILD AI AGENTS THAT THINK, RETRIEVE, AND SHIP TO PRODUCTION.',
  redWords: ['AGENTS', 'PRODUCTION'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Agentic AI · RAG · MLOps',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of Varun Kumar Kambhampati',
  portraitCaption: 'Agentic AI Developer', // small red text under the name on the photo
  paragraphs: [
    'I am an AI and ML engineer with 5+ years of experience building production LLM systems, RAG pipelines, and agentic workflows. I design multi-agent systems with LangGraph, LangChain, and MCP that automate knowledge discovery and decision support.',
    'I care about AI that holds up after the demo: measured quality, secure access, and clean deployments. I take projects from prototype to cloud-deployed products on AWS, Docker, and Kubernetes.',
  ],
  technologies: ['LangGraph', 'LangChain', 'MCP', 'RAG', 'FastAPI', 'AWS'],
  focus: ['Agentic AI & Multi-Agent Systems', 'RAG & LLM Applications', 'MLOps & Production AI'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/varunkumar572' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/varun-kumar-kambhampati' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'LangGraph / LangChain', category: 'Agents · Orchestration', level: 'Advanced' },
  { name: 'RAG Pipelines', category: 'FAISS · Pinecone · Hybrid Search · Reranking', level: 'Advanced' },
  { name: 'Python / FastAPI', category: 'REST APIs · Backend Services', level: 'Advanced' },
  { name: 'MCP & Tool Calling', category: 'Model Context Protocol · Agent Tools', level: 'Advanced' },
  { name: 'MLOps', category: 'MLflow · GitHub Actions · Docker · Kubernetes', level: 'Proficient' },
  { name: 'AWS', category: 'Bedrock · SageMaker', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Python',
  'LangChain',
  'LangGraph',
  'LlamaIndex',
  'Claude Code',
  'MCP',
  'PyTorch',
  'TensorFlow',
  'Hugging Face',
  'FastAPI',
  'FAISS',
  'Pinecone',
  'Neo4j',
  'AWS',
  'Docker',
  'Kubernetes',
  'Databricks',
  'Snowflake',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'enterprise-rag-assistant',
    kind: 'software',
    title: 'Enterprise RAG Assistant',
    subtitle: 'Grounded Q&A over company knowledge',
    category: 'RAG & LLM Applications',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'A retrieval-augmented assistant that answers questions from internal documents with sources attached. I built the retrieval layer and tuned it to raise answer relevance and cut hallucinations.',
    tags: ['LLaMA 3', 'LangChain', 'FAISS', 'Pinecone'],
    // liveUrl: 'https://example.com',
    // repoUrl: 'https://github.com/varunkumar572/enterprise-rag-assistant',
  },
  {
    id: 'agentic-knowledge-discovery',
    kind: 'software',
    title: 'Agentic Knowledge Discovery',
    subtitle: 'Multi-agent decision-support workflow',
    category: 'Agentic AI',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'A multi-agent system where specialised agents search, reason, and call tools to support decisions. I designed the orchestration with LangGraph and connected the tools through MCP.',
    tags: ['LangGraph', 'MCP', 'Tool Calling'],
  },
  {
    id: 'llm-evaluation-framework',
    kind: 'software',
    title: 'LLM Evaluation Framework',
    subtitle: 'Automated quality gates for LLM apps',
    category: 'RAG & LLM Applications',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'An evaluation harness that scores LLM outputs for relevance, groundedness, and safety. It combines LLM-as-a-Judge, golden datasets, and regression suites so releases only ship when quality holds.',
    tags: ['LLM-as-a-Judge', 'Golden Datasets', 'Regression Suites'],
  },
  {
    id: 'knowledge-graph-rag',
    kind: 'software',
    title: 'Knowledge Graph RAG',
    subtitle: 'Multi-hop retrieval over entity relationships',
    category: 'Agentic AI',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'A hybrid retrieval system that combines embeddings with a Neo4j knowledge graph to answer questions that span several documents. It improves context and handles multi-hop queries that plain vector search misses.',
    tags: ['Neo4j', 'Embeddings', 'Hybrid Search'],
  },
  {
    id: 'fraud-anomaly-detection',
    kind: 'software',
    title: 'Fraud & Anomaly Detection',
    subtitle: 'Real-time detection on transaction data',
    category: 'MLOps & Production AI',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'An anomaly detection service built on Isolation Forest and Autoencoders to flag suspicious transactions. I packaged it with Docker and Kubernetes and tuned it to reduce false positives.',
    tags: ['Isolation Forest', 'Autoencoders', 'Docker', 'Kubernetes'],
  },
  {
    id: 'ml-deployment-pipeline',
    kind: 'software',
    title: 'ML Deployment Pipeline',
    subtitle: 'Safe, zero-downtime model releases',
    category: 'MLOps & Production AI',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'An automated pipeline that trains, validates, and releases models using shadow testing and canary deployments. It shortens release cycles while keeping production stable.',
    tags: ['GitHub Actions', 'MLflow', 'Airflow'],
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'RAG Chatbot / Knowledge Assistant Build', priceLabel: 'Starts from', price: '$1,500', featured: true },
  { id: 'service-2', title: 'Agentic AI Workflow & Automation', priceLabel: 'Starts from', price: '$2,000', featured: false },
  { id: 'service-3', title: 'LLM Evaluation & Guardrails Setup', priceLabel: 'Starts from', price: '$1,000', featured: false },
  { id: 'service-4', title: 'MLOps & Cloud Deployment (AWS, Docker, Kubernetes)', priceLabel: 'Starts from', price: '$1,500', featured: false },
  { id: 'service-5', title: 'AI Consulting (Hourly)', priceLabel: 'From – to', price: '$60 – $100/hr', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 6, suffix: '', label: 'Projects Built' },
  { id: 'stat-2', value: 18, suffix: '', label: 'Technologies' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Services' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;