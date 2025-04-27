import React from "react";

import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type BestCardPropsType = {
	title: string;
	text: string;
};

export const BestCard = (props: BestCardPropsType) => {
	return (
		<StyledBestCard>
			<BestCardTitle>{props.title}</BestCardTitle>
			<BestCardText>{props.text}</BestCardText>
			<BestCardLink>Читать больше</BestCardLink>
		</StyledBestCard>
	);
};

const StyledBestCard = styled.div`
	width: 48%;
	padding: 48px;
	&:hover {
		box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.05);
	}

	@media ${theme.media.tablet} {
		padding: 30px;
		width: 100%;
	}
`;
const BestCardTitle = styled.h4`
	font-size: 24px;
	font-weight: 700;
	line-height: 140.625%; /* 33.75px */
	margin-bottom: 16px;
`;
const BestCardText = styled.h4`
	font-size: 18px;
	line-height: 140.625%; /* 25.313px */
	margin-bottom: 16px;
`;
const BestCardLink = styled.a`
	color: #000;
	font-size: 14px;
	line-height: 140.625%; /* 19.688px */
`;
