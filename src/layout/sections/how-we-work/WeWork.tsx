import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {font} from "../../../styles/Common";
import weWorkImg from "../../../assets/images/thanks.webp";

export const WeWork = () => {
	return (
		<StyledWeWork>
			<Container>
				<FlexWrapper wrap="nowrap" align="center" justify="center">
					<WeWorkImgBox>
						<WeWorkImgWrap>
							<WeWorkImg src={weWorkImg}></WeWorkImg>
						</WeWorkImgWrap>
					</WeWorkImgBox>
					<WeWorkWrapper>
						<div>
							<WeWorkTitle>Как мы работаем</WeWorkTitle>
							<WeWorkText>
								Мы уже опросили сотни женщин, чего они хотят, и создали базу данных с результатами. Все, что вам
								нужно сделать, это принять участие в нашем коротком опросе, который займет всего несколько
								секунд, и наш собственный алгоритм подберет для вас несколько идеальных вариантов подарков.
							</WeWorkText>
							<Button>Узнать больше</Button>
						</div>
					</WeWorkWrapper>
				</FlexWrapper>
			</Container>
		</StyledWeWork>
	);
};

const StyledWeWork = styled.section`
	background-color: ${theme.colors.primaryBg};

	${FlexWrapper} {
		@media ${theme.media.tablet} {
			flex-wrap: wrap-reverse;
			gap: 20px;
		}
	}
`;

const WeWorkWrapper = styled.div`
	div {
		padding-left: 35px;
	}

	width: 100%;

	${Button} {
		display: block;
		color: ${theme.colors.accent};

		transition: all 0.2s;

		&:hover {
			background-color: ${theme.colors.accentHover};
			border: 1px solid ${theme.colors.accentHover};
			color: #fff;
		}

		@media ${theme.media.tablet} {
			width: 80%;
			margin: 0 auto;
		}
	}

	@media ${theme.media.tablet} {
		padding-top: 40px;

		div {
			padding-left: 0;
		}
	}
`;

const WeWorkImgBox = styled.div`
	position: relative;

	max-width: 732px;
	width: 100%;
	min-height: 700px;

	@media (max-width: 1170px) {
		min-height: 500px;
	}
	@media ${theme.media.tablet} {
		min-height: 400px;
	}
`;
const WeWorkImgWrap = styled.div`
	position: absolute;
	top: 0;
	left: -133px;
	right: 0;
	bottom: 0;

	@media (max-width: 1168px) {
		left: 0;
	}
`;
const WeWorkImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;

	@media ${theme.media.tablet} {
	}
`;

const WeWorkTitle = styled.h3`
	font-style: normal;

	${font({weight: 250, Fmax: 32, Fmin: 28, lineHeight: 1})}

	margin-bottom: 24px;
`;

const WeWorkText = styled.p`
	${font({Fmax: 20, Fmin: 16})}

	margin-bottom: 50px;
`;
