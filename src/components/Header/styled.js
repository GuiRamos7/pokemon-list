import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 0 !important;
    @media only screen and (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  .description {
    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
    font-size: 13px;
  }
  .switch {
    position: absolute;
    top: 0;
    right: 55px;
  }
`;
