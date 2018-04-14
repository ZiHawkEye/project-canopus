import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            isExtended: false,
            classname: 'post',
            btnTxt: 'Read More',
            // cant seem to init state with props
            // text: 'state: ' + this.props.text
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
                    {/* {this.state.text} */}
                    {this.props.text}
                </p>
                {/* try different ways of handling events - eventlisteners, inline html
                multiple eventhandlers to same event or multiple events to same element? */}
                <button className="read-more" onClick={this.handleClick}> {this.state.btnTxt} </button>
            </div>
        )
    }
}

export default Post;