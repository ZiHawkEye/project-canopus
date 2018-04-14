import React from 'react';

class Card extends React.Component {
    // define prop defaults?

    render() {
        return (
            <figure className="card">
            <img src={this.props.img} alt="cardimage"/>
                <figcaption>
                    <h1 className="title">{this.props.title}</h1>
                    <h2 className="topic">{this.props.topic}</h2>
                    <p className="description">{this.props.desc}</p>
                </figcaption>
            </figure>
        )
    }
}

export default Card