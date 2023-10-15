import styled from "styled-components";
import {
  Spaces,
} from "../../shared/DesignTokens";

import banner from "../../assets/images/banner.png";
import buttonbannerleft from "../../assets/icons/button-banner-left.png";
import buttonbannerright from "../../assets/icons/button-banner-right.png";

export const BannerWrapper = styled.banner`
width: 100%;
height: 400px;
padding: ${Spaces.TWO};
cursor: pointer;
`;

const ButtonBannerLeft = styled.img.attrs({
  src: buttonbannerleft,
  alt: '"',
})`
  height: 40px;
`;

const Banner = styled.img.attrs({
  src: banner,
  alt: '"',
})`
  height: 400px;
`;

const ButtonBannerRight = styled.img.attrs({
  src: buttonbannerright,
  alt: '"',
})`
  height: 40px;
`;


export function BannerMain() {
  return (
    <BannerWrapper>
      <ButtonBannerLeft />
      <Banner />
      <ButtonBannerRight />
    </BannerWrapper>
  );
}
