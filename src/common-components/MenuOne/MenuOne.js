import styled from "styled-components";
import {
  BorderRadiuses,
  Colors,
  Spaces,
  FontFamilies,
  FontWeights,
  FontSizes,
} from "../../shared/DesignTokens";

import iconcaminhada from "../../assets/icons/icon-caminhada.png";
import iconcampanhas from "../../assets/icons/icon-campanhas.png";
import icontroquesuasmoedas from "../../assets/icons/icon-troquesuasmoedas.png";
import iconconquistas from "../../assets/icons/icon-conquistas.png";

export const MenuWrapper = styled.menu`
border: };
outline: none;
width: 100%;
height: 80px;
background-color: ${Colors.MEDIUMGRAY};
color: ${Colors.WHITE};
padding: ${Spaces.ONE_HALF};
cursor: pointer;
`;

const IconCaminhada = styled.img.attrs({
  src: iconcaminhada,
  alt: 'Caminhada"',
})`
  height: 45px;
`;

const IconCampanhas = styled.img.attrs({
  src: iconcampanhas,
  alt: 'Campanhas"',
})`
  height: 45px;
`;

const IconTroquesuasmoedas = styled.img.attrs({
  src: icontroquesuasmoedas,
  alt: 'Troque suas moedas"',
})`
  height: 45px;
`;

const IconConquistas = styled.img.attrs({
  src: iconconquistas,
  alt: 'Conquistas"',
})`
  height: 45px;
`;

export function MenuOne() {
  return (
    <MenuWrapper>
      <IconCaminhada />
      <IconCampanhas />
      <IconTroquesuasmoedas />
      <IconConquistas />
    </MenuWrapper>
  );
}
