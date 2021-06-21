import react from "react";
import { Link } from "react-router-dom";
import PostsForm from "../Components/PostsForm";
class Board extends react.Component {
    state = {
        posts: []
    };

    submit = () => {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const username = document.getElementById('username').value;
        alert(JSON.stringify({
            "title": title,
            "content": content,
            "username": username
        })
        )
    }
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/Boards');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <Link
                            to={{
                                pathname: `Board/${item.id}`,
                                state: {
                                    title: item.title,
                                    content: item.content,
                                    username: item.username
                                }
                            }}
                        >
                            <h1>{item.title}</h1>
                        </Link>
                    </div>
                ))}
                <PostsForm />

            </div>
        );
    }
}

export default Board;