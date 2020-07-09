import React, {Component} from 'react';

class FooterContent extends Component {
    render() {
        return(
        <div className="footer-content">{this.props.text}</div>
        );}
}

export default FooterContent;
