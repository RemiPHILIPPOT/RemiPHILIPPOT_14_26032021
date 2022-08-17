import { styled } from "@mui/material";

export default function Header() {
	return (
		<HeaderBloc>
			<AppTitle>HRnet</AppTitle>
		</HeaderBloc>
	);
}

const HeaderBloc = styled("div")`
	display: flex;
	align-items: center;
`;

const AppTitle = styled("h1")`
	color: #799f46f4;
	text-align: center;
	font-family: "Koulen", cursive;
	font-size: 50px;
	margin-left: auto;
	margin-right: auto;
`;
