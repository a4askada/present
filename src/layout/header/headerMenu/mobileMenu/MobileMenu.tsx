import React, {useState} from "react";
import {Menu} from "../Menu";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Logo} from "../../../../components/logo/Logo";
import {Button} from "../../../../components/Button";

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	// document.body.style.overflow === "hidden";

	const onBurgerBtnCLick = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnCLick}>
				<span></span>
			</BurgerButton>

			<MobilePopup
				isOpen={menuIsOpen}
				onClick={() => {
					setMenuIsOpen(false);
				}}
			>
				<Menu menuItems={props.menuItems} />
				<Button>Поиск подарка</Button>
			</MobilePopup>
		</StyledMobileMenu>
	);
};

const StyledMobileMenu = styled.nav``;

const MobilePopup = styled.div<{isOpen: boolean}>`
	position: fixed;
	background-color: ${theme.colors.headerBg};
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 8;

	display: none;

	${(props) =>
		props.isOpen &&
		css<{isOpen: boolean}>`
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 150px;
		`}

	ul {
		display: flex;
		gap: 40px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
	position: fixed;
	width: 200px;
	height: 200px;
	top: -100px;
	right: -100px;
	z-index: 9999999999999999999;
	span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
		left: 40px;
		bottom: 50px;

		${(props) =>
			props.isOpen &&
			css<{isOpen: boolean}>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: "";

			display: block;
			width: 36px;
			height: 2px;
			background-color: ${theme.colors.font};
			position: absolute;
			transform: translateY(-10px);
			transition: all 0.5s;
			${(props) =>
				props.isOpen &&
				css<{isOpen: boolean}>`
					transform: translateY(0) rotate(405deg);
				`};
		}
		&::after {
			content: "";

			display: block;
			width: 36px;
			height: 2px;
			background-color: ${theme.colors.font};
			position: absolute;
			transform: translateY(10px);
			transition: all 0.5s;

			${(props) =>
				props.isOpen &&
				css<{isOpen: boolean}>`
					transform: translateY(0) rotate(-405deg);
				`}
		}
	}
`;
