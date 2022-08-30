import styled from "styled-components";

// Home-Section
export const HomeSection = styled.div`
  .container {
    position: relative;
  }
  img {
    width: 100%;
    height: 630px;
  }
  .share {
    position: absolute;
    top: 315px;
    right: 5.5rem;
    padding: 2rem;
    width: 100%;
    max-width: 520px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: -9px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    h1 {
      color: var(--DarkColor);
    }
    p {
      margin: 2.5rem 0;
      line-height: 29px;
      color: var(--DarkColor);
    }
  }
  @media (max-width: 575px) {
    & {
      img {
        height: 320px;
      }
      .share {
        top: 180px;
        right: 2rem;
        max-width: 320px;
        padding: 1rem;
        h1 {
          font-size: 1.25rem;
        }
        p {
          font-size: 0.9rem;
          margin: 1.5rem 0;
        }
      }
    }
  }
`;
// Work-Section
export const WorkArea = styled.div`
  text-align: center;
  margin: 15rem 0;
  padding: 0 2rem;
`;
export const WorkHeading = styled.h1`
  color: var(--DarkColor);
  font-weight: 400;
  display: inline-block;
  position: relative;
  margin: 1rem 0 5rem;
`;
export const Card = styled.div`
  .cardImage {
    width: 80px;
    height: 70px;
    padding: 1rem 1.25rem;
    background-color: var(--MainColor);
    border-radius: 0.625rem;
    margin: 0 auto;
  }
  h5 {
    margin: 1.5rem 0 1rem;
  }
  @media (max-width: 992px) {
    margin: 1rem 0;
  }
`;
// Dynamic Cards
export const DynamicCard = styled.div`
  img {
    width: 100%;
  }
  h4 {
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .ant-col-md-12 {
    margin: auto;
    text-align: center;
  }
`;
// Scan-Design Section
export const ScanDesign = styled.div`
  margin: 10rem 0 12rem;
  text-align: center;
  p {
    font-size: 1.5rem;
    width: 100%;
    max-width: 508px;
    margin: 0 auto;
    @media (max-width: 575px) {
      font-size: 1rem;
    }
  }
  a {
    margin: 3rem 0;
  }
`;
export const ScanImage = styled.div`
  margin: 3rem auto 0;
  width: 100%;
  max-width: 700px;
  height: 700px;
  @media (max-width: 575px) {
    max-width: 350px;
    height: 350px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
// Quantity Section
export const QuantitySection = styled.div`
  a,
  p {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    color: var(--DarkColor) !important;
    @media (max-width: 575px) {
      font-size: 0.8rem;
    }
  }
`;
// Delivers-Section
export const DeliversSection = styled.div`
  text-align: center;
  padding: 14rem 0 7rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  h2 {
    width: 100%;
    max-width: 505px;
    font-weight: 400;
    line-height: 30px;
    color: var(--DarkColor);
    margin-right: 5rem;
    @media (max-width: 575px) {
      font-size: 0.8rem;
      line-height: unset;
    }
  }
  img {
    width: 100px;
  }
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;
// Generate-Button
export const GenerateBtn = styled.a`
  width: 232px;
  height: 45px;
  background-color: var(--MainColor);
  color: var(--LightColor) !important;
  border-radius: 3.125rem;
  display: inline-block;
  text-align: center;
  line-height: 3;
  text-decoration: none;
  @media (max-width: 768px) {
    height: 40px;
    font-size: 0.9rem;
  }
`;
