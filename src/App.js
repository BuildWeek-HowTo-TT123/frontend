import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import {Login} from './Components/Login';
import {Signup} from './Components/Signup';
import {MainPage} from './Components/MainPage';
import {UserHome} from './Components/UserHome';
import {HowToForm} from './Components/HowToForm';
import {HowToPage} from './Components/HowToPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" component={UserHome} />
      <Route exact path="/create" component={HowToForm} />
      <Route path="/howto/:id" component={HowToPage}/>
    </Router>
  );
}

export default App;
