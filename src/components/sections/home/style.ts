import styled from "styled-components";

import photograp from "../../../../public/images/photographys/eu.png";

export const HomeStyle = styled.section`
  display: flex;
  justify-content: center;
  height: 800px;
  background-color: #f9f9f9;
  padding-top: 80px;
  box-sizing: border-box;

  @media (max-width: 920px) {
    height: auto;
    padding-bottom: 40px;
  }

  .container {
    max-width: 1000px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 20px;
    box-sizing: border-box;
  }

  .main {
    display: flex;
    gap: 5%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 920px) {
    .main {
      flex-direction: column-reverse;
      gap: 30px;
      height: auto;
    }
  }

  .main div {
    max-width: 470px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media (max-width: 920px) {
    .main div {
      text-align: center;
      align-items: center;
    }
  }

  .main div h1 {
    color: #2d2e32;
    font-size: 51px;
    line-height: 1.2;
    margin-bottom: 20px;
    margin-top: 24px;
  }

  @media (max-width: 620px) {
    .main div h1 {
      font-size: 40px !important;
    }
  }

  .marginBottomTranslate {
    margin-bottom: 20px;
  }

  .main div img {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 85px;
    right: 135px;
  }

  .pt_hand {
    right: -40px !important;
  }

  @media (max-width: 450px) {
    .pt_hand {
      display: none;
    }
  }

  @media (max-width: 620px) {
    .main div img {
      position: relative;
      width: 45px;
      height: 45px;
      top: -67px !important;
      left: 138px;
    }

    .pt_hand {
      left: 160px !important;
    }
  }

  @media (max-width: 920px) {
    .main div img {
      right: 30px;
    }

    .pt_hand {
      right: -50px !important;
    }
  }

  .main div p {
    color: #555;
    font-family: "Mulish", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.6;
  }

  .main div span {
    display: flex;
    align-items: center;
    width: 70px;
    cursor: pointer;
    gap: 14px;
    margin: 30px 0;
  }

  .main div span a {
    display: flex;
    align-items: center;
    color: #2d2e32;
    font-size: 28px;
  }

  .main div span a:hover {
    color: #615cfb;
  }

  .hero {
    background-image: url(${photograp});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid black;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    position: relative;
    transition: all 1s ease-in-out;
    min-width: 350px;
    min-height: 350px;
    animation: morph 8s ease-in-out infinite;
  }

  @media (max-width: 620px) {
    .hero {
      min-width: 300px;
      min-height: 300px;
    }
  }

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  @media (max-width: 620px) {
    .home-img {
      min-width: 260px !important;
      min-height: 260px !important;
    }
  }

  .skills {
    margin-top: 40px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #767676;
    margin-top: 80px;
    text-align: center;
  }

  .skills p {
    font-family: "Mulish", sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #2d2e32;
    margin-bottom: 29px;
    margin-right: 0 !important;
    padding-bottom: 10px;
    padding-right: 0;
    border-right: 0 !important;
    border-bottom: 2px solid rgba(45, 46, 50, 0.5);
  }

  @media (max-width: 1180px) {
    .skills p {
    }
  }

  .skills div {
    display: flex;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
  }

  .skills div ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    list-style: none;
  }

  .skills div ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    width: 65px;
    height: 65px;
    cursor: pointer;
  }

  .skills div ul li img {
    max-height: 35px;
    max-width: 35px;
  }
`;
