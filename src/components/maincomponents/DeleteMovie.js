import React, { useState } from 'react';
import Button from '../Button';
import Modal from 'react-modal'; 
import DeleteMovieAlert from '../maincomponents/DeleteMovieAlert';
import PropTypes from 'prop-types';

Modal.setAppElement('#root')

function DeleteMovie(props) {

    const [open, setOpen] = useState(false)
        return(
            <div>
                <Button cssStyle="edit-movie-btn" onClick={() => setOpen(true)} label="DELETE" />
                <Modal className="modal" isOpen={open} onRequestClose={() => setOpen(false)} >
                    <Button cssStyle="close-btn" onClick={() => setOpen(false)} label="CLOSE"/>
                    <DeleteMovieAlert {...props}/>
                </Modal>
            </div>
        );
    

}

DeleteMovie.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default DeleteMovie;