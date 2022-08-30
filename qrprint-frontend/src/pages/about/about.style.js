import styled from "styled-components";

export const AboutArea = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 14rem;
  @media (max-width: 992px) {
    margin-top: 10rem;
  }
`;
export const AboutInfo = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  @media (max-width: 575px) {
    text-align: center;
  }
`;
export const AboutImage = styled.div`
  img {
    width: 100%;
  }
`;
