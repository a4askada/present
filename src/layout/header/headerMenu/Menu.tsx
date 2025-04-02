import React from "react";
import styled from "styled-components";

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
	color: #000;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	&:hover {
		opacity: 0.5;
	}
`;
