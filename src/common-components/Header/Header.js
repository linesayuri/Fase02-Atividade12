import styled from "styled-components";
import {
  Colors,
  Spaces,
  FontFamilies,
  FontWeights,
  FontSizes,
} from "../../shared/DesignTokens";
import logostepsforfuture from "../../assets/images/logo-stepsforfuture.png";
import { Button } from "../button/Button";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  font-family: ${FontFamilies.PRIMARY};
  background-color: ${Colors.PURPLE};
  padding: ;
  display: flex;
  justify-content: space-around;
  align-items: ;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

const Logo = styled.img.attrs({
  src: logostepsforfuture,
  alt: 'Logo do "Steps for Future"',
})`
  height: 54px;
`;
export function Header() {
  return (
    <Wrapper>
      <Logo />
      <Button>Entrar</Button>
      <Button ghost={true}>Cadastrar</Button>
    </Wrapper>
  );
}
