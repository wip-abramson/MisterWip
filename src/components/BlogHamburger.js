/**
 * Created by will on 01/12/18.
 */
import React, {Component} from 'react';
import {Link} from 'gatsby'
// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } = require('mdbreact');

}

class BlogHamburger extends Component {

  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    if (typeof window === `undefined`) {
      return <div/>
    }
    const { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } = require('mdbreact');

    return (

      <Container style={{width: "100%"}}>
        <Navbar color="grey lighten-4" style={{ marginTop: '20px' }} light>
          <Container>
            <NavbarBrand>
              Blog Posts
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse('navbarCollapse1')}/>
            <Collapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <NavItem active>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/phddiary">PhD Diary</Link>
                </NavItem>
                <NavItem>
                  <Link to="/identity">Identity</Link>
                </NavItem>
                <NavItem>
                  <Link to="/blockchain">Blockchain</Link>
                </NavItem>
                <NavItem>
                  <Link to="/software">Software Development</Link>
                </NavItem>
                <NavItem>
                  <Link to="/mydata">MyData</Link>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default BlogHamburger;