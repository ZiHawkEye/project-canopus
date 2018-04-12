import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            value: ''
        }

        //there seems to be no need to bind the 'enter' keypress to a submit form action
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {  
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Form Submitted(not really)');
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className='search' type='text' placeholder='Find articles' onChange={this.handleChange}/>
            </form>
        );
    } 
}

export default Search;