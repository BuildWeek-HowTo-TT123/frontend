import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	IconButton,
	MenuItem,
	Menu,
	Button,
} from "@material-ui/core/";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, useHistory } from "react-router-dom";
import { Home as HomeIcon, Menu as MenuIcon } from "@material-ui/icons";




const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.down("xs")]: {
			flexGrow: 1,
		},
	},
	headerOptions: {
		display: "flex",
		marginLeft: "auto",
		justifyContent: "space-around",
	},
	active: {
		color: "primary",
	},
}));

const Header = (props) => {
  const history = useHistory(props);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
		{
			menuTitle: "Home",
			pageURL: "/home",
		},
		{
			menuTitle: "Create New",
			pageURL: "/create",
		},
		{
			menuTitle: "Login",
			pageURL: "/login",
		},

		{
			menuTitle: "Sign Up",
			pageURL: "/signup",
		},
	];

  return (
		<div className={classes.root}>
			<AppBar position="static" color="info">
				<Toolbar>
					<IconButton color="inherit">
						<HomeIcon onClick={() => handleButtonClick("/")} fontSize="large" />
					</IconButton>
					{isMobile ? (
						<>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={handleMenu}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={() => setAnchorEl(null)}
							>
								{menuItems.map((menuItem) => {
									const { menuTitle, pageURL } = menuItem;
									return (
										<MenuItem onClick={() => handleMenuClick(pageURL)}>
											{menuTitle}
										</MenuItem>
									);
								})}
							</Menu>
						</>
					) : (
						<div className={classes.headerOptions}>
							{menuItems.map((menuItem) => {
								const { menuTitle, pageURL } = menuItem;
								return (
									<Button
										color="inherit"
										onClick={() => handleButtonClick(pageURL)}
									>
										{menuTitle}
									</Button>
								);
							})}
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withRouter(Header);
