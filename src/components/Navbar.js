import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap";


export default function Nav() {

  return  (
    <div>
      <Navbar>
      <Container>
          <Navbar.Brand href="#home">My travel Journal</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
