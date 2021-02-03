import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#4369EF",
		},
		secondary: {
			main: "#ef4343",
		},
		info: {
			main: "#2C2C2C",
		},
		danger: {
			main: "#ef4343",
		},
	},
	background: {
		default: "#fff",
	},
	overrides: {
		MuiButton: {
			label: {
				color: "#000000DE",
			},
		},
	},
});

export default theme;
