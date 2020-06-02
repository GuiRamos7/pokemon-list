import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "../Switch";
import * as S from "./styled";
import settingsActions from "actions/SettingsAction";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const themeState = useSelector((state) => state.settings.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeTypeToAdd = theme ? "dark-mode" : "light-mode";
    const themeTypeToRemove = !theme ? "dark-mode" : "light-mode";

    const newTheme = themeState === "DARK_MODE" ? "LIGHT_MODE" : "DARK_MODE";
    dispatch(settingsActions.toogleTheme(newTheme));
    document.querySelector("body").classList.add(themeTypeToAdd);
    document.querySelector("body").classList.remove(themeTypeToRemove);
  }, [theme, themeState, dispatch]);
  return (
    <S.HeaderContainer>
      <p className="title">React Pokemon</p>
      <Switch className="switch" onChange={() => setTheme(!theme)} />
    </S.HeaderContainer>
  );
};

export default Header;
