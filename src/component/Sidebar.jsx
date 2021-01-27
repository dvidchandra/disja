import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/style/Sidebar.css';
import { Row, Col, Tab, Nav } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <p>Hello</p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <p>Guys</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
    )
}

export default Sidebar;