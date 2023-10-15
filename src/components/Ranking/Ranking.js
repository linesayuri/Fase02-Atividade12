import styled from "styled-components";
import {
  Spaces,
} from "../../shared/DesignTokens";

import { HeadingOne } from "./HeadingOne/HeadingOne";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import {TextOne} from "../../common-components/TextOne/TextOne";

export const RankingWrapper = styled.div`
width: 100%;
height: ;
padding: ${Spaces.ONE_HALF};
`;


export function Ranking() {
  return (
    <RankingWrapper>
      <HeadingOne>Ranking</HeadingOne>
      <HeadingTwo>1.</HeadingTwo>
      <TextOne>Marcos André Silveira</TextOne>
      <HeadingTwo>2.</HeadingTwo>
      <TextOne>Fabiana Oliveira</TextOne>
      <HeadingTwo>3.</HeadingTwo>
      <TextOne>Milene Santos de Paula</TextOne>
    </RankingWrapper>
  );
}
