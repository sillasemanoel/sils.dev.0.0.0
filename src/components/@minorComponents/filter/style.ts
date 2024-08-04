import styled from "styled-components";

export const CategoryFilterStyle = styled.section`
  margin-bottom: 20px;
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;

  p {
    font-size: 17px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }

  p.active {
    color: #615cfb;
  }

  p:hover {
    color: #615cfb;
  }
`;
