import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';

type oProps = {};
type oState = {};

export class RbsNavbar extends React.Component<oProps, oState> {
  // React-Bootstrap v2.5.0

  constructor(props: oProps) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {}

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    // const button: HTMLButtonElement = event.currentTarget;
    // console.info('App.click', button.name);
  }

  callbackHandler(data: object): void {
    // console.info('callback', JSON.stringify(data));
  }

  render() {
    const {} = this.state;
    return (
      <React.Fragment>
        <p>This is the RbsNavbar Component</p>
        <a
          href="https://react-bootstrap.github.io/components/navbar/"
          target="new"
        >
          More Info...
        </a>
        <br />

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
