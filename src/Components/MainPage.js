import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";

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
}));

export function MainPage(){
  const classes = useStyles();
	return (
		<>
			<Box className={classes.hero}>
				<Box></Box>
			</Box>
		</>
	);
}