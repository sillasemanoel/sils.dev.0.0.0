import styled from "styled-components";

export const ProjectsOnTheGridStyle = styled.div`
  padding: 19px;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1080px) {
    max-width: 420px;
    height: auto;
    flex-direction: column !important;
  }

  .img {
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 46%, 0.2);
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 1080px) {
    .img {
      height: 210px;
    }
  }

  .text {
    width: 100%;
    max-width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
  }

  .text h3 {
    color: #2d2e32;
    font-size: 17px;
    margin-bottom: 8px;
    position: relative;
    text-transform: uppercase;
  }

  .text p {
    color: #767676;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    text-transform: none;
    margin-bottom: 1rem;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    list-style: none;
  }

  .stack span {
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #000;
    font-family: "Mulish", sans-serif;
    font-weight: 800;
    padding: 2px 8px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 1rem;
  }

  .links a {
    display: flex;
    align-items: center;
    color: #2d2e32;
    font-size: 17px;
    font-weight: 500;
    gap: 6px;
    text-decoration: none; // Adiciona uma linha para garantir que não há sublinhado
  }

  .links a:hover {
    color: #615cfb;
  }

  .none {
    display: none;
  }
`;
