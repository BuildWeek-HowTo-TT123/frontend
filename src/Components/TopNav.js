import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";

const TopNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	function toggle() {
		return setIsOpen(!isOpen);
	}

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">How-To</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar></Nav>
					<NavbarText className="mr-5">Sign-Up</NavbarText>
					<NavLink tag={RRNavLink} exact to="/Login" activeClassName="active">
						Login
					</NavLink>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default TopNav;
