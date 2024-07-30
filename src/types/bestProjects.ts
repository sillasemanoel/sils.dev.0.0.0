import silsaas from "../../public/images/projects/silsaas.png";
import supportwise from "../../public/images/projects/supportwise.png";
import taskify from "../../public/images/projects/taskify.png";

export type BestProject = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

export const bestProjects: BestProject[] = [
  {
    title: "sil-saas/ ✏️ (concluding)",
    description:
      "Sil-saas/ is a comprehensive Full Stack micro SaaS application built with Next.js, offering authentication, task management, and payment checkout. A robust, practical, and user-friendly platform.",
    codeLink: "https://github.com/sillasemanoel/sil-saas",
    liveDemoLink: "#",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Prisma",
      "Stripe",
    ],
    image: silsaas,
  },
  {
    title: "Supportwise ⚡",
    description:
      "An authentication application that allows user registration and login, storing the data locally using LocalStorage.",
    codeLink: "https://github.com/sillasemanoel/supportwise",
    liveDemoLink: "https://supportwise.vercel.app/",
    technologies: ["TypeScript", "React", "styled-components", "localStorage"],
    image: supportwise,
  },
  {
    title: "Taskify 📝",
    description:
      "An application for managing notes, allowing you to create, edit and delete notes, with data stored locally using LocalStorage.",
    codeLink: "https://github.com/sillasemanoel/taskify",
    liveDemoLink: "https://taskify-psi.vercel.app/",
    technologies: ["TypeScript", "React", "styled-components", "localStorage"],
    image: taskify,
  },
];
