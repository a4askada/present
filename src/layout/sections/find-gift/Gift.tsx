import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import giftImg from "../../../assets/images/main.webp";

export const Gift = () => {
	return (
		<StyledGift>
			<Container>
				<FlexWrapper wrap="nowrap" align="center" justify="center">
					<GiftWrapper>
						<GiftTitle>
							<span>Найдите</span> подарок жене или девушке
						</GiftTitle>
						<GiftText>Пытаетесь найти подарок жене или девушке? Нет проблем!!</GiftText>
						<Button>найти сейчас</Button>
					</GiftWrapper>
					<GiftImgBox>
						<GiftImgWrap>
							<GiftImg src={giftImg}></GiftImg>
						</GiftImgWrap>
					</GiftImgBox>
				</FlexWrapper>
			</Container>
		</StyledGift>
	);
};

const StyledGift = styled.section`
	background-color: ${theme.colors.primaryBg};

	padding-top: 125px;

	${FlexWrapper} {
		background-color: #77608d;
		@media ${theme.media.tablet} {
			flex-wrap: wrap;
		}
	}
`;

const GiftWrapper = styled.div`
	width: 100%;

	background-color: #776033;

	${Button} {
		color: ${theme.colors.secondaryBg};
		background-color: ${theme.colors.accent};

		transition: all 0.2s;

		&:hover {
			background-color: ${theme.colors.accentHover};
			border: 1px solid ${theme.colors.accentHover};
		}
	}
`;

const GiftImgBox = styled.div`
	position: relative;

	max-width: 732px;
	width: 100%;
	min-height: 700px;

	background-color: red;

	@media (max-width: 1170px) {
		min-height: 500px;
	}
	@media ${theme.media.tablet} {
		min-height: 400px;
	}
`;
const GiftImgWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: -133px;
	bottom: 0;

	background-color: green;

	@media (max-width: 1168px) {
		right: 0;
	}
`;
const GiftImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;

	@media ${theme.media.tablet} {
	}
`;

const GiftTitle = styled.h1`
	span {
		display: block;
	}
	font-style: normal;

	${font({weight: 250, Fmax: 56, Fmin: 54, lineHeight: 1})}

	margin-bottom: 50px;
`;

const GiftText = styled.p`
	font-style: normal;
	line-height: 140.625%;

	${font({weight: 400, Fmax: 20, Fmin: 18})}

	margin-bottom: 50px;
`;
