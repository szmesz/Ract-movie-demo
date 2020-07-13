import React from 'react'
import PropTypes from 'prop-types';

function Movie(props) {
    return ( 
        <div className="movie">
            <img src={props.src}  alt="" className="poster" />
            <div className="info-box">
                <label className="info">| TITLE: {props.title} |</label>
                <label className="info">| RELEASE DATE: {props.release} |</label>
                <label className="info">| GENRE: {props.type} |</label>
            </div>
        </div>
    );
}

Movie.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default Movie;
