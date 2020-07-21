import React from 'react';
import Button from '../Button';
import Modal from 'react-modal'; 
import PropTypes from 'prop-types';

Modal.setAppElement('#root')

function DeleteMovieAlert(props) {
   
    return(
        <div className="delete-movie-alert">
            <p>Are you sure you want to delete this movie?</p>
            <Button cssStyle="edit-movie-btn" onClick={() => (alert('delete ' + props.title + '.' ))} label="DELETE"/>
        </div>
    );
}

DeleteMovieAlert.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default DeleteMovieAlert;
