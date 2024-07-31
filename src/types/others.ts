import devlinks from "../../public/images/projects/devlinks.png";
import touristSpot from "../../public/images/projects/local-turistico.png";
import recipePage from "../../public/images/projects/pagina-de-receita.png";

export type OtherProject = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "devlinks 🔗",
    description: "Devlinks app, made in Rocketseat Discover course.",
    codeLink: "https://github.com/sillasemanoel/devlinks",
    liveDemoLink: "#",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: devlinks,
  },
  {
    title: "tourist spot ✈️",
    description: "Tourist spot app, made in Rocketseat Full-Stack formation.",
    codeLink: "https://github.com/sillasemanoel/local-turistico",
    liveDemoLink: "#",
    technologies: ["HTML5", "CSS3"],
    image: touristSpot,
  },
  {
    title: "recipe page 🍴",
    description: "Recipe page app, made in Rocketseat Full-Stack format.",
    codeLink: "https://github.com/sillasemanoel/pagina-de-receita",
    liveDemoLink: "#",
    technologies: ["HTML5", "CSS3"],
    image: recipePage,
  },
];
