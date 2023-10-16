import styled from 'styled-components';
import {
  Colors,
  Spaces,
} from '../../shared/DesignTokens';

import iconcaminhada from "../../assets/icons/icon-caminhada.png";
import iconcampanhas from "../../assets/icons/icon-campanhas.png";
import icontroquesuasmoedas from "../../assets/icons/icon-troquesuasmoedas.png";
import iconconquistas from "../../assets/icons/icon-conquistas.png";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export const MenuWrapper = styled.menu`
  width: 100%;
  height: 80px;
  background-color: ${Colors.MEDIUMGRAY};
  display: flex;
  justify-content: space-around;
  align-itens: center;
  padding-left: ${Spaces.ELEVEN};
  padding-right: ${Spaces.ELEVEN};
  padding-top: ${Spaces.TWO};
  cursor: pointer;
  margin-top: ${Spaces.NONE};
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
      <div>
        <IconCaminhada />
        <ButtonLink>Caminhada</ButtonLink>
      </div>
      <div>
        <IconCampanhas />
        <ButtonLink>Campanhas</ButtonLink>
      </div>
      <div>
        <IconTroquesuasmoedas />
        <ButtonLink>Troque suas Moedas</ButtonLink>
      </div>
      <div>
        <IconConquistas />
        <ButtonLink>Conquistas</ButtonLink>
      </div>
    </MenuWrapper>
  );
}
