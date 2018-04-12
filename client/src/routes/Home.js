import React from 'react';
import Feed from '../components/Feed';
import Card from '../components/Card';

class Home extends React.Component {
	// constructor(props) {
	// 	super(props) 
	// 	this.state = {
	// 		// trying to implement style in component - prob not best practice but good for dynamic rendering
	// 		style: {
	// 			display: 'grid',
	// 			gridTemplateColumns: '1fr 2fr 1fr',
	// 			gridGap: '1em',
	// 			gridAutoRows: 'minmax(100px, auto)'
	// 		}
	// 	}
	// }

	render() {
		return (
			<div className='home'>
				{/* props.children is a special prop name */}
				Popular Posts
				<Feed classname='grid' num={2} children={<Card />}/>
				Recent Posts
				<Feed classname='grid' num={3} children={<Card />}/>
			</div>
		);
	}
}

export default Home;