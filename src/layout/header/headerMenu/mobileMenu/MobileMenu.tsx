import React, {useState} from "react";
import {Menu} from "../Menu";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Logo} from "../../../../components/logo/Logo";

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

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
				<button>Найти подарок</button>
			</MobilePopup>
		</StyledMobileMenu>
	);
};

const StyledMobileMenu = styled.nav``;

const MobilePopup = styled.div<{isOpen: boolean}>`
	position: fixed;
	background-color: rgba(118, 4, 248, 0.486);
	top: 0;
	right: 0;
	bottom: 30%;
	left: 0;
	z-index: 99999999999;

	display: none;

	${(props) =>
		props.isOpen &&
		css<{isOpen: boolean}>`
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
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
	z-index: 888888888;
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
			transition: all 3s ease-out;
			${(props) =>
				props.isOpen &&
				css<{isOpen: boolean}>`
					transform: rotate(404deg);
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
			transition: all 3s ease-out;

			${(props) =>
				props.isOpen &&
				css<{isOpen: boolean}>`
					transform: rotate(-765deg);
				`}
		}
	}
`;
