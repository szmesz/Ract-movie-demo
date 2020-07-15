import React, { useState } from 'react';
import Button from '../Button';
import Modal from 'react-modal'; 
import MovieForm from '../maincomponents/MovieForm';

Modal.setAppElement('#root')

function AddMovie(props) {
    const [open, setOpen] = useState(false)
    
        return(
            <div>
                <Button cssStyle="add-movie-btn" onClick={() => setOpen(true)} label="+ ADD MOVIE"/>
                <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
                        <div className="add-movie-panel">
                            <MovieForm /> 
                            <Button cssStyle="close-btn" onClick={() => setOpen(false)} label="CLOSE"></Button>
                        </div>
                </Modal>
            </div>
        );
    

}

export default AddMovie;
