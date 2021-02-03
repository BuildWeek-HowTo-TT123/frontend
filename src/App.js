import logo from './logo.svg';
import "./App.scss";
import Header from "./Components/TopNav";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import {MainPage} from './Components/MainPage';
import {UserHome} from './Components/UserHome';
// import AddHowToForm from './HowToComponent/AddHowToForm';
// import HowToPage from './HowToComponent/HowToPage';


		// <Router>
		// <TopNav/>
		// 	<Route exact path="/" component={MainPage} />
		// 	<Route exact path="/login" component={Login} />
		// 	<Route exact path="/signup" component={Signup} />
		// 	<Route exact path="/home" component={UserHome} />
      	// 	{/* <Route exact path="/create" component={AddHowToForm} /> */}
      	// 	{/* <Route path="/HowToPage/:id" component={HowToPage}/> */}
		// </Router>



import React, { useState, Component } from "react";
import HowTos from './HowToComponent/HowTos';
import AddHowToForm from './HowToComponent/AddHowToForm';
import axios from 'axios';

// import {BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

  class App extends Component {
  state = {
    howTos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/howTos?_limit=8')
    .then(res => this.setState({ howTos: res.data}))
  }
  /// Toggle Complete
  markComplete = (id) => {
    this.setState({ howtos: this.state.howTos.map(howto => {
      if(
        howto.id === id) {
       return {
         ...howto, completed: howto.completed = !howto.completed 
        // howto.completed = !howto.completed
      }
     } else {

<<<<<<< HEAD
      return howto;
     }

      
      
    })})
}
/// Delete Todo
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/howTos/${id}`)
  .then(res => this.setState({ howTos: [...this.state.howTos.filter
  (howto => howto.id !== id)] }));
}
/// Add Todo
AddTodo = (title) => {
 axios.post('https://jsonplaceholder.typicode.com/howTos',{
   title,
   completed: false,
   
 })
 .then(res => {
   

  this.setState({ howTos:
[...this.state.howTos,{...res.data, id: Date.now()}] })});


  //This data should be replaced with a GET request that gets the data of this how-to based on its ID
  // const [data, setData] = useState([
  //   {title: "How to brush your teeth", author: "Anonymous", content: "So basically you get a toothbrush", id:0},
  //   {title: "10 crazy cooking tips!", author: "Epic Youtube Vidz", content: "Click the link to view the video!", id:1},
  //   {title: "Other uses for toothpicks", author: "testuser", content: "They aren't just for cleaning your teeth.", id:2},
  // ])
  // const params = useParams();
}

render(){
    
  return (
    <Router>
    <div className="App">
      <div className='container'>
      {/* <div>
      <p>Title: {data[params.id].title}</p>
      <p>Author: {data[params.id].author}</p>
      <p>Content: {data[params.id].content}</p>
    </div> */}
	<TopNav/>
			<Route exact path="/" component={MainPage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/home" component={UserHome} />
     
      <Route exact path="/" render={props => (
      <React.Fragment>
        <AddHowToForm AddHowToForm={this.AddHowToForm} />
        <HowTos howTos={this.state.howTos}
         markComplete={this.markComplete} 
         delTodo={this.delTodo} />
      </React.Fragment>
      )} />
      {/* <Route path='/about' component={About} /> */}
      </div>
     
    </div>
    </Router>
     );
  }
}


=======
import {PrivateRoute} from './Components/Util/PrivateRoute';

function App() {
  return (
		<Router>
			<Header />
			<Route exact path="/" component={MainPage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/home">
        <UserHome/>
      </PrivateRoute>
			<PrivateRoute exact path="/create">
        <HowToForm/>
      </PrivateRoute>
			<Route path="/howto/:id" component={HowToPage} />
		</Router>
	);
}
//<Route exact path="/home" component={UserHome} />
//<Route exact path="/create" component={HowToForm} />
>>>>>>> 18766d865c4cbdd9f4c9291a1cae5787c3e29e3e
export default App;
