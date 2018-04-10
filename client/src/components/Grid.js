import React from 'react';
import Card from './Card';

class Grid extends React.Component {

    render() {
        return (
            <div className="grid">
                <Card />
                <Card />
            </div>
        );
    }
}

export default Grid