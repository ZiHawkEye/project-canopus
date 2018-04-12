import React from 'react';
import Post from '../components/Post'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

class Blog extends React.Component {
	
	render() {
		return (
				<div className='blog'>
                    <Sidebar />
					<Feed classname='list' num={3} children={<Post/>}/>
					{/* list is an undefined class in Blog.css */}
				</div>
			);
	}
}

export default Blog;