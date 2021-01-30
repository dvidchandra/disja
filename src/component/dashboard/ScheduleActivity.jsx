import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ScheduleActivity.css";
import { Container, Button, Tabs, Tab } from "react-bootstrap";

class ScheduleActivity extends Component {
  render() {
    return (
      <Fragment>
        <div className="partSchedule mt-2">
          <Container>
            <Button variant="primary">Buat Jadwal Baru</Button>
          </Container>
        </div>
        <Container>
          <div className="schList mt-5">
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="Monday" title="Senin"></Tab>
              <Tab eventKey="Tuesday" title="Selasa"></Tab>
              <Tab eventKey="Wednesday" title="Rabu"></Tab>
              <Tab eventKey="Thursday" title="Kamis"></Tab>
              <Tab eventKey="Friday" title="Jumat"></Tab>
              <Tab eventKey="Saturday" title="Sabtu"></Tab>
              <Tab eventKey="Sunday" title="Minggu"></Tab>
            </Tabs>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default ScheduleActivity;
