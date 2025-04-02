import React, {useState} from "react";
import {Menu} from "../Menu";
import styled from "styled-components";

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const onBurgerBtnCLick = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<StyledMobileMenu>
			<Menu menuItems={props.menuItems} />
		</StyledMobileMenu>
	);
};

const StyledMobileMenu = styled.nav`
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
