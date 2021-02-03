import React, { useState, Component } from "react";
import HowTos from './HowTos';
import AddHowToForm from './AddHowToForm';
import axios from 'axios';

import {BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

 export default class HomeToPage extends Component {
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

      return howto;
     }

      
      
    })})
}
/// Delete Todo
delHowTo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/howTos/${id}`)
  .then(res => this.setState({ howTos: [...this.state.howTos.filter
  (howto => howto.id !== id)] }));
}
/// Add Todo
AddHowToForm = (title) => {
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
     
      <Route exact path="/" render={props => (
      <React.Fragment>
        <AddHowToForm AddHowToForm={this.AddHowToForm} />
        <HowTos howTos={this.state.howTos}
         markComplete={this.markComplete} 
         delHowTo={this.delHowTo} />
      </React.Fragment>
      )} />
      </div>
     
    </div>
    </Router>
     );
  }
}
