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
            supervisor: false,
            student_number: '',
            birth: ''
        },
        check: {
            password2: ''
        }
    }

    register = event => {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(() => {
                window.location = "http://localhost:3000/";
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

    inputDateChanged = (e) => {
        this.setState({ birth: e.target.value })
    }

    handleSubmit = e => {

    }


    render() {
        return (
            <div className="form-container">
                <div className="form-content-right">
                    <div className="form">
                        <h1>
                            Get started with us today! Create your account by filling out the information below.
                    </h1>
                        <div className="form-inputs">
                            <label htmlFor="username" className="form-label">
                                ID *
                        </label>
                            <input id='username' type='text' name='username' className="form-input" placeholder="Enter your ID" value={this.state.credentials.username} onChange={this.inputChanged} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="nickname" className="form-label">
                                Nickname
                        </label>
                            <input id='nickname' type='text' name='nickname' className="form-input" placeholder="Enter your nickname" value={this.state.credentials.nickname} onChange={this.inputChanged} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="email" className="form-label">
                                Email *
                        </label>
                            <input id='email' type='email' name='email' className="form-input" placeholder="Enter your email" value={this.state.credentials.email} onChange={this.inputChanged} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="student_number" className="form-label">
                                Student Number *
                        </label>
                            <input id='student_number' type='student_number' name='student_number' className="form-input" placeholder="Enter your Student Number" value={this.state.credentials.student_number} onChange={this.inputChanged} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password" className="form-label">
                                Password *
                        </label>
                            <input id='password' type='password' name='password' className="form-input" placeholder="Enter your password" value={this.state.credentials.password} onChange={this.inputChanged} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password2" className="form-label">
                                Confirm Password *
                        </label>
                            <input id='password2' type='password' name='password2' className="form-input" placeholder="Enter your password again" value={this.state.check.password2} onChange={this.inputChanged2} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="birth" className="form-label">
                                Birth Date *
                        </label>
                            <input id='birth' type='date' name='birth' className="form-input" onChange={this.inputChanged} />
                        </div>
                        <button className="form-input-btn" type='submit' onClick={this.register}>
                            Sign up
                    </button>
                        <span className="form-input-login">
                            Already have an account? Login <Link to="/Login">here</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }







}

export default Signup;



