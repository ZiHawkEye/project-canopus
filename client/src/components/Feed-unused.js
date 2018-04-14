import React from 'react';

class Feed extends React.Component {
    render() {
        var i;
        var children = [];
        var num = this.props.num;

        for (i = 0; i < num; i++) {
            children.push(this.props.children);
        }

        return (
            <div className={this.props.classname}>
                {children}
            </div>
        );
    }
}

export default Feed