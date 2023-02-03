import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          Grace Hopper Wisdom
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="mr-auto" navbar>
            {isLoggedIn && (
              <>
                <div>
                  <Link tag={RRNavLink} to="/add">
                    Add Quote
                  </Link>
                </div>
                <div>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </div>
              </>
            )}
            {!isLoggedIn && (
              <>
                <div>
                  <Link tag={RRNavLink} to="/login">
                    Login
                  </Link>
                </div>
                <div>
                  <Link tag={RRNavLink} to="/register">
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
          <Nav navbar>
            <NavItem>
              <a
                aria-current="page"
                className="nav-link"
                href="https://www.youtube.com/watch?v=3N_ywhx6_K0"
                target="_new"
              >
                Grace Hopper on Letterman
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
