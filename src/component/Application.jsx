import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Sidebar from './Sidebar';
import '../component/style/Application.css';

class Application extends Component {
    render() {
        return (
            <Fragment>
                <div className="application-content">
                    <Header />
                    <Sidebar />
                </div>
            </Fragment>
        )
    }
}

export default Application;