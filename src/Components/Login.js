


import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./../App.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup size="lg" controlId="email">
					<Input
						autoFocus
						type="email"
            placeholder="Username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormGroup>
				<FormGroup size="lg" controlId="password">
					<Input
						type="password"
            placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormGroup>
				<Button block size="lg" type="submit" disabled={!validateForm()}>
					Login
				</Button>
			</Form>
		</div>
	);
};

export default Login;
