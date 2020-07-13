import React from 'react';
import Button from '../Button';

function AddMovie(props) {
        return(
            <Button cssStyle="add-movie-btn" onClick={props.onClick} label="+ ADD MOVIE"/>
        );
}

export default AddMovie;
