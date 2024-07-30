import Nav from "./components/nav/nav";
import Home from "./components/sections/home/home";
import About from "./components/sections/about/about";
import Project from "./components/sections/projects/projects";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <Nav
        home="Home"
        about="About"
        projects="Projects"
        contact="Contact"
        onClickTranslate={() => {
          // Você pode remover a funcionalidade de tradução se não for mais necessária.
        }}
      />
      <Home
        classTitle=""
        title="Full Stack Next.js Developer"
        hand=""
        description="Hello, I'm Sillas Emanoel. A Full Stack Next.js Developer based in Ereré, Ceará, Brazil.📍"
        stack="Tech Stack"
      />
      <About
        title="About me"
        caption="A dedicated Full Stack Developer based in Ereré, Ceará, Brazil 📍"
        text="As a Full Stack Developer, I possess an impressive arsenal of skills that allow me to design and implement complete solutions, both on the front-end and back-end. I excel at creating dynamic and engaging interfaces, as well as building robust and scalable systems, always using clean and optimized code. Despite utilizing a wide range of technologies, I have a primary focus on Next.js, the system I use most in my projects. Additionally, I am a team player who thrives on collaborating with cross-functional teams to produce excellent web applications."
      />
      <Project
        title="PORTFOLIO"
        description="Each project is a unique piece of development 🧩"
      />
      <Contact
        title="Contact"
        caption="Don't be shy! Hit me up! 👇"
        locationTitle="Location"
        locationText="Ereré, Ceará, Brazil"
        mailTitle="Mail"
        curriculumTitle="Curriculum"
        curriculumDownload="Download 🫶"
      />
      <Footer rights="Copyright © 2023. All rights are reserved" />
    </>
  );
}
