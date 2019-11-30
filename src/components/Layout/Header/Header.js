import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse } from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar className="background-primary" expand="md">
          <div className="container">
          <MDBNavbarBrand>
            <a href="/"><img src="images/arckade-logo.png" alt="logo" style={{
                height: '43px'

            }}/></a>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
                <button style={{
                  backgroundColor: '#808080',
                  color: 'white',
                  padding: '8px'
                }}>Retour au site</button>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
          </div>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;