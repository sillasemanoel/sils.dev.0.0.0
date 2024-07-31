import { AboutStyle } from "./style";
import work from "../../../../public/images/photographys/work.png";
import emojiWork from "../../../../public/images/favicon.ico";
import developer from "../../../../public/images/about/developer.png";

type GreetProps = {
  title: string;
  caption: string;
  text: string;
};

export default function About(props: GreetProps) {
  return (
    <AboutStyle id="about">
      <div className="container">
        <div className="img">
          <img src={work} className="work" />
          <img src={emojiWork} className="emojiWork" />
          <span>
            <img src={developer} />
          </span>
        </div>
        <div className="text">
          <h3 title="About me">{props.title}</h3>
          <h4>{props.caption}</h4>
          <p>{props.text}</p>
        </div>
      </div>
    </AboutStyle>
  );
}
