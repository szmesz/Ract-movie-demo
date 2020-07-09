import React, { Component } from 'react';

class TitleComponent extends Component {
    render() {
        return(
        <div className="title-modul">{this.props.text}</div>
    );}
}

export default TitleComponent;
