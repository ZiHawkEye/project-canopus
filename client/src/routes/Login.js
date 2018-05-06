import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
    // I don't think this is very secure - hashing should be done client side?
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            error_message: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); // need to take into account additional args?
    }

    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/user/search`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        })
        .then(res => res.json(), error => console.error(error))
        .then(verdict => {
            if (verdict) {
                this.setState({
                    error_message: ""
                });
                console.log("Success");
            } else {
                this.setState({
                    error_message: "Incorrect username or password"
                });
                console.log("Failed");
            }
        })
    }

    render() {
        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <span style={{"color": "red"}}>{this.state.error_message}</span>
                <input type='text' placeholder='Username' onChange={this.handleChange.bind(this, "username")}/>
                <input type='password' placeholder='Password' onChange={this.handleChange.bind(this, "password")}/>
                <input type='submit' value="Login"/>
            </form>
        );
    }
}

export default Login;