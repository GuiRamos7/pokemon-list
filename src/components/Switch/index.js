import React from "react";
import * as S from "./styled";

const Switch = ({ onChange }) => {
  return (
    <S.Switch class="switchSmall2 m5">
      <input type="checkbox" onChange={onChange} />
    </S.Switch>
  );
};

export default Switch;
