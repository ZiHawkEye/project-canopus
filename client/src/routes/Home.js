import React from 'react';
import '../styles/Home.css';
import Card from '../components/Card';

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			cards: []
		}
	}

	componentDidMount() {
		fetch("/api/article/search?q={}&is_json=true&projectors=author+title+desc+date+tags")
			.then(res => res.json())
			.then(result => {
				this.setState({
					cards: result
				})
			}, 
			(error) => {
				console.err(error);
			})
	}

	render() {
		var jsonposts = this.state.cards;
		var feed = jsonposts.map(post => <Card img={post.img} title={post.title} topic={post.topic} desc={post.desc} />);

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