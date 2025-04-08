import React from "react";
import {Icon} from "../icon/Icon";
import {S} from "./Logo_Styles";

export const Logo = () => {
	return (
		<S.Logo href="#">
			<Icon iconId="logo" width="40" height="40" viewBox="0 -8 40 40" />
		</S.Logo>
	);
};
