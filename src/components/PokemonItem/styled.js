import styled from "styled-components";

export const ContainerPokemonItem = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 30px 30px;
  box-shadow: 0 0 8px
    ${(props) => (props.theme === "light" ? "#b9b9b9" : "#000")};
  transition: 0.2s ease;
  &:hover {
    box-shadow: 0 0 5px #5d5b5b;
  }
  img {
    margin: 60px 0 0;
    width: 180px;
    z-index: 30;
    position: relative;
  }
  .title {
    font-size: 28px;
  }
  .types {
    position: absolute;
    display: flex;
    top: 20px;
    right: 20px;
    div {
      margin-left: 5px;
    }
  }
`;
