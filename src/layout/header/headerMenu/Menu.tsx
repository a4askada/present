import React from "react";
import styled from "styled-components";
import {font} from "../../../styles/Common";

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
	return (
		<ul>
			{props.menuItems.map((menuItem, index) => {
				return (
					<MenuItem key={index}>
						<MenuLink href="">{menuItem}</MenuLink>
					</MenuItem>
				);
			})}
		</ul>
	);
};

const MenuItem = styled.li``;
const MenuLink = styled.a`
	line-height: normal;
	${font({Fmax: 18, Fmin: 18})}

	&:hover {
		opacity: 0.5;
	}
`;
