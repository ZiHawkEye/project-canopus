import React from 'react';
import Card from './Card';

class Feed extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            content: {this.props.content}
        }
    }

    render() {
        return (
            <div className="grid">
                < />
                <Card />
            </div>
        );
    }
}

export default Grid