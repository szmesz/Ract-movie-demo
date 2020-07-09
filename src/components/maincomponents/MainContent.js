import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return(
            <div className="no-content">{this.props.text}</div>
        );}
}

export default MainContent;
