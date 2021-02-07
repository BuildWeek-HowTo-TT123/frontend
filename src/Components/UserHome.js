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
  LocalDining,
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
  const [newestToOldest, setNewestToOldest] = useState(localStorage.getItem('newestFirst') ? localStorage.getItem('newestFirst') : true);
  const [howtoData, setHowToData] = useState();
  const [searchResults, setSearchResults] = useState();
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewingAll, setViewingAll] = useState(true);
  //Will probably need a page system to account for multiple pages of how-tos, could be done server side (ideally) or I could come up with a local solution
  const setUpPages = (data) =>{
    if(!data)
      return;
    let page = 0;
    let pageArray = [];
    data.forEach(howto => {
      if(!pageArray[page]){
        pageArray[page] = [];
      }   
      else if(pageArray[page].length === 6){
        page++;
        pageArray[page] = [];
      }
      pageArray[page].push(howto)
    });
    setPages(pageArray);
  }
  const changePage = (which) =>{
    if(which === "next" && pages.length > currentPage+1)
      setCurrentPage(currentPage+1);
    else if(which === "previous" && currentPage !== 0)
      setCurrentPage(currentPage-1);
  }
  useEffect(() => {
    axiosWithAuth().get('/how-to')
    .then(res => {
      if(localStorage.getItem('newestFirst') === null){
        localStorage.setItem('newestFirst', true);
        let data = res.data;
        let reverse = data.reverse();
        setHowToData(reverse);
        setSearchResults(reverse);
      }
      else if(localStorage.getItem('newestFirst') === 'true'){
        let data = res.data;
        let reverse = data.reverse();
        setHowToData(reverse);
        setSearchResults(reverse);
      }
      else if(localStorage.getItem('newestFirst') === 'false'){
        setHowToData(res.data);
        setSearchResults(res.data);
      }
      
      
    })
    .catch(err => console.log(err));
  }, [])
  useEffect(() => {
    setUpPages(searchResults);
  }, [searchResults, localStorage.getItem('newestFirst')])
  const classes = useStyles();

  const handleButtonClick = (pageURL) => {
      history.push(pageURL);
  };

  const timeFilter = () => {
    //might want to persist this via localStorage
    let results = searchResults;
    let reverse = searchResults.reverse();
    setSearchResults(reverse);
    setNewestToOldest(!newestToOldest);
    if(localStorage.getItem('newestFirst') === 'true')
      localStorage.setItem('newestFirst', false);
    else
      localStorage.setItem('newestFirst', true);
  }

  const searchFilter = (e) => {
    setSearchResults(
      howtoData.filter((howto) => {
        return howto.title.includes(e.target.value)
      })
    )
  }

  const userFilter = () => {
    if(viewingAll){
      setSearchResults(
        howtoData.filter((howto) => {
          return howto.topic === (JSON.parse(localStorage.getItem('user')).username)
        })
      )
      setViewingAll(false);
    }
    else{
      setSearchResults(howtoData);
      setViewingAll(true);
    }
    
  }
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
      <input placeholder="Search..." onChange={searchFilter}/>
        </Container>
        {!pages &&
          <h1>LOADING...</h1>
        }
        <Grid container spacing={3} sm={12} md={6} lg={12}>
        
			{pages && pages.length > 0 && pages[currentPage].map((howtoData) =>{
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
    <Button onClick={() => changePage("previous")}>Previous page</Button>
    <Button onClick={() => changePage("next")}>Next page</Button>
    <Button onClick={timeFilter}>{localStorage.getItem('newestFirst') === 'true' ? "Newest First" : "Oldest First"}</Button>
    <Button onClick={userFilter}>{viewingAll ? "All Posts" : "Your Posts"}</Button>
	  </Container>
	</div>
	);
  
}

