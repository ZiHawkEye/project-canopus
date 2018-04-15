import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            value: '',
            result: []
        }

        //there seems to be no need to bind the 'enter' keypress to a submit form action
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {  
        this.setState({value: event.target.value});
        fetch(`/api/search?q=${this.state.value}`)
            .then(res => res.json())
            .then(result => {
                this.setState({});
                console.log(result);
            })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input className='search' type='text' placeholder='Find articles' onChange={this.handleChange}/>
            </form>
            {this.state.result}
            </div>
        );
    } 
}

export default Search;