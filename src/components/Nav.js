import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {

  return  (
    <Navbar bg="danger" style={{justifyContent: "center"}}>
      <Navbar.Brand href="#home" className="text-white"><FontAwesomeIcon icon={faEarthAmericas} />My travel Journal.</Navbar.Brand>
    </Navbar>
  );
}
