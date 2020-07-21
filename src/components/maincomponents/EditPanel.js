import React from 'react';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import PropTypes from 'prop-types';

function EditPanel(props) {
    return (
    <div className="movie-edit-panel">    
        <EditMovie {...props}/>
        <DeleteMovie {...props}/>
    </div>
    );
}

EditPanel.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default EditPanel;
