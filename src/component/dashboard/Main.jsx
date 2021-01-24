import React, { Component, Fragment } from 'react';
import Post from '../../container/Post/Post';
import {
    BrowserRouter as Router,
    //Route
} from 'react-router-dom';
//import DetailPost from '../../container/DetailPost/DetailPost'
import './Main.css';
import axios from 'axios';

class Main extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI()
        })
    }

    handleFromChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost}
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        }, (err) => {
            console.log("error id: ", err)
        })
    }

    putDataAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
        this.getPostAPI()
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            },
        })
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataAPI();
        } else {
            this.postDataAPI();
        }
        
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    // handleDetail = (id) => {
    //     this.props.history.push(`/detail-post/${id}`);
    // }

    componentDidMount() {
        this.getPostAPI()
    }

    render() {
        return (
            <Router><Fragment>  
    <div class="all">
                <h1 class="h1">Buat Pekerjaan</h1>
                <div className="form-add-post">
                    <label htmlFor="title">
                        <label htmlFor="body" class="nama">Nama Pekerjaan : </label>
                        <input 
                        type="text" 
                        value={this.state.formBlogPost.title} 
                        name="title" 
                        placeholder="Nama Pekerjaan" 
                        onChange={this.handleFromChange}/>
                        <br></br>
                        <label htmlFor="body" class="content">Deskripsi : </label>
                        <br></br>
                        <textarea 
                        name="body" id="body-content" 
                        value={this.state.formBlogPost.body} 
                        placeholder="Tambahkan Deskripsi"
                        onChange={this.handleFromChange} ></textarea>
                        <button 
                        className="btn-post" 
                        onClick={this.handleSubmit}>Post</button>
                    </label>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post 
                        key={post.id} 
                        data={post} 
                        remove={this.handleRemove} 
                        update={this.handleUpdate}
                        goDetail={this.handleDetail}/>
                    })
                }
                </div>
                {/* <Route path="/detail-post/:postID" component={DetailPost} /> */}
            </Fragment></Router>
        );
    }
}

export default Main;