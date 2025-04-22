import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionSubTitle} from "../../../components/SectionSubTitle";
import cardImg1 from "../../../assets/images/card1.webp";
import cardImg2 from "../../../assets/images/card2.webp";
import cardImg3 from "../../../assets/images/card3.webp";
import cardImg4 from "../../../assets/images/card4.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Card} from "./card/Card";
import {Container} from "../../../components/Container";

const cardsData = [
	{
		cardImg: cardImg1,
		cardTitle: "День Рождения",
		cardAlt: "День Рождения",
	},
	{
		cardImg: cardImg2,
		cardTitle: "Юбилей",
		cardAlt: "Юбилей",
	},
	{
		cardImg: cardImg3,
		cardTitle: "День Св.Валентна",
		cardAlt: "День Св.Валентна",
	},
	{
		cardImg: cardImg4,
		cardTitle: "Рождество",
		cardAlt: "Рождество",
	},
];

export const GiftAll = () => {
	return (
		<StyledGiftAll>
			<Container>
				<SectionTitle>Подарки на все случаи жизни</SectionTitle>
				<SectionSubTitle>
					«Попробуйте наше веб-приложение, чтобы найти лучшие подарки на все случаи жизни»
				</SectionSubTitle>

				<FlexWrapper justify="center">
					{cardsData.map((c, index) => {
						return <Card key={index} cardTitle={c.cardTitle} cardImg={c.cardImg} cardAlt={c.cardAlt} />;
					})}
				</FlexWrapper>
			</Container>
		</StyledGiftAll>
	);
};

const StyledGiftAll = styled.section`
	padding-top: 96px;
	padding-bottom: 137px;
	background-color: ${theme.colors.secondaryBg};
	${SectionTitle} {
		margin-bottom: 24px;
	}

	${FlexWrapper} {
		gap: 30px;
	}
`;
