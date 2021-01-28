import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Sidebar from './Sidebar';
import '../component/style/Application.css';
import {Container} from 'react-bootstrap';

class Application extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid>
                <div className="application-content">
                    <Header />
                    <Sidebar />
                </div>
                </Container>
            </Fragment>
        )
    }
}

export default Application;