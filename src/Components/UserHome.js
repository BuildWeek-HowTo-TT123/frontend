import { React, useState, useEffect } from "react";
import {axiosWithAuth} from './Util/axiosWithAuth';
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
import { Link, useHistory, useLocation } from "react-router-dom";


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
  //const location = useLocation(props);
  const [howtoData, setHowToData] = useState();
  //const [userInfo, setUserInfo] = useState(localStorage.getItem('user'));
  //Will probably need a page system to account for multiple pages of how-tos, could be done server side (ideally) or I could come up with a local solution
  useEffect(() => {
    //setUserInfo(location.state.user);
    axiosWithAuth().get('/how-to')
    .then(res => {
      setHowToData(res.data)
      //console.log(res);
    })
    .catch(err => console.log(err));
  }, [])
  const classes = useStyles();

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
        </Container>
        <Grid container spacing={3} sm={12} md={6} lg={12}>
			{howtoData && howtoData.map((howtoData) =>{
      const { title, user_id, problem, id, topic} = howtoData;
      return (
		
			<Card className={classes.card} key={howtoData.id} mx="auto" raised>
			<CardActionArea component={Link} to={`/howto/${id}`}>
				<CardHeader
					title={title}
          subheader={topic}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{problem}
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

