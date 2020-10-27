import styled from "styled-components/macro";

export const Preview = styled.div`
  minheight: 500px;
  padding: 50px;
`;

export const Image = styled.img`
  width: 80%;
  border-radius: 50px;
  object-fit: contain;
  transition: 0.5s all;
  &:hover {
    opacity: 0.5;
  }
`;

export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  padding-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
  color: #18476e;
`;

export const Body = styled.p`
  font-family: "Poppins", sans-serif;
  padding-top: 20px;
  text-align: center;
  font-size: 18px;
`;
