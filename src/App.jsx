import { styled } from "@mui/system";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#748624",
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
	height: 100%;
	background-color: #789f468f;
	padding-top: 15px;
`;
