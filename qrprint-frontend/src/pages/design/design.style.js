import styled from "styled-components";

export const DesignArea = styled.div`
  margin: 6rem 0 12rem;
  .gallery {
    .galleryHead {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 575px) {
        flex-wrap: wrap;
      }
      h1 {
        color: var(--DarkColor);
      }
      div {
        @media (max-width: 575px) {
          margin-left: auto;
        }
      }
      a:first-child {
        margin-right: 1rem;
      }
      a {
        display: inline-block;
        text-decoration: none;
        width: 190px;
        height: 50px;
        border-radius: 2.625rem;
        border: 2px solid var(--MainColor);
        text-align: center;
        vertical-align: middle;
        line-height: 2.3;
        font-size: 1.25rem;
        @media (max-width: 1200px) {
          display: block;
          margin-bottom: 0.5rem;
        }
        &:hover,
        &:focus {
          background-color: var(--MainColor);
          color: var(--LightColor);
        }
      }
      .active {
        background-color: var(--MainColor);
        color: var(--LightColor);
      }
    }
    .galleryImage {
      background-color: #d9eaff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 520px;
      margin-top: 2rem;
      @media (max-width: 575px) {
        padding: 0 2.5rem;
      }
      img {
        width: 100%;
        max-width: 440px;
      }
    }
    .galleryFooter {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-top: 2rem;
      flex-wrap: wrap;
      .galleryButtons {
        button {
          box-shadow: none;
          border: 1px solid var(--LightSmokeSecondary);
          width: 45px;
          height: 50px;
          padding: 0;
        }
      }
      .zoomButtons {
        display: flex;
        @media (max-width: 575px) {
          margin: 1rem auto 0;
        }
      }
      .zoomImage {
        button:first-child,
        button:last-child {
          width: 44px;
          height: 50px;
          font-size: 1.25rem;
          border: 1px solid var(--LightSmokeSecondary);
          color: var(--DarkColor);
        }
        .ant-select {
          vertical-align: top;
          position: relative;
          &::after {
            content: "";
            background-image: url("/images/dropdown-icon.svg");
            background-repeat: no-repeat;
            width: 10px;
            height: 10px;
            position: absolute;
            right: 1rem;
            top: 55%;
            transform: translateY(-50%);
          }
          .ant-select-selector {
            width: 103px;
            height: 50px;
            border: 1px solid var(--LightSmokeSecondary);
            .ant-select-selection-item {
              line-height: 3.5;
            }
          }
          .ant-select-arrow {
            display: none;
          }
        }
        .ant-select-open {
          &::after {
            transform: translateY(-50%) rotate(180deg);
          }
        }
      }
    }
  }
  .productHeading {
    margin-top: 1rem;
    @media (max-width: 1200px) {
      margin-top: 4rem;
    }
  }
  .productDetail {
    border: 1px solid rgba(1, 114, 254, 0.35);
    padding: 1.5rem 0.75rem;
    margin-top: 3rem;
    @media (max-width: 1200px) {
      margin-top: 3.75rem;
    }
    span {
      font-size: 0.75rem;
    }
    .products {
      .productInfo {
        padding: 0.5rem 1rem 0.5rem 0.5rem;
        border: 1px solid var(--LightSmokeSecondary);
        .infoHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .ant-dropdown-trigger {
            text-decoration: none;
            color: #000000;
          }
        }
        .infoArea {
          margin: 1rem 0 0.5rem 0;
          img {
            margin-right: 0.5rem;
          }
        }
        .collapseRadio {
          align-items: unset;
          vertical-align: bottom;
          span:last-child {
            line-height: 2.3;
          }
          .ant-radio-checked {
            .ant-radio-inner {
              border-color: var(--MainColor);
            }
          }
          .ant-radio-inner {
            width: 20px;
            height: 20px;
            box-shadow: none;
            &::after {
              width: 24px;
              height: 24px;
              background-color: var(--MainColor);
              top: 28%;
              left: 30%;
            }
          }
        }
      }
    }
    .printing {
      margin: 1rem 0 2rem;
      span:first-child {
        vertical-align: text-top;
      }
      .ant-checkbox-wrapper {
        align-items: flex-start;
        line-height: 2.2;
        .ant-checkbox-inner {
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          width: 20px;
          height: 20px;
          &::after {
            top: 40%;
            height: 12px;
          }
        }
      }
    }
    .uploadImg {
      border: 1px solid var(--LightSmokeSecondary);
      padding: 0.5rem 0.75rem 1rem;
      .designImage {
        display: flex;
        width: 100%;
        @media (max-width: 1200px) {
          max-width: 100%;
        }
        .imageName {
          margin-left: 1rem;
          span:last-child {
            display: block;
            margin-top: 0.5rem;
          }
        }
        .imageIcons {
          margin-left: auto;
          svg:first-child {
            margin-right: 0.5rem;
          }
          svg {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
      }
    }
    .addDesign {
      height: 70px;
      border: 1px solid var(--LightSmokeSecondary);
      color: var(--DarkColor);
      display: flex;
      align-items: center;
      text-align: start;
      width: 100%;
      margin-top: 2.5rem;
      svg {
        width: 18px;
        height: 18px;
        margin-right: 1rem;
      }
      p {
        margin-bottom: 0;
        font-size: 0.75rem;
      }
      span {
        color: #525252;
      }
    }
  }
  .addCart {
    margin-top: 3rem;
    text-align: center;
    a {
      display: inline-block;
      text-decoration: none;
      width: 100%;
      max-width: 300px;
      line-height: 2.75;
      height: 45px;
      background-color: var(--MainColor);
      color: var(--LightColor);
      border-color: var(--LightColor);
      border-radius: 3.125rem;
      box-shadow: none;
      font-size: 1rem;
      font-weight: 500;
      font-family: "Playfair Display", serif;
    }
  }
`;
