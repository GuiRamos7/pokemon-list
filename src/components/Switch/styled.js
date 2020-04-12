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
      background: #d0d1e0;
      border-radius: 35px;
      transition: 0.4s ease-in-out background;
    }
    &::after {
      content: "";
      width: 18px;
      height: 18px;
      position: absolute;
      background: #f0f1ff;
      border-radius: 20px;
      left: 2px;
      top: 2px;
      transition: 0.2s ease-in-out left;
    }
    &:checked::before {
      background: #66649c;
    }
    &:checked::after {
      content: "";
      width: 18px;
      height: 18px;
      position: absolute;
      background: #f0f1ff;
      border-radius: 20px;
      left: 25px;
      top: 2px;
    }
  }
`;
