import styled from "styled-components";

export const ContainerPokemonItem = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    background: #3500d3;
    width: 130px;
    height: 130px;
    right: 20px;
    top: 0;
    border: 2px solid #3500d3;
    z-index: 10;
  }
  img {
    width: 300px;
    z-index: 30;
    position: relative;
  }
  a {
    font-weight: 400;
    padding: 0 10px 5px;
    position: relative;
  }
`;
