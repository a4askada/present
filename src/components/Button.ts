import {theme} from "./../styles/Theme";
import styled from "styled-components";
import {font} from "../styles/Common";

export const Button = styled.button`
	${font({Fmax: 18, Fmin: 14})}

	width: 200px;

	height: 60px;

	color: ${theme.colors.accent};
	background-color: transparent;
	border-radius: 5px;
	border: 1px solid ${theme.colors.accent};

	text-transform: uppercase;
`;
