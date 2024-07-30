import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HomeStyle } from "./style";
import hand from "../../../../public/images/emojis/emojiHi.png";

type GreetProps = {
  classTitle: string;
  title: string;
  hand: string;
  description: string;
  stack: string;
};

export default function Home(props: GreetProps) {
  return (
    <HomeStyle id="home">
      <div className="container">
        <div className="main">
          <div>
            <h1 className={props.classTitle}>{props.title}</h1>
            <img src={hand} className={props.hand} />
            <p>{props.description}</p>
            <span>
              <a
                title="Linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/sillas-emanoel-656478218/"
              >
                <BsLinkedin />
              </a>
              <a
                title="GitHub"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sillasemanoel"
              >
                <BsGithub />
              </a>
            </span>
          </div>
          <div className="hero"></div>
        </div>
        <div className="skills">
          <p>{props.stack}</p>
          <div>
            <ul>
              <li title="Git">
                <img
                  src="https://www.svgrepo.com/show/452210/git.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="GitHub">
                <img
                  src="https://www.svgrepo.com/show/452211/github.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="HTML5">
                <img
                  src="https://www.svgrepo.com/show/452228/html-5.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="CSS3">
                <img
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="JavaScript">
                <img
                  src="https://www.svgrepo.com/show/349419/javascript.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="TypeScript">
                <img
                  src="https://www.svgrepo.com/show/349540/typescript.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Vite">
                <img
                  src="https://www.svgrepo.com/show/374167/vite.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="React">
                <img
                  src="https://www.svgrepo.com/show/374032/reactjs.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Node.js">
                <img
                  src="https://www.svgrepo.com/show/452075/node-js.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Next.js">
                <img
                  src="https://www.svgrepo.com/show/306466/next-dot-js.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="NestJS">
                <img
                  src="https://www.svgrepo.com/show/373872/nestjs.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Tailwind CSS">
                <img
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="styled-components">
                <img
                  src="https://img.icons8.com/?size=512&id=ttxR7mXaDvqS&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="SASS">
                <img
                  src="https://www.svgrepo.com/show/374067/scss2.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="shadcn/ui">
                <img
                  src="https://bestofjs.org/logos/shadcnui.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Prisma">
                <img
                  src="https://www.svgrepo.com/show/373776/light-prisma.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Stripe">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png"
                  alt="skill-icon"
                />
              </li>
              <li title="Jest">
                <img
                  src="https://www.svgrepo.com/show/373701/jest-snapshot.svg"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}
