import styled from "styled-components";

export const FooterArea = styled.div`
  .mainFooter {
    background: var(--LightSmoke);
    border-bottom: 4px solid var(--DarkColor);
    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.25);
    padding-bottom: 2rem;
    a {
      text-decoration: none;
      color: var(--DarkSecondary);
      @media (max-width: 768px) {
        font-size: 0.75rem;
      }
      @media (max-width: 768px) {
        font-size: 0.55rem;
      }
    }
    .footerBrand {
      text-decoration: none;
      img {
        width: 280px;
        @media (max-width: 992px) {
          width: 170px;
        }
        @media (max-width: 768px) {
          width: 100px;
        }
      }
    }
    .footerInfo {
      text-align: center;
      text-decoration: underline;
      a {
        @media (max-width: 575px) {
          margin-bottom: 0.25rem;
          display: block;
        }
        @media (min-width: 768px) {
          margin-right: 1rem;
        }
      }
      a:nth-child(3) {
        text-decoration: underline;
        @media (min-width: 768px) {
          display: inline-block;
        }
      }
    }
    .infoLink {
      svg {
        color: var(--MainColor);
        margin: 0 0.5rem;
      }
    }
    .socialLinks {
      text-align: center;
      @media (max-width: 575px) {
        margin: 1rem 0;
        text-align: end !important;
      }
      a {
        display: inline-block;
        text-align: center;
        width: 45px;
        height: 45px;
        border: 3px solid;
        border-radius: 50%;
        line-height: 2.3;
        margin: 0 0.25rem;
        @media (max-width: 768px) {
          width: 30px;
          height: 30px;
          line-height: 2.7;
          svg {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 575px) {
          width: 22px;
          height: 22px;
          line-height: 1.7 !important;
          margin: 0 0.15rem !important;
          svg {
            font-size: 0.7rem !important;
          }
        }
        svg {
          font-size: 1.5rem;
        }
      }
      a:first-child {
        border-color: #0171fd;
        color: #0171fd;
      }
      a:nth-child(2) {
        border-color: #bf2987;
        color: #bf2987;
      }
      a:nth-child(3) {
        border-color: #0673bc;
        color: #0673bc;
      }
      a:last-child {
        border-color: #19a1f7;
        color: #19a1f7;
      }
    }
    .emailInput {
      input {
        border-color: var(--MainColor);
        box-shadow: none;
      }
      .ant-input-group-addon {
        button {
          background-color: var(--MainColor);
          @media (max-width: 992px) {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  .copyRight {
    padding: 1.5rem 1rem 1rem;
    background-color: var(--MainColor);
    color: var(--LightColor);
    text-align: center;
    p {
      margin-bottom: 0;
      @media (max-width: 575px) {
        font-size: 0.75rem;
      }
    }
  }
`;
