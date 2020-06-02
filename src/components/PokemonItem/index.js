import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BadgeType from "../BadgeType";
import * as S from "./styled";

const PokemonItem = () => {
  const theme = useSelector((state) => state.settings.theme);

  const pokemon = {
    name: "Bulbasaur",
    img: "https://pokeres.bastionbot.org/images/pokemon/1.png",
    types: [{ name: "grass" }, { name: "poison" }],
  };

  const renderBadge = () => {
    return pokemon.types.map((el) => {
      return <BadgeType type={el.name} />;
    });
  };

  return (
    <S.ContainerPokemonItem theme={theme}>
      <img alt="img pokemon" src={pokemon.img} />
      <p className="title">{pokemon.name}</p>
      <div className="types">{renderBadge()}</div>
    </S.ContainerPokemonItem>
  );
};

export default PokemonItem;
