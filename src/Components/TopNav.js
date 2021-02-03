import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	
} from "reactstrap";





const TopNav = () => {
	
	const [auth, setAuth] = useState(0)
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		return setIsOpen(!isOpen);
	}

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand tag={RRNavLink} exact to={auth === 1 ? "/HowToPage" : "/"}>How-To</NavbarBrand>
				<UncontrolledDropdown>
					<DropdownToggle nav caret>
						Developer
					</DropdownToggle>
					<DropdownMenu right>
						<DropdownItem onClick={() => setAuth(1)}>Login</DropdownItem>
						<DropdownItem onClick={()=> setAuth(0)}>Sign Out</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar></Nav>

					{auth === 1 ? 
					<NavLink tag={RRNavLink} exact to="/Login" activeClassName="active">
						Log Out
					</NavLink> 
					: 
					<NavLink tag={RRNavLink} exact to="/Login" activeClassName="active">
						Login
					</NavLink>
					}
					{auth === 1 ? 
					<NavLink tag={RRNavLink} exact to="/Login" activeClassName="active">
					Profile
					</NavLink> 
					: 
					<NavLink tag={RRNavLink} exact to="/Login" activeClassName="active">
						Sign Up
					</NavLink>
					}
  
				</Collapse>
			</Navbar>
		</div>
	);
};

export default TopNav;
