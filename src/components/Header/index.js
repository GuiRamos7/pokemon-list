import React, { useEffect, useState } from "react";
import Switch from "../Switch";
import * as S from "./styled";

const Header = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const themeTypeToAdd = theme ? "dark-mode" : "light-mode";
    const themeTypeToRemove = !theme ? "dark-mode" : "light-mode";

    document.querySelector("body").classList.add(themeTypeToAdd);
    document.querySelector("body").classList.remove(themeTypeToRemove);
  }, [theme]);
  return (
    <S.HeaderContainer>
      <p className="title">React Pokemon</p>
      <Switch className="switch" onChange={() => setTheme(!theme)} />
    </S.HeaderContainer>
  );
};

export default Header;
