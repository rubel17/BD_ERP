import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";
import { InboxIcon } from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <>
      <div className="border-bottom border-secondary">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Bars4Icon style={{ width: "30px" }} className=" text-blue-500" />
            <Navbar.Brand
              className="ms-2 text-success fs-4 fw-semibold"
              href="#"
            >
              Deshoj Food
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* 
                <Nav.Link href="#">Other details</Nav.Link>
                <Nav.Link href="#">Address</Nav.Link> 
                <Nav.Link href="/ContactPerson">Contact Person</Nav.Link>*/}
              </Nav>
              <CogIcon
                style={{ width: "20px", color: "green" }}
                className="ms-2"
              />
              <BellIcon
                style={{ width: "20px", color: "green" }}
                className="ms-2"
              />
              <InboxIcon
                style={{ width: "20px", color: "green" }}
                className="ms-2"
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
