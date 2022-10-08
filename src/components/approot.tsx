import React from 'react';
// for the navbar
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// for the accordion
import Accordion from 'react-bootstrap/Accordion';
// our content...
import { MuiButtons } from './muibuttons';
import { RbsNavbar } from './rbsnavbar';
import { PRDataTable } from './prdatatable';

import './approot.css';

type oProps = {};
type oState = {};

export class AppRoot extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const id = event?.currentTarget?.id;
    console.info('clickHandler', id, this.state);
  }

  callbackHandler(data: object): void {
    console.info('callback', JSON.stringify(data));
  }

  render() {
    return (
      <React.Fragment>
        <div className="approot">
          <Navbar key="1" expand="1" className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#"><strong>react-first-app</strong> by team-bounce</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-1`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-1`}
                aria-labelledby={`offcanvasNavbarLabel-expand-1`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-1`}>
                    react-first-app menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-1`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Data Table using Prime React, with a service over json files
                (PRDataTable)
              </Accordion.Header>
              <Accordion.Body>
                <PRDataTable />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Buttons using Material UI (MuiButtons)
              </Accordion.Header>
              <Accordion.Body>
                <MuiButtons />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Navbar using React-Bootstrap, like the one on this page
                (RbsNavbar)
              </Accordion.Header>
              <Accordion.Body>
                <RbsNavbar />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </React.Fragment>
    );
  }
}
