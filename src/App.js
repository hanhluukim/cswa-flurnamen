import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Project from "./components/Project";
import Flurnamen from "./components/Flurnamen";
import Erfassung from "./components/Erfassung";
import Profile from "./components/Profile";
import Search from "./components/Search";


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import Gallery from "./components/Gallery";
import Literatur from "./components/Literatur";
import DBGrundlagen from "./components/Datenbank";

//========================

const App = () => {
  
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };


  //Navigation für kleine Geräten
  const [isOpen, setMenuState] = useState(false);

  function toggleCollapse(){
    setMenuState(!isOpen)
  }
  
  //========================
  return (
    <Router history={history}>
      <div class="navigation">
      <MDBNavbar color="green" dark expand="md">
        <MDBNavbarToggler onClick={() => setMenuState(toggleCollapse)} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/flurnamen">Flurnamen</MDBNavLink>
            </MDBNavItem>
            
            <MDBNavItem>
              <MDBNavLink to="/literatur">Literatur</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Projekt</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/projekt">Details</MDBDropdownItem>
                  <MDBDropdownItem href="/gallerie">Gallerie</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/suche">Datensuche</MDBNavLink>
            </MDBNavItem>

            

            {currentUser && (
              <MDBNavItem>
                <MDBNavLink to="/erfassung">Datenerfassung</MDBNavLink>
              </MDBNavItem>
            )}

          </MDBNavbarNav>
          


              {currentUser ? (

                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink to="/profile">{currentUser.username}</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink id="abmeldung-id" to="/anmeldung" onClick={logOut}>Abmeldung</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>        
              ) : (

                <MDBNavbarNav right>
                  <MDBNavItem>
                      <MDBNavLink to="/anmeldung">Anmeldung</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/registerierung">Registrierung</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              )}
        </MDBCollapse>
      </MDBNavbar>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path={["/", "/projekt"]} component={Project} />
            <Route exact path={["/", "/datenbank"]} component={DBGrundlagen} />
            <Route exact path={["/", "/suche"]} component={Search} />
            <Route exact path={["/", "/erfassung"]} component={Erfassung} />
            <Route exact path={["/", "/gallerie"]} component={Gallery} />
            <Route exact path={["/", "/flurnamen"]} component={Flurnamen} />
            <Route exact path={["/", "/literatur"]} component={Literatur} />
            <Route exact path="/anmeldung" component={Login} />
            <Route exact path="/registerierung" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;