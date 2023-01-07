import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DashBoard.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={1} className="dashboard-left"></Col>
          <Col xs={11}>
            <div className="mt-2">
              <Navbar>
                <Container>
                  <Nav>
                    <Nav.Link
                      style={{ backgroundColor: "gray" }}
                      href="/OtherDetails"
                    >
                      Other Details
                    </Nav.Link>
                    <Nav.Link
                      style={{ backgroundColor: "gray" }}
                      href="/Address"
                    >
                      Address
                    </Nav.Link>
                    <Nav.Link
                      style={{ backgroundColor: "gray" }}
                      href="/ContactPerson"
                    >
                      Contact Person
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
              <Outlet></Outlet>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashBoard;
