import zeDelivery from "../../public/images/projects/ze-delivery.png";
import ergueiMaos from "../../public/images/projects/erguei-maos.png";

export type practicalTestsProject = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

export const practicalTestsProjects: practicalTestsProject[] = [
  {
    title: "ze delivery",
    description:
      "Practical test with two questions, one was about raising a card and keeping the others down, the other a unit counter.",
    codeLink: "https://github.com/sillasemanoel/ze-delivery",
    liveDemoLink: "#",
    technologies: ["React"],
    image: zeDelivery,
  },
  {
    title: "acelera zg",
    description:
      "Practical test where the aim was to create a function that would generate an entire song or a part without having to write it.",
    codeLink: "https://github.com/sillasemanoel/acelera-zg",
    liveDemoLink: "#",
    technologies: ["JavaScript"],
    image: ergueiMaos,
  },
];
