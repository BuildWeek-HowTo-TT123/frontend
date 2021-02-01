import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { BrowserRouter, Link } from "react-router-dom";
import {HowToPage} from './HowToPage'


const useStyles = makeStyles((theme) => ({
	card: {
    width: "345px",
	margin: "40px auto",
		"&:hover": {
			boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.4)",
		}
	},
	guideContainer: {
		paddingTop: theme.spacing(3)
	  },
	 
	  guideTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3)
	  },
	  guideHeader: {
		display: "flex",
		justifyContent: "space-between"
	  },
	media: {
		height: 0,
		paddingTop: "56.25%", 
  	},
	guideCreate: {
		paddingTop: "6px",
		borderRadius: "12px"
	},
  
	
	
}));


export function UserHome(){
  //This data should be fetched from the server using an axios get request in a useEffect hook that runs on first render
  const [howtoData, setHowToData] = useState([
    {title: "How to brush your teeth", author: "Anonymous", content: "So basically you get a toothbrush", id:0, img: "https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {title: "10 crazy cooking tips!", author: "Epic Youtube Vidz", content: "Click the link to view the video!", id:1, img: "https://images.pexels.com/photos/3298605/pexels-photo-3298605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {title: "Other uses for toothpicks", author: "testuser", content: "They aren't just for cleaning your teeth.", id:2, img: "https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  ])
  //Will probably need a page system to account for multiple pages of how-tos, could be done server side (ideally) or I could come up with a local solution
  const classes = useStyles();
	return (
	<Container maxWidth="lg" className={classes.guideContainer}>
		<Container maxWidth="lg" className={classes.guideHeader}>
			<Typography variant="h4" className={classes.guideTitle}>
			Guides
			</Typography>
			<Button variant="contained" color="secondary" startIcon={<AddIcon />} className={classes.guideCreate}>
				Create New
			</Button>
        </Container>
        <Grid container spacing={3} sm={12} md={6} lg={12}>
			{howtoData.map((howtoData) =>{
      const { title, author, content, id, img } = howtoData;
      return (
		
			<Card className={classes.card} key={howtoData.id} mx="auto" raised>
			<CardActionArea component={Link} to={`/howto/:${id}`}>
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
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
      );
      })}
	  </Grid>	
	  </Container>
    
	);
  
}

