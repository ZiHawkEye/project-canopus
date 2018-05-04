import React from 'react';
// import '../styles/Login.css';

class Login extends React.Component {
    // I don't think this is very secure - hashing should be done client side?
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: ""
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
                console.log("Success");
            } else {
                console.log("Failed");
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Username' onChange={this.handleChange.bind(this, "username")}/>
                <input type='password' placeholder='Password' onChange={this.handleChange.bind(this, "password")}/>
                <input type='submit' value="Login"/>
            </form>
        );
    }
}

export default Login;