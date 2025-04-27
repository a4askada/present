import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionSubTitle} from "../../../components/SectionSubTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

import bestBlogImg from "../../../assets/images/card66.webp";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {BestCard} from "./bestCard/BestCard";

const cardsData = [
	{
		title: "База данных для поиска подарков для девушки",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "Как ИИ читает ваши мысли, чтобы найти лучший подарок",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "База данных для поиска подарков для девушки",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "Как ИИ читает ваши мысли, чтобы найти лучший подарок",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "База данных для поиска подарков для девушки",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "Как ИИ читает ваши мысли, чтобы найти лучший подарок",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "База данных для поиска подарков для девушки",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "Как ИИ читает ваши мысли, чтобы найти лучший подарок",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "База данных для поиска подарков для девушки",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "Как ИИ читает ваши мысли, чтобы найти лучший подарок",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "База данных для поиска подарков для девушки",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
	{
		title: "Как ИИ читает ваши мысли, чтобы найти лучший подарок",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
	},
];

export const BestBlog = () => {
	return (
		<BestBlogSection>
			<Container>
				<SectionTitle>Лучшее из нашего блога</SectionTitle>
				<SectionSubTitle>
					«Заходи на наш блог, чтобы найти лучшие советы и рекомендации по выбору подарка»
				</SectionSubTitle>
				<FlexWrapper wrap="nowrap">
					<BestBlogImgBox>
						<BestBlogImg src={bestBlogImg} />
					</BestBlogImgBox>
					<BestBlogInfo>
						<BestBlogSmall>Mr. John Doe</BestBlogSmall>
						<BestBlogTitle>Лучший способ поздравить жену</BestBlogTitle>
						<BestBlogReadMore>Read More</BestBlogReadMore>
					</BestBlogInfo>
				</FlexWrapper>
				<CardsWrapper>
					{cardsData.map((b, index) => {
						return <BestCard key={index} title={b.title} text={b.text} />;
					})}
				</CardsWrapper>
			</Container>
		</BestBlogSection>
	);
};

const BestBlogSection = styled.section`
	padding-top: 80px;
	padding-bottom: 80px;
	min-height: 200px;

	${SectionTitle} {
		margin-bottom: 24px;
	}
	${SectionSubTitle} {
		margin-bottom: 47px;
	}

	${FlexWrapper} {
		background-color: ${theme.colors.font};
		@media ${theme.media.tablet} {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
`;

const BestBlogImgBox = styled.div`
	max-width: 400px;
	width: 100%;
`;
const BestBlogImg = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
	height: 100%;
`;

const BestBlogInfo = styled.div`
	padding-left: 100px;
	padding-top: 64px;
	@media (max-width: 985px) {
		padding-left: 50px;
	}
	@media ${theme.media.tablet} {
		padding-top: 40px;
		padding-left: 35px;
	}
`;
const BestBlogSmall = styled.small`
	display: block;
	color: #fff;
	font-size: 14px;
	line-height: 140.625%;
	margin-bottom: 27px;

	@media ${theme.media.tablet} {
		margin-bottom: 20px;
	}
`;
const BestBlogTitle = styled.h4`
	color: #fff;
	font-size: 48px;
	max-width: 492px;
	width: 100%;

	margin-bottom: 60px;

	@media ${theme.media.tablet} {
		margin-bottom: 40px;
		font-size: 44px;
	}
	@media ${theme.media.mobile} {
		font-size: 38px;
	}
`;
const BestBlogReadMore = styled.a`
	display: inline-block;
	margin-bottom: 50px;
	color: #fff;
	font-size: 18px;
	line-height: 140.625%;

	&:hover {
		text-decoration: underline;
		opacity: 0.4;
	}

	@media ${theme.media.tablet} {
		margin-bottom: 30px;
	}
`;

const CardsWrapper = styled.div`
	display: flex;
	gap: 30px;
	flex-wrap: wrap;

	@media ${theme.media.tablet} {
		flex-wrap: wrap;
	}
`;
