import { BsGithub } from "react-icons/bs";
import { FooterStyle } from "./style";

type GreetProps = {
  rights: string;
};

export default function Footer(props: GreetProps) {
  return (
    <FooterStyle>
      <div className="limit">
        <h3>{props.rights}</h3>
        <div className="socials">
          <a
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sillasemanoel/sils.dev.0.0.0"
          >
            <BsGithub fontSize="22px" />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}
