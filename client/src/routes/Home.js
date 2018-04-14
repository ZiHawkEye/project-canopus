import React from 'react';
import '../styles/Home.css';
import Card from '../components/Card';

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			popposts: []
		}
	}

	componentDidMount() {
		fetch("/api/card")
			.then(res => res.json())
			.then(result => {
				this.setState({
					popposts: result.cards
				})
			}, 
			(error) => {
				console.err(error);
			})
	}

	render() {
		var jsonposts = this.state.popposts
		var feed = jsonposts.map(post => <Card img={post.img} title={post.title} topic={post.topic} desc={post.desc} />)

		return (
			<div className='home'>
				{/* props.children is a special prop name */}
				Popular Posts
				<div className='grid'>{feed}</div>

				Recent Posts
				<div className='grid'>{feed}</div>
			</div>
		);
	}
}

export default Home;