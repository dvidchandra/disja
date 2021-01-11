import React, { Component, Fragment } from 'react';
import ContentSearch from '../Home/ContentSearch';
import './Blog.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route, } 
    from 'react-router-dom';
import Home from '../Home/Home';

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div className="bg-edit">
                        <Home />
                        <ContentSearch />
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default Blog;