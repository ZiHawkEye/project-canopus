import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props) 
        //it's a dict/array so you need the commas
        this.state = {
            isExtended: false,
            classname: 'post',
            btnTxt: 'Read More',
            text: 'Aenean eget ultricies mi. Nunc accumsan nisl id fermentum porttitor. Integer in risus eget enim euismod mattis. Vivamus posuere eros sit amet ligula dignissim blandit. Quisque fringilla ullamcorper sagittis. Integer lacinia volutpat sodales. Etiam maximus a enim nec viverra. In hac habitasse platea dictumst. Pellentesque a sem est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum orci in purus fermentum, non tincidunt urna dignissim. Phasellus et scelerisque mauris. Suspendisse id imperdiet dolor, et posuere nulla. Curabitur vitae nisl nec augue malesuada feugiat.'
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
            })
        } else {
            this.setState({
                classname: 'post',
                btnTxt: 'Read More'
            })
        }
    }

    render() {
        return (
            <div className={this.state.classname}>
                <p>
                    {this.state.text}
                </p>
                {/* try different ways of handling events - eventlisteners, inline html
                multiple eventhandlers to same event or multiple events to same element? */}
                <button className="read-more" onClick={this.handleClick}> {this.state.btnTxt} </button>
            </div>
        )
    }
}

export default Post;