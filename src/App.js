import logo from './logo.svg';
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Login";
import {Signup} from './Components/Signup';
import {MainPage} from './Components/MainPage';

function App() {
  return (
		<Router>
			<Route exact path="/" component={MainPage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
		</Router>
	);
}

export default App;
