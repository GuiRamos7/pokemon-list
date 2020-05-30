import React from "react";
import * as S from "./styled";

const PokemonItem = () => {
  const pokemon = {
    name: "bulba",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  };

  return (
    <S.ContainerPokemonItem>
      <img src={pokemon.img} />
      <a href="#">Bulbasaur</a>
    </S.ContainerPokemonItem>
  );
};

export default PokemonItem;
