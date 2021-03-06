import { styled } from "@mui/system";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#5f6a25",
		},
	},
});

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<BaseLayout>
				<Home />
			</BaseLayout>
		</ThemeProvider>
	);
}

const BaseLayout = styled("div")`
	height: 100vh;
	background-color: #789f468f;
	padding-top: 40px;
`;
