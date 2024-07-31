import { useState } from "react";
import { ProjectStyle } from "./style";
import { practicalTestsProjects } from "../../../types/practicalTests";
import { bestProjects } from "../../../types/bestProjects";
import { otherProjects } from "../../../types/others";
import CategoryFilter from "../../@minorComponents/filter/filter";
import ProjectsOnTheGrid from "../../@minorComponents/grid/grid";
import LoadMoreButton from "../../@minorComponents/load-more/load-more";

type Category = "all" | "bestProjects" | "practicalTests" | "others";

type Project = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

const categoryContent: Record<Category, Project[]> = {
  all: [...bestProjects, ...practicalTestsProjects, ...otherProjects],
  bestProjects: bestProjects,
  practicalTests: practicalTestsProjects,
  others: otherProjects,
};

export default function Project(props: { title: string; description: string }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [visibleProjects, setVisibleProjects] = useState<number>(3);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setVisibleProjects(3);
  };

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const projectsToDisplay = categoryContent[selectedCategory].slice(
    0,
    visibleProjects
  );

  const hasMoreProjects =
    categoryContent[selectedCategory].length > visibleProjects;

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
          {projectsToDisplay.map((project, index) => (
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
        <LoadMoreButton onLoadMore={handleLoadMore} hasMore={hasMoreProjects} />
      </div>
    </ProjectStyle>
  );
}
