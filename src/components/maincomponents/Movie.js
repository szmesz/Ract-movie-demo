import React from 'react'
import PropTypes from 'prop-types';
import Button from "../Button";

function Movie(props) {
    return ( 
        <div className="movie">
            <img src={props.src}  alt="" className="poster" />
            <div className="info-box">
                <label className="info">| TITLE: {props.title} |</label>
                <label className="info">| RELEASE DATE: {props.release} |</label>
                <label className="info">| GENRE: {props.type} |</label>
            </div>
            <div className="movie-edit-panel">
                <Button cssStyle="edit-movie-btn" label="EDIT"  onClick={()=>this.props.showEditFunc(this.props.movieid)}/>
                <Button cssStyle="edit-movie-btn" label="DELETE" onClick={()=>this.props.showDeleteFunc(this.props.movieid)}/>
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
