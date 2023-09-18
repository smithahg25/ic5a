import React from 'react';
import { Dropdown } from 'react-bootstrap';

const About = () => {
  return (
    <div className="container my-4">
      <h2>About Page</h2>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select an item
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Burger</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Pizza</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Noodles</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Pasta</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default About;
