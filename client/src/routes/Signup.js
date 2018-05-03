import React from 'react';
// import '../styles/Signup.css';

class Signup extends React.Component {
    // I don't think this is very secure - hashing should be done client side?
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            username_error: "",
            password: "",
            password_error: "",
            confirm: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); // need to take into account additional args?
    }

    // event will be passed as a second param
    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        // requirements to send post data: node: app.use(express.json()), client: res => res.json()
        // may not need form data for post requests, only put
        // checks if username is unique
        console.log('username: ' + this.state.username);
        fetch(`/api/user/search`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: this.state.username})
        })
        .then(res => res.json(), error => console.error(error))
        .then(verdict => {
            console.log(verdict);
            if (verdict) {
                // checks if username matches in database and outputs an error message
                this.setState({
                    username_error: "This username is already taken",
                    password_error: ""
                });
            } else if (this.state.password !== this.state.confirm || this.state.password === "") {
                // checks passwords match and are not empty
                this.setState({
                    username_error: "",
                    password_error: "Password fields do not match or are empty"
                });
            } else {
                console.log("Creating");
                // creates new user and redirects to user page
                fetch(`/api/user/create`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password,
                    }),
                })
                .then(result => console.log('Success'), error => console.error(error));
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* {this.state.username}<br/>
                {this.state.password}<br/>
                {this.state.confirm}<br/> */}
                <input type='text' placeholder='Username' onChange={this.handleChange.bind(this, "username")}/> {this.state.username_error}
                <input type='password' placeholder='Password' onChange={this.handleChange.bind(this, "password")}/> {this.state.password_error}
                <input type='password' placeholder='Confirm password' onChange={this.handleChange.bind(this, "confirm")}/>
                <input type='submit' value="Register"/>
            </form>
        );
    }
}

export default Signup;