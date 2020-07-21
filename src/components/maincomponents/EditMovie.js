import React, { useState } from 'react';
import Button from '../Button';
import Modal from 'react-modal'; 
import MovieForm from '../maincomponents/MovieForm';
import PropTypes from 'prop-types';

Modal.setAppElement('#root')

function EditMovie() {

    const [open, setOpen] = useState(false)
    
        return(
            <div>
                <Button cssStyle="edit-movie-btn" onClick={() => setOpen(true)} label="EDIT"/>
                <Modal className="modal" isOpen={open} onRequestClose={() => setOpen(false)}>
                    <Button cssStyle="close-btn" onClick={() => setOpen(false)} label="CLOSE"></Button>
                    <div className="movie-form">
                        <MovieForm /> 
                    </div>
                </Modal>
            </div>
        );
    

}

EditMovie.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default EditMovie;
