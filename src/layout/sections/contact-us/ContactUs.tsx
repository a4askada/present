import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const ContactUs = () => {
	return (
		<SectionContact>
			<Container>
				<FlexWrapper justify="space-between" align="center">
					<ContactWrapper>
						<ContactTitle>Готовы начать?</ContactTitle>
						<ContactText>Зарегистрируйтесь или свяжитесь с нами</ContactText>
					</ContactWrapper>

					<ContactButtonsBox>
						<Button>Найти сейчас</Button>
						<Button>Как это работает</Button>
					</ContactButtonsBox>
				</FlexWrapper>
			</Container>
		</SectionContact>
	);
};

const SectionContact = styled.section`
	background-color: ${theme.colors.accent};
	min-height: 200px;

	${Container} {
		padding: 58px 100px 58px 100px;

		@media ${theme.media.tablet} {
			padding: 58px 30px 58px 30px;
		}
	}
	${FlexWrapper} {
		@media (max-width: 987px) {
			justify-content: center;
		}
	}
`;

const ContactWrapper = styled.div``;
const ContactTitle = styled.h4`
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 140.625%; /* 45px */
`;
const ContactText = styled.p`
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: 140.625%; /* 39.375px */
	max-width: 356px;
	@media (max-width: 987px) {
		max-width: 100%;
		margin-bottom: 40px;
	}
`;

const ContactButtonsBox = styled.div`
	display: flex;
	gap: 16px;
	@media ${theme.media.tablet} {
		flex-direction: column;
		width: 100%;
		align-items: center;
	}
	${Button} {
		background-color: ${theme.colors.font};
		color: ${theme.colors.secondaryBg};

		&:hover {
			background-color: transparent;
			color: ${theme.colors.font};
			border: 1px solid ${theme.colors.font};
		}

		@media ${theme.media.tablet} {
			width: 100%;
		}

		&:last-child {
			background-color: transparent;
			color: ${theme.colors.font};
			border: 1px solid ${theme.colors.font};

			&:hover {
				background-color: ${theme.colors.font};
				color: ${theme.colors.secondaryBg};
			}
		}
	}
`;
