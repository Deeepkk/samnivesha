import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../../assets/img/samnivesha.png";
import logoVerdant from "../../assets/img/Logo - Verdant Odyssey.svg";
import arrow from "../../assets/img/arrow.svg";
import { Navbar, NavLink, Container } from "reactstrap";
import "./navStyle.css";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondaryOpen: false,
    };
  }



  componentDidMount() {
    // Handle component mount logic if needed
  }

  render() {
    return (
      <Navbar className="fixed-top" color-on-scroll="100" expand="lg">
        <Container>
          <header className="cd-header">
            <div className="cd-logo">
              <ul>
                <NavLink href="/">
                  <img src={logo} alt="Logo" style={{ maxHeight: "45px" }} />
                  <img src={logoVerdant} className="nav-logo-verdant" alt="Logo" style={{ maxHeight: "45px" }} />
                </NavLink>
              </ul>
            </div>

            <ul className="nav-desktop-primary">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li
                onMouseOver={() =>
                  this.setState({
                    secondaryOpen: true,
                  })
                }
                onMouseLeave={() =>
                  this.setState({
                    secondaryOpen: false,
                  })
                }>
                <Link className="nav-menu-opener" style={this.state.secondaryOpen ? { textDecoration: "underline" } : {}}>
                  THE FEST
                </Link>

                {this.state.secondaryOpen && (
                  <div className="nav-desktop-secondary">
                    <Link to="/gallery">GALLERY</Link>
                    <Link to="/sponsors">SPONSORS</Link>
                    <Link to="/Team">OUR TEAM</Link>
                  </div>
                )}
              </li>

              

              <li className="nav-primary-separator">
                <span>|</span>
              </li>
 <li>
                <Link to="/events-page" className="nav-desktop-register">EVENTS</Link>
              </li>
               
            </ul>

            <div
              className="nav-but-wrap"
             onClick={() => {
								document.getElementsByClassName("cd-header").item(0).classList.toggle("menu-is-open");
								document.getElementsByClassName("menu-icon").item(0).classList.toggle("open");
								if (document.getElementsByClassName("cd-primary-nav").item(0).classList.contains("is-visible")) {
									document.getElementsByClassName("cd-primary-nav").item(0).classList.remove("is-visible");
									document.body.classList.remove("overflow-hidden");
								} else {
									document.getElementsByClassName("cd-primary-nav").item(0).classList.add("is-visible");
									document.body.classList.add("overflow-hidden");
								}
							}}>
              <div className="menu-icon hover-target">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line menu-icon__line-up"></span>
                <span className="menu-icon__line menu-icon__line-down"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
              </div>
            </div>
          </header>
          <nav>
            <ul className="nav-mobile-primary cd-primary-nav">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li
                onClick={() =>
                  this.setState({
                    secondaryOpen: !this.state.secondaryOpen,
                  })
                }
                onMouseLeave={() =>
                  this.setState({
                    secondaryOpen: false,
                  })
                }>
                <div>
                  <span className="nav-menu-opener">THE FEST</span>
                  <img src={arrow} className="nav-mobile-opener" style={this.state.secondaryOpen ? { transform: "translate(10px, -3px) rotate(0deg)" } : {}} alt="" />
                </div>

                {this.state.secondaryOpen && (
                  <div className="nav-mobile-secondary">
                    <Link to="/gallery">GALLERY</Link>
                    <Link to="/sponsors">SPONSORS</Link>
                    <Link to="/Team">OUR TEAM</Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/events-page">EVENTS</Link>
              </li>
                  <li>
                    <Link to="/register-page" className="nav-desktop-register">
                      REGISTER
                    </Link>
                  </li>
               
            </ul>
          </nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(ComponentsNavbar);
// export default ComponentsNavbar;  // No need for compose, connect, and export with Redux removed

