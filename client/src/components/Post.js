import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            isExtended: false,
            classname: 'post',
            btnTxt: 'Read More',
        };
        //binding is recommended: https://reactjs.org/docs/handling-events.html
        this.handleClick = this.handleClick.bind(this);
    }

    //alternatively if you wanna add EventListeners add them in componentDidMount(), which runs after the component is rendered to DOM

    handleClick() {
        this.setState(prevState => ({
            isExtended: !prevState.isExtended
            }));

        if (this.state.isExtended) {
            this.setState({
                classname: 'post extend',
                btnTxt: 'Read Less'
            });
        } else {
            this.setState({
                classname: 'post',
                btnTxt: 'Read More'
            });
        }
    }

    render() {
        return (
            <div className='post-container'>
            <div className={this.state.classname}>
                <span className='title'> {this.props.title} </span><br/>
                <span className='desc'> {this.props.desc} </span><br/>
                {this.props.text}

                {/* try different ways of handling events - eventlisteners, inline html
                multiple eventhandlers to same event or multiple events to same element? */}
                <button className="read-more" onClick={this.handleClick}> {this.state.btnTxt} </button>
            </div>
            <div className='details-container'>
            <div className='details'>
                <span className='author'> {this.props.author} </span><br/>
                <span className='date'> {this.props.date} </span><br/>
                <span className='tags'> {this.props.tags} </span>
            </div>
            </div>
            </div>
        );
    }
}

export default Post;