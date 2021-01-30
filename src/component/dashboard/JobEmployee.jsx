import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

class JobEmployee extends Component {
  render() {
    return (
      <Fragment>
        <div className="partJobs mt-2">
          <Container>
            <InputGroup size="sm" className="mb-3">
              <Col sm={6}>
                <FormControl
                  aria-label="Kerja"
                  aria-describedby="Cari Kerja"
                  placeholder="Cari Kerja"
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
      </Fragment>
    );
  }
}

export default JobEmployee;
