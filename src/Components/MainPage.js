import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Search } from "../imgs/Search.svg";
import { ReactComponent as CreateImg } from "../imgs/CreateImg.svg";
import { ReactComponent as Favorite } from "../imgs/Favorite.svg";




const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#fff",
	},
	hero: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?cs=srgb&dl=pexels-olia-danilevich-5088008.jpg&fm=jpg')`,
		height: "90vh",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		fontSize: "4rem",
	},
	heroText: {
		width: "80%",
	},
	ctaButton: {
		fontSize: "20px",
		borderRadius: "100px",
	},
	img1: {
		maxWidth: "450px",
	},
	aboutTextC: {
		width: "90%",
		marginLeft: "auto",
	},
	infoBox: {
		padding: "0 80px",
	},
}));

export function MainPage(props) {
	const history = useHistory(props);
	const classes = useStyles();
	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};
	return (
		<>
			<Box className={classes.hero}>
				<Grid className={classes.heroText}>
					<Typography variant="h1" color="initial">
						The best how to guide website!
					</Typography>
					<Button
						variant="contained"
						color="primary"
						className={classes.ctaButton}
						onClick={() => handleButtonClick("/signup")}
					>
						Get Started
					</Button>
				</Grid>
			</Box>
			<Box className={classes.aboutTextC} spacing={6}>
				<Grid container spacing={0} flex alignItems={"center"}>
					<Grid item md={6} className={classes.infoBox}>
						<Typography variant="h4" color="initial" alignItems={"center"}>
							Search user created guides for the perfect solution to your
							problems.
						</Typography>
					</Grid>
					<Grid item md={6}>
						<Search className={classes.img1} />
					</Grid>
				</Grid>
			</Box>
			<Box className={classes.aboutTextC}>
				<Grid container spacing={0} flex alignItems={"center"}>
					<Grid item md={6}>
						<CreateImg className={classes.img1} />
					</Grid>
					<Grid item md={6} className={classes.infoBox}>
						<Typography variant="h4" color="initial" alignItems={"center"}>
							Create and share you're own guides to help other users.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box className={classes.aboutTextC} spacing={6}>
				<Grid container spacing={0} flex alignItems={"center"}>
					<Grid item md={6} className={classes.infoBox}>
						<Typography variant="h4" color="initial" alignItems={"center"}>
							Favorite other users post that you find helpful
						</Typography>
					</Grid>
					<Grid item md={6}>
						<Favorite className={classes.img1} />
					</Grid>
				</Grid>
			</Box>
		</>
	);
}