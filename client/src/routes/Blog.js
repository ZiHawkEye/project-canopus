import React from 'react';
import '../styles/Blog.css';
import Post from '../components/Post'
import Search from '../components/Search'

class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.blogRef = React.createRef();

		this.state = {
			posts: [],
			value: "",
			skip: "0"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleChange(event) {
        // sets the state to the result of the previous query
        // console.log('before: ' + this.state.value);
        this.setState({value: event.target.value});
        // console.log('after: ' + this.state.value);
    }

    handleSubmit(event) {
		event.preventDefault();
		var qs = encodeURI(this.state.value);
		var uri = (qs === '') ? `q={}&is_json=true` : `q=${qs}&keys=['author', 'title', 'desc', 'tags', 'text']`;
        fetch(`/api/article/search?` + uri)
            .then(res => res.json())
            .then(result => {
                this.setState({
					posts: result
				});
            }, error => {
				console.error(error);
			});
	}
	
	handleScroll(event) {
		var rect = this.blogRef.current.getBoundingClientRect();
		// var height = this.blogRef.current.clientHeight;
		var height = window.innerHeight;
		
		if (height > rect.bottom) {
			fetch(`/api/article/search?q={}&is_json=true&sort=-date&limit=10&skip=${this.state.skip}`)
			.then(res => res.json())
			.then(result => {
				console.log(this.state.posts + result);
				this.setState(prevState => ({
					posts: prevState.posts.concat(result)
				}));
				this.setState(prevState => ({
					skip: (parseInt(prevState.skip, 10) + 10).toString()
				}));
				}, 
				(error) => {
					console.error(error);
			});
		}
	}

	componentDidMount() {
		fetch('/api/article/search?q={}&is_json=true&sort=-date&limit=10')
			.then(res => res.json())
			.then(result => {
				this.setState({
					posts: result
				});
			}, 
			(error) => {
				console.error(error);
			});

		// never bind an external eventhandler inside a render method - rendering methods should only be concerned with logic pertaining to updating the dom
		// bind listener in componentdidMount - that way it's only bound once
		window.addEventListener('scroll', this.handleScroll);
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
				<div className='blog' ref={this.blogRef}>
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