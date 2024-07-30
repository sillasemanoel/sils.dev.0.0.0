import { useState } from "react";
import { ProjectStyle } from "./style";
import { myCompaniesProjects } from "../../../types/myCompanies";
import { bestProjects } from "../../../types/bestProjects";
import { otherProjects } from "../../../types/others";
import CategoryFilter from "../../@minorComponents/filter/filter";
import ProjectsOnTheGrid from "../../@minorComponents/grid/grid";

type Category = "all" | "myCompanies" | "bestProjects" | "others";

type Project = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

const categoryContent: Record<Category, Project[]> = {
  all: [...myCompaniesProjects, ...bestProjects, ...otherProjects],
  myCompanies: myCompaniesProjects,
  bestProjects: bestProjects,
  others: otherProjects,
};

export default function Project(props: { title: string; description: string }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <ProjectStyle id="projects">
      <div className="container">
        <p title="Portfolio" className="title">
          {props.title}
        </p>
        <h3 className="description">{props.description}</h3>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="grid">
          {categoryContent[selectedCategory].map((project, index) => (
            <ProjectsOnTheGrid
              key={index}
              photo={project.image}
              projectsOnTheGridTitle={project.title}
              projectsOnTheGridText={project.description}
              stack={project.technologies}
              code={project.codeLink}
              liveDemo={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </ProjectStyle>
  );
}
