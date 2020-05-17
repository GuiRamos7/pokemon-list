import React from "react";
import * as S from "./styled";

const Switch = ({ onChange, className }) => {
  return (
    <S.Switch className={`switchSmall2 m5 ${className}`}>
      <input type="checkbox" onChange={onChange} />
    </S.Switch>
  );
};

export default Switch;
