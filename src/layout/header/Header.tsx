import React from "react";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./headerMenu/Menu";
import {DesktopMenu} from "./headerMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";

const itemsMenu = ["Главная", "О нас", "Наши сервисы", "Блог"];

export const Header = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 768;

	React.useEffect(() => {
		/* Inside of a "useEffect" hook add an event listener that updates
			the "width" state variable when the window size changes */
		window.addEventListener("resize", () => setWidth(window.innerWidth));

		/* passing an empty array as the dependencies of the effect will cause this
			effect to only run when the component mounts, and not each time it updates.
			We only want the listener to be added once */
	}, []);

	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify="space-between" align="center">
					<Logo />
					{width < breakpoint ? <MobileMenu menuItems={itemsMenu} /> : <DesktopMenu menuItems={itemsMenu} />}

					<button>Найти подарок</button>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header``;
