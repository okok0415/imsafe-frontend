import React from 'react';
import { Link } from "react-router-dom";

import "../CSS/Login/Form.css";
class Signup extends React.Component {
    state = {
        credentials: {
            username: '',
            nickname: '',
            email: '',
            password: '',
            supervisor: false
        },
        check: {
            password2: ''
        }
    }
    login = event => {
        fetch('http://127.0.0.1:8000/auth/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    localStorage.setItem('token', data.token)
                    this.props.userLogin(data.token);
                    alert(data.token);
                }
            )
            .catch(error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }

    inputChanged2 = event => {
        const cred = this.state.check;
        cred[event.target.name] = event.target.value;
        this.setState({ check: cred });
    }


    handleSubmit = e => {

    }

    enterkey = () => {
        if (window.event.keyCode === 13) {
            this.login()
        }
    }

    render() {
        return (
            <div className="form-container">
                <div className="form-content-right">
                    <div className="form">
                        <h1>
                            Get started with us today! Sign in by filling out the information below.
                    </h1>
                        <div className="form-inputs">
                            <label htmlFor="username" className="form-label">
                                ID *
                        </label>
                            <input id='username' type='text' name='username' className="form-input" placeholder="Enter your ID" value={this.state.credentials.username} onChange={this.inputChanged} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password" className="form-label">
                                Password *
                        </label>
                            <input id='password' type='password' name='password' className="form-input" placeholder="Enter your password" value={this.state.credentials.password} onChange={this.inputChanged} />
                        </div>

                        <button className="form-input-btn" type='submit' onClick={this.login}>
                            Sign in
                    </button>
                        <span className="form-input-login">
                            Don't you have an account? Signup <Link to="/Signup">here</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }







}

export default Signup;

