import styled from "styled-components";

export const Head = styled.div`
  position: relative;
  z-index: 1;
  background-color: var(--LightSmoke);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand {
    width: 100%;
    max-width: 200px;
    text-decoration: none;
    @media (max-width: 575px) {
      max-width: 150px;
    }
    img {
      width: 100%;
    }
  }
  .links {
    .ant-dropdown-trigger {
      .ant-space {
        display: flex;
        flex-direction: column;
        gap: 6px !important;
        .toggler {
          width: 34px;
          height: 4px;
          background-color: var(--MainColor);
          border-radius: 0.125rem;
        }
      }
    }
  }
`;
export const HeadDropLink = styled.div`
  text-align: center;
  a {
    display: inline-block;
    position: relative;
    width: 100%;
    text-decoration: none;
    color: var(--DarkColor);
    &::after {
      content: "" !important;
      position: absolute !important;
      bottom: 0 !important;
      top: unset !important;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--DarkColor);
    }
  }
`;
