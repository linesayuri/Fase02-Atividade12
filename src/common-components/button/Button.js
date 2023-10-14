import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    Spaces,
    FontFamilies,
    FontWeights,
    FontSizes,
} from '../../shared/DesignTokens';

export const Button = styled.button`
border: ${BorderRadiuses.ONE};
outline: ${(props) =>
		props.ghost ? Colors.WHITE : Colors.DARKBLUE};
width: 100%;
height: 40px;
font-family: ${FontFamilies.PRIMARY};
font-size: ${FontSizes.TWO}
font-weight: ${FontWeights.BOLD};
background-color: ${(props) =>
		props.ghost ? Colors.PURPLE : Colors.DARKBLUE};
color: ${Colors.WHITE};
padding: ${Spaces.ONE_HALF};
cursor: pointer;

&: hover {
background-color: ${(props) =>
		props.ghost ? Colors.WHITE : Colors.PURPLE};
color: ${(props) =>
		props.ghost ? Colors.PURPLE : Colors.WHITE};
}

`;