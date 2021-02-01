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
import {HowTo} from './HowTo'

const useStyles = makeStyles((theme) => ({
	root: {
    maxWidth: 345,
    margin: "40px auto"
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
  },
  
	
	
}));

export function UserHome(){
  //This data should be fetched from the server using an axios get request in a useEffect hook that runs on first render
  const [howtoData, setHowToData] = useState([
    {title: "How to brush your teeth", author: "Anonymous", content: "So basically you get a toothbrush", id:0},
    {title: "10 crazy cooking tips!", author: "Epic Youtube Vidz", content: "Click the link to view the video!", id:1},
    {title: "Other uses for toothpicks", author: "testuser", content: "They aren't just for cleaning your teeth.", id:2},
  ])
  //Will probably need a page system to account for multiple pages of how-tos, could be done server side (ideally) or I could come up with a local solution
  const classes = useStyles();
	return (
		<div>
			{howtoData.map((howtoData) =>{
      const { title, author, content, id } = howtoData;
      return (
			
			<Card className={classes.root} key={howtoData.id} mx="auto">
				<CardHeader
					title={title}
          subheader={author}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{content}
					</Typography>
				</CardContent>
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
    </div>
	);
  
}

