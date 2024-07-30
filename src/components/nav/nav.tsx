import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { NavStyle, MobileNavStyle } from "./style";

type GreetProps = {
  home: string;
  about: string;
  projects: string;
  contact: string;
  onClickTranslate: () => void;
};

export default function Nav(props: GreetProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavStyle>
        <a href="#home">
          <h3>sils.dev</h3>
        </a>
        <ul>
          <li>
            <a href="#home">{props.home}</a>
          </li>
          <li>
            <a href="#about">{props.about}</a>
          </li>
          <li>
            <a href="#projects">{props.projects}</a>
          </li>
          <li>
            <a href="#contact">{props.contact}</a>
          </li>
          <li>
            <CgMenuRight
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </li>
        </ul>
      </NavStyle>
      <MobileNavStyle>
        <div className={`${toggle ? "open_menu" : "closed_menu"}`}>
          <CgClose
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {props.home}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {props.about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {props.projects}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {props.contact}
              </a>
            </li>
          </ul>
        </div>
      </MobileNavStyle>
    </>
  );
}
