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
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 0 !important;
    border-bottom: 2px solid #3500d3;
  }
  .switch {
    position: absolute;
    top: 0;
    right: 55px;
  }
`;
