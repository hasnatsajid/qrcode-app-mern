import styled from "styled-components";

export const GenerateLogo = styled.div`
  width: 400px;
  margin: 0 auto;
  @media (max-width: 575px) {
    width: 300px;
  }
  img {
    width: 100%;
  }
`;

export const GenerateArea = styled.div`
  background-color: var(--MainColor);
  padding: 1.25rem 1.5675rem;
  width: 100%;
  max-width: 1030px;
  margin: 0.5rem auto 6rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  @media (max-width: 575px) {
    padding: 1.25rem 1rem;
  }
  .generator {
    background-color: var(--LightColor);
    border-radius: 1.25rem;
    padding: 3.25rem;
    @media (max-width: 575px) {
      padding: 2rem;
    }
    h5 {
      margin-bottom: 1.5rem;
    }
    .ant-form {
      .ant-form-item {
        input,
        .ant-select-selector,
        .ant-input-affix-wrapper {
          border: 0 !important;
          border-bottom: 1px solid var(--DarkColor) !important;
          box-shadow: none !important;
        }
        .ant-input-affix-wrapper {
          padding: 0.25rem 0;
          z-index: 9999;
          &:hover {
            .ant-input-suffix {
              display: block !important;
            }
          }
          input {
            border: 0 !important;
            &:focus + .ant-input-suffix {
              display: block !important;
            }
          }
          .ant-input-suffix {
            display: none;
          }
        }
        .ant-select-selection-item,
        input {
          font-size: 1.25rem;
          &::placeholder {
            font-size: 1.25rem;
          }
        }
      }
      .ant-form-item:nth-child(2) {
        margin: 6rem 0;
      }
      .ant-select {
        position: relative;
        &:hover,
        &:focus {
          &::after {
            display: block;
          }
        }
        &::after {
          content: "";
          background-image: url("/images/dropdown-icon.svg");
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 16px;
          filter: invert(32%) sepia(27%) saturate(7026%) hue-rotate(203deg)
            brightness(98%) contrast(111%);
          display: none;
        }
        .ant-select-arrow {
          display: none;
        }
      }
      .ant-select-open {
        &::after {
          transform: translateY(-50%) rotate(180deg);
          display: block;
        }
      }
      .generateImg {
        width: 200px;
        margin: 0 auto;
        text-align: center;
        @media (max-width: 575px) {
          width: 120px;
        }
        img {
          width: 100%;
        }
      }
      .generateBtn {
        width: 100%;
        height: 75px;
        border-radius: 3.125rem;
        background-color: var(--MainColor);
        color: var(--LightColor);
        margin-top: 2.5rem;
        font-size: 1.25rem;
        @media (max-width: 575px) {
          height: 50px;
          font-size: 1rem;
        }
      }
    }
  }
`;
