import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Task.css";
import {
  Container,
  Col,
  InputGroup,
  FormControl,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";

const Tasks = (props) => {
  return (
    <Container fluid>
      <div class="card">
        <p class="title">{props.name}</p>
        <p>{props.desc}</p>
      </div>
    </Container>
  );
};

const TaskSchedule = () => {
  return (
    <Fragment>
      <div className="partForm">
        <Container>
          <InputGroup size="sm" className="mb-3">
            <Col sm={6}>
              <FormControl
                aria-label="Tugas"
                aria-describedby="Cari Tugas"
                placeholder="Cari tugas"
              />
            </Col>
            <Col sm={4}>
              <Dropdown as={ButtonGroup}>
                <Button variant="light">Sedang Dikerjakan</Button>

                <Dropdown.Toggle
                  split
                  variant="outline-secondary"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Kemarin</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Beberapa hari yang lalu
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Selesai</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Button href="#Cari">Cari</Button>
            </Col>
          </InputGroup>
          <div class="lists">
            <Tasks
              name="Buat 1 form Sign Up"
              desc="Deadline tanggal 31 Januari 2021"
            />
            <Tasks
              name="Buat desain welcome"
              desc="Deadline tanggal 31 Januari 2021"
            />
            <Tasks
              name="Buat UI untuk Admin"
              desc="Deadline tanggal 31 Januari 2021"
            />
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default TaskSchedule;
