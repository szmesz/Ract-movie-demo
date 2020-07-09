import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Movie extends Component {
render() {
    return ( 
        <div className="movie">
            <img src={this.props.src}  alt="" width="300" height="370" />
            <div className="info-box">
                <label className="info">TITLE: {this.props.title} |</label>
                <label className="info">RELEASE DATE: {this.props.release} |</label>
                <label className="info">GENRE: {this.props.type}</label>
            </div>
        </div>
    );
}
}

Movie.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default Movie;
