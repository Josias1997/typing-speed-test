import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBBtn, MDBDropdownItem,
} from "mdbreact";

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
            <button className="bg-dark"><img src="images/arckade-logo.png" alt="logo" style={{
                height: '55px'

            }}/></button>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle caret color="blue-grey">
                  <span className="mr-2">Autres <strong>durées</strong> de test</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={() => this.props.setTime(30)}>30</MDBDropdownItem>
                  <MDBDropdownItem onClick={() => this.props.setTime(60)}>60</MDBDropdownItem>
                  <MDBDropdownItem onClick={() => this.props.setTime(120)}>120</MDBDropdownItem>
                  <MDBDropdownItem onClick={() => this.props.setTime(180)}>180</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
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