import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar } from 'react-bootstrap';
import '../component/style/Header.css';
import notification from '../images/icons/notification.svg';
import profileExample from '../images/icons/profile_example.png';

const Header = () => {
    return (
        <div className="header-nav">
            <Navbar>
                <Navbar.Brand href="#home" className="title text-primary">DISJA</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <img src={notification} className="notif" alt="notifikasi"/>
                    <img src={profileExample} className="profile" alt="notifikasi"/>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;