import React from 'react';
import '../styles/Blog.css';
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

class Blog extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch('/api/post')
			.then(res => res.json())
			.then(result => {
				this.setState({
					posts: result.posts
				})
			}, 
			(error) => {
				console.error(error)
			}
			)
	}

	render() {
		var jsonposts = this.state.posts
		var feed = jsonposts.map(post => <Post text={post.text} />)
	
		return (
				<div className='blog'>
                    <Sidebar />
					<div className='list'> {feed} </div>
					{/* list is an undefined class in Blog.css */}
				</div>
			);
	}
}

export default Blog;