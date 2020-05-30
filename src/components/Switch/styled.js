import styled from "styled-components";

export const Switch = styled.label`
  input {
    position: relative;
    appearance: none;
    outline: none;
    &::before {
      content: "";
      width: 45px;
      height: 22px;
      position: absolute;
      background: #e0e0e0;
      border-radius: 35px;
      transition: 0.4s ease-in-out background;
    }
    &::after {
      content: "";
      width: 18px;
      height: 18px;
      position: absolute;
      background: #f3f3f3;
      border-radius: 20px;
      left: 2px;
      top: 2px;
      transition: 0.2s ease-in-out left;
    }
    &:checked::before {
      background: #3500d3;
    }
    &:checked::after {
      content: "";
      width: 18px;
      height: 18px;
      position: absolute;
      background: #fff;
      border-radius: 20px;
      left: 25px;
      top: 2px;
    }
  }
`;
