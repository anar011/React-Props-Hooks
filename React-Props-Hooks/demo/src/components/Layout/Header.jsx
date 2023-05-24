import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Header() {
    return (
        <div>
            <div  className="navbar">
                <Nav>
                    <NavItem>
                        <NavLink className="navbars" to="/Home">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navbars" to="/contact">
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navbars" to="/employee">
                            Employees
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>




    )
}

export default Header