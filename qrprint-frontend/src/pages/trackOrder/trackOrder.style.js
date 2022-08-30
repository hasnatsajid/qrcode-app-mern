import styled from "styled-components";

export const TrackArea = styled.div`
  background-color: var(--MainColor);
  padding: 1.25rem 1.5675rem;
  width: 100%;
  max-width: 1030px;
  margin: 6rem auto;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  @media (max-width: 575px) {
    padding: 1.25rem 1rem;
  }
`;
export const Tracker = styled.div`
  background-color: var(--LightColor);
  border-radius: 1.25rem;
  padding: 3.25rem 2rem;
  text-align: center;
  @media (max-width: 575px) {
    padding: 2rem;
  }
  .ant-form {
    .ant-form-item:first-child {
      margin: 5rem 0;
      input {
        width: 100%;
        max-width: 742px;
        height: 56px;
        border: 1px solid var(--MainColor);
        padding: 0.25rem 1.125rem;
        box-shadow: none !important;
        font-size: 1.125rem;
        &::placeholder {
          font-size: 1.125rem;
        }
      }
    }
    .ant-btn {
      width: 100%;
      max-width: 684px;
      height: 50px;
      border-radius: 3.125rem;
      background-color: var(--MainColor);
      color: var(--LightColor);
      span {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;
