import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/style/Sidebar.css';
import { 
  Row, 
  Col, 
  Tab, 
  Nav } 
  from 'react-bootstrap';
//icons
import dashboard from '../images/icons/dashboard.svg';
import candidate from '../images/icons/candidate.svg';
import jobs from '../images/icons/suitcase.svg';
import schedule from '../images/icons/clock.svg';
import task from '../images/icons/task.svg';
import settings from '../images/icons/settings.svg';
//Tab Content
import Main from '../component/dashboard/Main';
import TaskSchedule from '../component/dashboard/TaskSchedule';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}  className="in-SideBar">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="chooseSidebar" eventKey="dashboard">
                  <img src={dashboard} className="icon-sidebar" alt="dashboard-icon"/>Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="chooseSidebar" eventKey="jobs">
                  <img src={jobs} className="icon-sidebar" alt="jobs-icon"/>Pekerjaan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="chooseSidebar" eventKey="candidate">
                  <img src={candidate} className="icon-sidebar" alt="candidate-icon"/>Kandidat</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="chooseSidebar" eventKey="schedule">
                  <img src={schedule} className="icon-sidebar" alt="jadwal-icon"/>Jadwal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="chooseSidebar" eventKey="task">
                  <img src={task} className="icon-sidebar" alt="task-icon"/>Tugas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="chooseSidebar" eventKey="settings">
                  <img src={settings} className="icon-sidebar" alt="settings-icon"/>Pengaturan</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="jobs">
                  <Main />
                </Tab.Pane>
                <Tab.Pane eventKey="candidate">
                  <p>Kandidat</p>
                </Tab.Pane>
                <Tab.Pane eventKey="task">
                  <TaskSchedule />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </div>
    )
}

export default Sidebar;