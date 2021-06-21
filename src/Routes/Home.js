import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Home extends React.Component {
    state = {};
    componentDidMount() {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1:8000/auth', config)
            .then(
                res => {
                    this.setState({
                        user: res.data
                    })
                }
            )
    }
    render() {
        if (this.state.user) {
            return <h2> Hi {this.state.user.username}</h2>
        }
        return (
            <div>
                <span> hello</span>
                <Link to="/ScreenSharing">
                    ScreenSharing
                </Link>
                <div> </div>
                <Link to="/Board">
                    Board
                </Link>
                <div> </div>
                <Link to="/Login">
                    Login
                </Link>

            </div>
        )
    }
}

export default Home;