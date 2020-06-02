import styled from "styled-components";

const renderColorType = (type) => {
  switch (type) {
    default:
    case "normal":
      return `
        background: #acac80;
        color: #FFF !important;
        border-radius: 7px;
        
      `;
    case "poison":
      return `
        background: #4E3CB3;
        color: #FFF !important;
        border-radius: 7px;
        
      `;
    case "fighting":
      return `
        background: #F27D29;
        color: #FFF !important;
        border-radius: 7px;
        
      `;
    case "flying":
      return `
        background: #95F5DB;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "ground":
      return `
        background: #8F6067;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "rock":
      return `
        background: #8C7165;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "bug":
      return `
        background: #68F58B;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "ghost":
      return `
        background: #B38FF3;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "steel":
      return `
        background: #BDF3CA;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "fire":
      return `
        background: #F52540;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "water":
      return `
        background: #BDF3CA;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "grass":
      return `
        background: #58ED6C;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "electric":
      return `
        background: #F5EB36;
        color: #000 !important;
        border-radius: 7px;
        
      `;

    case "psychic":
      return `
        background: #F53580;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "ice":
      return `
        background: #84D5F5;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "dragon":
      return `
        background: #D5A7F5;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "dark":
      return `
        background: #4F4B4C;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "fairy":
      return `
        background: #EDC4F5;
        color: #000 !important;
        border-radius: 7px;
        
      `;
    case "shadow":
      return `
        background: #2F223B;
        color: #fff !important;
        border-radius: 7px;
        
      `;
    case "unknown":
      return `
        color: #000 !important;
        border-radius: 7px;
        border: 1px solid #000;
      `;
  }
};

export const BadgeTypeContainer = styled.div`
  ${(props) => renderColorType(props.type)}
  font-size: 12px;
  padding: 5px;
`;
