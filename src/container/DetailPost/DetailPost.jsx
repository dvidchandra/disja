import axios from 'axios';
import React, {Component, Fragment} from 'react';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount() {
        let id = this.props.match.params.postID;
        axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            console.log('result: ', res);
            let post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p>{this.state.post.title}</p>
                    <p>{this.state.post.body}</p>
                </div>
            </Fragment>
        )
    }
}

export default DetailPost;