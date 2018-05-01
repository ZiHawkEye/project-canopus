import React from 'react';
import '../styles/Blog.css';
import Post from '../components/Post'
import Search from '../components/Search'

class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			value: ""
		};

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
        fetch(`/api/article/search?q=${qs}&keys=['author', 'title', 'desc', 'tags', 'text']`)
            .then(res => res.json())
            .then(result => {
                this.setState({
					posts: result
				});
                console.log(this.state.value);
            }, error => {
				console.error(error);
			});
    }

	componentDidMount() {
		fetch('/api/article/search?q={}&is_json=true')
			.then(res => res.json())
			.then(result => {
				this.setState({
					posts: result
				});
			}, 
			(error) => {
				console.error(error);
			});
	}

	render() {
		var jsonposts = this.state.posts;
		var feed = jsonposts.map(post => <Post author={post.author} 
											title={post.title} 
											desc={post.desc} 
											date={post.date} 
											tags={post.tags} 
											text={post.text} />);
	
		return (
				<div className='blog'>
                    <div className='sidebar' onChange={this.handleChange} onSubmit={this.handleSubmit}>
					<Search />
					</div>
					<div className='feed'> {feed} </div>
					{/* feed is an undefined class in Blog.css */}
				</div>
			);
	}
}

export default Blog;