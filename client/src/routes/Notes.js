import React from 'react';
import '../styles/Notes.css';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // sets the state to the result of the previous query
        // need to replace + with spaces
        // console.log('before: ' + this.state.value);
        this.setState({value: event.target.value});
        // console.log('after: ' + this.state.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        var qs = encodeURI(this.state.value);
        fetch(`/api/article/create_get?text=${qs}`);
    }

    render() {
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <input className='createform' type='text' placeholder='Paste text here and enter to create document'/>
            </form>
        );
    }
}

export default Notes;