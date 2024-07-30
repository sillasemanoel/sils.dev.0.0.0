import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { ProjectsOnTheGridStyle } from "./style";

type GreetProps = {
  photo: string;
  projectsOnTheGridTitle: string;
  projectsOnTheGridText: string;
  stack: string[];
  code?: string;
  liveDemo?: string;
};

export default function ProjectsOnTheGrid(props: GreetProps) {
  return (
    <ProjectsOnTheGridStyle>
      <a
        style={{ backgroundImage: `url(${props.photo})` }}
        target="_blank"
        href={props.liveDemo || "#"}
        rel="noreferrer"
        className="img"
      ></a>
      <div className="text">
        <div>
          <h3>{props.projectsOnTheGridTitle}</h3>
          <p>{props.projectsOnTheGridText}</p>
        </div>
        <div className="stack">
          {props.stack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="links">
          {props.code && (
            <a target="_blank" href={props.code} rel="noreferrer">
              Code
              <BsGithub fontSize="22px" />
            </a>
          )}
          {props.liveDemo && props.liveDemo !== "#" && (
            <a target="_blank" href={props.liveDemo} rel="noreferrer">
              Live Demo
              <MdOpenInNew fontSize="22px" />
            </a>
          )}
        </div>
      </div>
    </ProjectsOnTheGridStyle>
  );
}
