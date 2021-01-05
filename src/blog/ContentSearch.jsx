import React, { Fragment } from 'react';
import { Container, 
    Row, 
    Col,
    Button, 
    Form,
    Image} 
    from 'react-bootstrap';

const ContentSearch = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="text-center">
                            <h2>Selamat Datang di DISJA</h2>
                            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="searchComponent justify-content-start">
                        <Form>
                            <Form.Row>
                                <Col>
                                    <input type="text" placeholder="Cari Pekerjaan"/>
                                </Col>
                                <Col>
                                    <Form.Control as="select" custom placeholder="Lokasi">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                <Button href="#" variant="outline-primary">Cari</Button>  
                                </Col>
                            </Form.Row>
                        </Form>
                    </div>
                </Row>
                <Col lg={4}>
                    <Image src=".images/image_welcome.png" alt="vector_disability"/>
                </Col>
            </Container>
        </Fragment>
    )
}

export default ContentSearch;


