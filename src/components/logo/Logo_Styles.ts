import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Logo = styled.a`
	&:hover {
		opacity: 0.7;
	}

	color: ${theme.colors.accentDark};
`;

export const S = {Logo};
