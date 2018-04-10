import React from 'react';
import sexplosion from '../assets/sexplosion.jpg';

class Card extends React.Component {
    render() {
        return (
            <figure class="card">
            <img src={sexplosion} alt="cardimage"/>
                <figcaption>
                    <h1 class="title">Title</h1>
                    <h2 class="topic">Topic</h2>
                    <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, cum? Amet incidunt facilis labore aliquam,
                        sint iusto dolor laudantium quibusdam illum ut inventore nam aut eum consequatur asperiores, deserunt
                        harum!</p>
                </figcaption>
            </figure>
        )
    }
}

export default Card