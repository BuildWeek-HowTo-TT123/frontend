import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	IconButton,
	Typography,
	Grid,
	Container,
	CardActionArea,
	CardMedia,
	Button,
} from "@material-ui/core";

import {
	Favorite as FavoriteIcon,
	ArrowForward as ArrowForwardIcon,
	Add as AddIcon,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

	cardBG: {
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.03)",
		paddingBottom: "60px"
	},
	card: {
		width: "345px",
		margin: "40px auto",
		"&:hover": {
			boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.4)",
		},
	},
	guideContainer: {
		paddingTop: theme.spacing(3),
		
	},

	guideTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
		fontSize: "1.75rem",
	},
	guideHeader: {
		display: "flex",
		justifyContent: "space-between",
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
	},
	guideCreate: {
		paddingTop: "6px",
		borderRadius: "12px",
	},
	buttonFlex: {
		display: "flex",
		
	}
}));



export function UserHome(props){
	const history = useHistory(props);

  //This data should be fetched from the server using an axios get request in a useEffect hook that runs on first render
  const [howtoData, setHowToData] = useState([
    {title: "How to brush your teeth", author: "Anonymous", content: "So basically you get a toothbrush", id:0, img: "https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg"},
    {title: "10 crazy cooking tips!", author: "Epic Youtube Vidz", content: "Click the link to view the video!", id:1, img: "https://images.pexels.com/photos/3298605/pexels-photo-3298605.jpeg"},
    {title: "Other uses for toothpicks", author: "testuser", content: "They aren't just for cleaning your teeth.", id:2, img: "https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg"},
  ])
  //Will probably need a page system to account for multiple pages of how-tos, could be done server side (ideally) or I could come up with a local solution
  //const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    localStorage.removeItem("token");
    alert("You've Logged Out!");
    history.push("/");
  }

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };
	return (
<div className={classes.cardBG}>
	<Container maxWidth="lg" className={classes.guideContainer}>
		<Container maxWidth="lg" className={classes.guideHeader}>
			<Typography variant="h4" className={classes.guideTitle}>
			Guides
			</Typography>
			<Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={() => handleButtonClick("/create")} className={classes.guideCreate} >
				Create New
			</Button>
      <Button onClick={logout}>
        Log out
      </Button>
        </Container>
        <Grid container spacing={3} sm={12} md={6} lg={12}>
			{howtoData.map((howtoData) =>{
      const { title, author, content, id, img } = howtoData;
      return (
		
			<Card className={classes.card} key={howtoData.id} mx="auto" raised>
			<CardActionArea component={Link} to={`/howto/${id}`}>
				<CardHeader
					title={title}
          			subheader={author}
				/>
				<CardMedia
        			className={classes.media}
        			image={img}
        			title="toothbrush"
      			/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{content}
					</Typography>
				</CardContent>
				</CardActionArea>
				
				<CardActions >
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="read more" style={{marginLeft: "auto"}}>
						<ArrowForwardIcon/>
					</IconButton>
				</CardActions>
				
			</Card>
      );
      })}
	  </Grid>	
	  </Container>
	</div>
	);
  
}

