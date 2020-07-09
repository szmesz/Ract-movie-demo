import React, { Component } from 'react';

class AddMovie extends Component {
    render() {
        return(
        <div>
            <button className="add-movie-btn">{this.props.text}</button>
        </div>
        );
    }
}

export default AddMovie;
