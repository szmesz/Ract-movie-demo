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
                <Modal className="modal" isOpen={open} onRequestClose={() => setOpen(false)}>
                    <Button cssStyle="close-btn" onClick={() => setOpen(false)} label="CLOSE"></Button>
                    <div className="add-movie-panel">
                        <MovieForm /> 
                    </div>
                </Modal>
            </div>
        );
    

}

export default AddMovie;
