import React, { Fragment, Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PageLogin from '../signIn/PageLogin';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Navbar>
                        <Navbar.Brand>DISJA</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Link to="/PageLogin">Masuk Sebagai Pekerja</Link>
                            <Link to="/PageLogin">Buat Pekerjaan</Link>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/PageLogin" component={PageLogin} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Home;