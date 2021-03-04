import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Header() {
    const NavigationBar = () => {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/home">AlmaBetter</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/enter">Enter Marks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/leaderboard">Leader Board</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }

    return (
        <div>
            <NavigationBar/>
        </div>
    )
}

export default Header;
