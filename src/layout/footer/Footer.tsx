import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";

const itemIcon = ["facebook", "instagram", "pinterest", "twitter", "youtube"];

export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FooterMenuList>
					<FooterMenuItem>Главная</FooterMenuItem>
					<FooterMenuItem>О нас</FooterMenuItem>
					<FooterMenuItem>
						<Logo />
					</FooterMenuItem>
					<FooterMenuItem>Наши сервисы</FooterMenuItem>
					<FooterMenuItem>Блог</FooterMenuItem>
				</FooterMenuList>

				<FooterMenuListIcon>
					{itemIcon.map((i, index) => {
						return (
							<li>
								<a href="#">
									<Icon key={index} iconId={i} />
								</a>
							</li>
						);
					})}
				</FooterMenuListIcon>

				<Copyright>
					<span>© 2010 — 2020</span> Privacy — Terms
				</Copyright>
			</Container>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	background-color: ${theme.colors.headerBg};
	padding-top: 106px;
	padding-bottom: 35px;
`;

const FooterMenuList = styled.ul`
	position: relative;
	padding-bottom: 28px;

	&::after {
		content: "";
		display: inline-block;
		width: 970px;
		width: 100%;
		height: 1px;
		position: absolute;
		background-color: ${theme.colors.font};
		bottom: 0px;
		@media ${theme.media.mobile} {
			bottom: -20px;
		}
	}

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 42px;

	@media ${theme.media.tablet} {
		gap: 6px;
	}
	@media ${theme.media.mobile} {
		flex-direction: column;
	}
`;
const FooterMenuItem = styled.li`
	font-size: 14px;

	line-height: 140.625%; /* 19.688px */
	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}
	a {
		margin: 0 83px;
		color: ${theme.colors.accent};

		@media ${theme.media.tablet} {
			margin: 0;
		}
	}
`;

const FooterMenuListIcon = styled.ul`
	padding-top: 55px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;
	@media ${theme.media.mobile} {
		gap: 10px;
	}
	a {
		display: inline-block;
		color: black;

		width: 39px;
		height: 39px;
		&:hover {
			color: ${theme.colors.accent};
		}
	}
`;

const Copyright = styled.div`
	text-align: center;
	margin-top: 70px;

	font-size: 14px;
	line-height: 140.625%; /* 19.688px */

	span {
		margin-right: 15px;
	}
`;
