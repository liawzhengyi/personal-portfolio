import { useState } from "react";
import { Navbar, Container} from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActivelink] = useState('home');
    
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src = {''} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                {/* <a href="#"> <img src={} alt=""/> </a>
                <a href="#"> <img src={} alt=""/> </a>
                <a href="#"> <img src={} alt=""/> </a> */}
            </div>
            <button className="vvd" onClick={() => console.log('connect')}> <span>Let's connect</span> </button>
          </span>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
    );
}


{/* <Nav.Link href="#link">
                Link
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown> */}