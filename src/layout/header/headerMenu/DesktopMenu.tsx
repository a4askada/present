import React from "react";
import styled from "styled-components";
import {Menu} from "./Menu";

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
	return (
		<StyledDesktopMenu>
			<Menu menuItems={props.menuItems} />
		</StyledDesktopMenu>
	);
};

const StyledDesktopMenu = styled.nav`
	ul {
		display: flex;
		gap: 32px;
		align-items: center;
	}
`;
