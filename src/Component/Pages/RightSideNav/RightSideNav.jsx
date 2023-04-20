import React from 'react';
import "./Rightside.css"
import { Button, ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from '../../Qzon/Qzone';
const RightSideNav = () => {
  return (
    <div>
      <div className="login mt-4 d-flex gap-2 flex-column">
        <Button variant="outline-primary " className="">
          <FaGoogle /> Log in with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub />
          Log in with Git Hub
        </Button>{" "}
      </div>

      <div className="mt-5 fw-semibold  ">
        <h4>Find us On</h4>
        <div className="list-group ">
          <ListGroup className="d-flex gap-2">
            <ListGroup.Item className="d-flex gap-2 align-items-center text-bg-primary">
              {" "}
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item className="d-flex gap-2 align-items-center text-bg-primary">
              {" "}
              <FaTwitter />
              Twitter
            </ListGroup.Item>
            <ListGroup.Item className="d-flex gap-2 align-items-center text-bg-primary">
              {" "}
              <FaInstagram />
              Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <div className="qzon">
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightSideNav;