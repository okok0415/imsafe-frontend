import React, { Component } from 'react';

class PostsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            user: '103',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            content: this.state.content,
            user: this.state.user
        }
        console.log(JSON.stringify(post))
        fetch("http://127.0.0.1:8000/api/Boards", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
    }

    render() {
        const { title, content } = this.state;
        const { onChange, onSubmit } = this;
        return (
            <div>
                <h4>New Post</h4>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>title:</label>
                        <input type="text" name="title" value={title} onChange={onChange} />
                    </div>
                    <div>
                        <label>content:</label>
                        <input type="text" name="content" value={content} onChange={onChange} />
                    </div>
                    <div><button type="submit">전송</button></div>
                </form>
            </div>
        );
    }
}

export default PostsForm;