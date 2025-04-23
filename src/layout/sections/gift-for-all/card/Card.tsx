import React from "react";

import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type CardPropsType = {
	cardTitle: string;
	cardImg: string;
	cardAlt: string;
};

export const Card = (props: CardPropsType) => {
	return (
		<StyledCard>
			<CardImgBox>
				<img src={props.cardImg} alt={props.cardAlt} />
			</CardImgBox>

			<CardTitle>{props.cardTitle}</CardTitle>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	min-height: 270px;

	background-color: ${theme.colors.headerBg};

	&:hover {
		background-color: ${theme.colors.secondaryBg};
		cursor: pointer;
	}

	&:hover img {
		opacity: 0.5;
	}
`;

const CardTitle = styled.h3`
	font-size: 20px;

	padding: 24px 24px 118px 24px;
`;

const CardImgBox = styled.div`
	max-width: 268px;
	width: 100%;
	height: 270px;

	img {
		width: 100%;
		object-fit: cover;
		height: 100%;
	}

	@media ${theme.media.tablet} {
		max-width: 100%;
	}
`;
