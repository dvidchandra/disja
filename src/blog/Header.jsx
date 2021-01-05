import React from 'react';
import { Fragment } from 'react';
import { Navbar, NavLink  } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Fragment>
            <Navbar bg="light">
                <Navbar.Brand>DISJA</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                <NavLink>Masuk Sebagai Pekerja</NavLink>
                <NavLink>Buat Pekerjaan</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Header;