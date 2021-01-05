import React, { Component, Fragment } from 'react';
import ContentSearch from './ContentSearch';
import Header from './Header';

class Blog extends Component {
    render() {
        //gk bisa styling backgroundnya
        return (
            <Fragment>
                <Header />
                <ContentSearch />
            </Fragment>
        )
    }
}

export default Blog;