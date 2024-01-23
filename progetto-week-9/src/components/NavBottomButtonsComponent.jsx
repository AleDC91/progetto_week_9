import React from "react";
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavBottomButtonsComponent() {
  return (
    <div className="nav-btn">
      <Button className="btn signup-btn" type="button">
        Sign Up
      </Button>
      <Button className="btn login-btn" type="button">
        Login
      </Button>
      <Link to="#">Cookie Policy</Link> &nbsp; | &nbsp;
      <Link to="#">Privacy</Link>
    </div>
  );
}
