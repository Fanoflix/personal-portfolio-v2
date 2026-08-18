import { WorkByYear } from "./types";

export const WORK_DATA: WorkByYear = {
  "2026": [
    {
      project: {
        name: "Collateral Hub (Google drive style) — founders upload files, get them analyzed, and ship new versions",
        label: "majorContribution",
        tags: [
          { name: "Postgres" },
          { name: "PDF Rendering" },
          { name: "Document Analytics" },
        ],
        company: {
          companyName: "Metal",
        },
      },
      date: "August 13, 2026",
    },
    {
      project: {
        name: "Refactor to the Payments module with simplified architecture and fixes to long running bugs",
        label: "minorContribution",
        tags: [{ name: "Stripe" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "August 4, 2026",
    },
    {
      project: {
        name: "Fixed a billing loop that locked subscribed customers out of their billing portal",
        label: "minorContribution",
        tags: [{ name: "Stripe" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "July 29, 2026",
    },
    {
      project: {
        name: "Improved the Github workflow, made it dead simple and efficient",
        label: "minorContribution",
        tags: [{ name: "Github Actions" }, { name: "CI/CD" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "July 1, 2026",
    },
    {
      project: {
        name: "Generic plug-and-play 'Document Analytics' module that tracks visits, time per page, dropoff etc.",
        label: "majorContribution",
        tags: [
          { name: "Postgres" },
          { name: "Posthog" },
          { name: "Session Aggregation" },
        ],
        company: {
          companyName: "Metal",
        },
      },
      date: "June 22, 2026",
    },
    {
      project: {
        name: "'Mature Pricing' — a revamped pricing structure with an admin portal, Stripe + Calendly integrations, and a smooth sales experience",
        label: "majorContribution",
        tags: [{ name: "Postgres" }, { name: "Stripe" }, { name: "Calendly" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "May 19, 2026",
    },
    {
      project: {
        name: "'Cmd+K Search' driven by ElasticSearch for quick search across a huge dataset.",
        label: "majorContribution",
        tags: [{ name: "AI Search" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "March 13, 2026",
    },
    {
      project: {
        name: "Switched to Claude",
        label: "normal",
        tags: [{ name: "Claude Code" }],
        link: "https://claude.com/claude-code",
      },
      date: "February 3, 2026",
    },
    {
      project: {
        name: "DevX stuff — visibility on broken HMR via eslint-plugin-react-refresh",
        label: "minorContribution",
        tags: [{ name: "ESLint" }, { name: "HMR" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "February 2, 2026",
    },
    {
      project: {
        name: "Auth again, reworked the join org flow",
        label: "minorContribution",
        tags: [{ name: "Invitations" }, { name: "Magic Links" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "January 9, 2026",
    },
    {
      project: {
        name: "Thin layer that detects old browsers in a generic way, quite a fun minor project",
        label: "minorContribution",
        tags: [{ name: "Feature Detection" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "January 5, 2026",
    },
  ],
  "2025": [
    {
      project: {
        name: "Robust network-status detection via service-worker polling",
        label: "minorContribution",
        tags: [{ name: "Service Workers" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "December 16, 2025",
    },
    {
      project: {
        name: "A server state — client state thin sync layer for filters applied by AI",
        label: "minorContribution",
        tags: [{ name: "Zustand" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "October 22, 2025",
    },
    {
      project: {
        name: "CRM improvements — default columns and attribute editing UX",
        label: "minorContribution",
        tags: [{ name: "TanStack Table" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "October 8, 2025",
    },
    {
      project: {
        name: "AI chat (Richard) sharing",
        label: "majorContribution",
        tags: [{ name: "Guest Access" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "October 2, 2025",
    },
    {
      project: {
        name: "Signup flow iteration — optional steps, trial widget and settings modal",
        label: "minorContribution",
        tags: [{ name: "Framer Motion" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "September 26, 2025",
    },
    {
      project: {
        name: "Global Sidebar Navigation",
        label: "majorContribution",
        tags: [{ name: "Zustand" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "August 27, 2025",
    },
    {
      project: {
        name: "CRM Sharing, ABAC and a major rework of the Auth flow + Magic Links",
        label: "majorContribution",
        tags: [{ name: "ABAC" }, { name: "Magic Links" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "August 22, 2025",
    },
    {
      project: {
        name: "AI enablement — detailed Cursor rules for the codebase",
        label: "minorContribution",
        tags: [{ name: "Cursor" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "August 20, 2025",
    },
    {
      project: {
        name: "Educational questionnaire for React-Query",
        label: "minorContribution",
        tags: [{ name: "React-Query" }],
        company: {
          companyName: "Metal",
        },
        link: "/learn/react-query",
      },
      date: "July 25, 2025",
    },
    {
      project: {
        name: "Defined Onboarding process — Onboarding Videos",
        label: "minorContribution",
        tags: [{ name: "Davinci Resolve" }, { name: "OBS" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "June 25, 2025",
    },
    {
      project: {
        name: "Portfolio Website V2",
        label: "sideProject",
        tags: [{ name: "Framer Motion" }, { name: "AnimeJS" }],
        link: "https://github.com/Fanoflix/personal-portfolio-v2",
        company: {
          companyName: "Personal",
        },
      },
      date: "May 25, 2025",
    },
    {
      project: {
        name: "Rankings Engine for recommending Investors",
        label: "majorContribution",
        tags: [{ name: "Postgres" }, { name: "Redis" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "April 1, 2025",
    },
    {
      project: {
        name: "Script to detect duplicate DTO names in a NestJS Application",
        label: "minorContribution",
        tags: [
          { name: "TS Compiler API" },
          { name: "AST Parsing" },
          { name: "Swagger" },
        ],
        company: {
          companyName: "Metal",
        },
      },
      date: "March 1, 2025",
    },
    {
      project: {
        name: "Signup Flow revamp V3",
        label: "majorContribution",
        tags: [{ name: "Framer Motion" }],
        company: {
          companyName: "Metal",
        },
        link: "https://app.metal.so/signup",
      },
      date: "February 1, 2025",
    },
  ],
  "2024": [
    {
      project: {
        name: "Major Refactor to DataTable component (Take 2)",
        label: "minorContribution",
        tags: [{ name: "TanStack Table" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "December 1, 2024",
    },
    {
      project: {
        name: "Started using Cursor",
        label: "normal",
        tags: [{ name: "Cursor" }],
        link: "https://www.cursor.com/",
      },
      date: "March 1, 2024",
    },
    {
      project: {
        name: "Signup Flow revamp V1",
        label: "majorContribution",
        tags: [{ name: "Multi-step Forms" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "March 1, 2024",
    },
  ],
  "2023": [
    {
      project: {
        name: "Major Refactor to DataTable component (Take 1)",
        label: "minorContribution",
        tags: [{ name: "TanStack Table" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "December 1, 2023",
    },
    {
      project: {
        name: "Feature: Base CRM for Investors",
        label: "majorContribution",
        tags: [{ name: "TanStack Table" }],
        company: {
          companyName: "Metal",
        },
      },
      date: "October 1, 2023",
    },
    {
      project: {
        name: "Drag and drop on Canvas",
        label: "majorContribution",
        tags: [{ name: "InteractJS" }, { name: "Custom Framework for DnD" }],
        company: {
          companyName: "10Pearls",
        },
      },
      date: "March 1, 2023",
    },
  ],
  "2022": [
    {
      project: {
        name: "Analytics Dashboard for In-browser Live-Streaming Service",
        label: "majorContribution",
        tags: [
          { name: "Material" },
          { name: "NewRelic" },
          { name: "FingerprintJS" },
        ],
        company: {
          companyName: "10Pearls",
        },
        link: "https://zeacon.com/",
      },
      date: "November 1, 2022",
    },
    {
      project: {
        name: "Fatefy — Vue3 Public Template",
        label: "sideProject",
        tags: [{ name: "Vue3" }, { name: "Scss" }],
        link: "https://github.com/Fanoflix/fatefy",
      },
      date: "April 1, 2022",
    },
    {
      project: {
        name: "Portfolio Website V1",
        label: "sideProject",
        tags: [
          { name: "VueJS 3" },
          { name: "SCSS" },
          { name: "AnimeJS" },
          { name: "Google Apps Script" },
        ],
        link: "https://github.com/Fanoflix/personal-portfolio",
      },
      date: "August 1, 2022",
    },
    {
      project: {
        name: "Parking Assistant App — Final Year Project",
        label: "majorContribution",
        tags: [
          { name: "Ionic" },
          { name: "NodeJS" },
          { name: "MongoDB" },
          { name: "ExpressJS" },
        ],
        company: {
          companyName: "University",
        },
      },
      date: "October 1, 2022",
    },
  ],
};
