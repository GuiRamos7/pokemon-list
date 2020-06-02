import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const BadgeType = ({ type }) => {
  return <S.BadgeTypeContainer type={type}>{type}</S.BadgeTypeContainer>;
};

BadgeType.propTypes = {
  type: PropTypes.string,
};

BadgeType.defaultProps = {
  type: "normal",
};

export default BadgeType;
