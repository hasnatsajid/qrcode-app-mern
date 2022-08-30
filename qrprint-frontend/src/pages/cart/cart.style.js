import styled from "styled-components";

export const CartArea = styled.div`
  margin: 5rem 0 7rem;
  .payMethods {
    border: 1px solid #30302f;
    padding: 0.5rem 1.25rem 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: var(--LightColor);
    h2 {
      margin-bottom: 2rem;
    }
    .payButtons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 992px) {
        display: block;
        justify-content: center;
      }
      a {
        width: 100%;
        max-width: 250px;
        height: 50px;
        border-radius: 2.6875rem;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 992px) {
          margin: 1rem auto !important;
        }
        img {
          vertical-align: middle;
        }
      }
      a:first-child {
        background-color: var(--PrimaryColor);
      }
      a:nth-child(2) {
        background-color: var(--SecondaryColor);
        margin: 0 1rem;
      }
      a:last-child {
        background-color: var(--DarkColor);
      }
    }
  }
  .contactInfo {
    h4 {
      font-weight: 600;
    }
    input {
      width: 100%;
      height: 40px;
      border: 1px solid var(--MainColor);
      background-color: var(--LightColor);
      box-shadow: none !important;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      font-size: 1rem;
      padding: 0 0.75rem;
      margin: 1rem 0;
      outline: 0;
      &::placeholder {
        color: var(--MainColor);
        font-size: 1rem;
      }
    }
  }
  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    a {
      text-decoration: none;
      color: var(--MainColor);
      font-size: 1.25rem;
      font-weight: 400;
      font-family: "Playfair Display", serif;
    }
    button {
      width: 232px;
      height: 44px;
      background-color: var(--MainColor);
      border: 1px solid var(--MainColor);
      color: var(--LightColor);
      border-radius: 3.125rem;
      box-shadow: none;
      outline: 0;
      span {
        font-weight: 500;
        font-size: 1rem;
      }
    }
  }
  .results {
    background-color: rgba(1, 114, 254, 0.08);
    padding: 2rem 1rem;
    height: 100%;
    span {
      font-size: 0.75rem;
      margin-bottom: 0;
    }
    .designs {
      border: 1px solid var(--LightSmokeSecondary);
      .designContent {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: calc(100% - 3rem);
        margin: 1rem 0 0.5rem;
        img {
          margin: 0 1rem;
        }
        span:last-child {
          margin-left: auto;
        }
      }
    }
    .discount {
      display: flex;
      align-items: center;
      input {
        height: 42px;
        font-size: 0.75rem;
        border: 1px solid var(--LightSmokeSecondary);
        box-shadow: none;
        outline: 0;
        padding: 0 1rem;
        margin: 1.5rem 1rem 1.5rem 0;
        width: 100%;
      }
      button {
        height: 42px;
        width: 93px;
        background-color: var(--MainColor);
        border: 1px solid var(--MainColor);
        color: var(--LightColor);
        box-shadow: none;
        outline: 0;
        span {
          font-size: 0.875rem;
          font-family: "Playfair Display", serif;
        }
      }
    }
    .subTotal,
    .shipping {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .total {
      position: relative;
      margin-top: 1rem;
      padding-top: 0.5rem;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: var(--DarkColor);
        position: absolute;
        top: 0;
        left: 0;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p,
        h6 {
          margin-bottom: 0;
        }
      }
    }
  }
`;
