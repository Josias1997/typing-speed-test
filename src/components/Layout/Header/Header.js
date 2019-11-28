import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBBtn } from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="elegant-color" dark expand="md">
          <div className="container">
          <MDBNavbarBrand>
            <a href="/"><img src="images/arckade-logo.png" alt="logo" style={{
                height: '55px'

            }}/></a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
                <MDBBtn color="grey">Retour au site</MDBBtn>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
          </div>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;