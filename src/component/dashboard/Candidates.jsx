import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Tab,
  Tabs,
  Container,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Main from "./Main";

class Candidates extends Component {
  render() {
    return (
      <Fragment>
        <div className="partForm">
          <Container>
            <InputGroup size="sm" className="mb-3">
              <Col sm={6}>
                <FormControl
                  aria-label="Kandidat"
                  aria-describedby="Cari Kandidat"
                  placeholder="Cari Kandidat"
                />
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <FormControl
                    placeholder="Lokasi"
                    aria-label="Lokasi Kerja"
                    aria-describedby="basic-addon2"
                  />
                  <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                  >
                    <Dropdown.Item href="#">Jakarta</Dropdown.Item>
                    <Dropdown.Item href="#">Sumatera Utara</Dropdown.Item>
                    <Dropdown.Item href="#">Jawa Barat</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Col>
              <Col>
                <Button href="#Cari">Cari</Button>
              </Col>
            </InputGroup>
          </Container>
        </div>
        <Tabs defaultActiveKey="profile">
          <Tab eventKey="searchCandidate" title="Cari Kandidat"></Tab>
          <Tab eventKey="receiveCandidate" title="Kandidat yang diterima">
            <p>Belum ditemukan kandidat yang diterima</p>
          </Tab>
          <Tab eventKey="makeJobs" title="Buat Pekerjaan">
            <Main />
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

export default Candidates;
