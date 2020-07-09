import React, { useState } from 'react';
import Movie from './Movie';

function MainContent() {

    const [movies] = useState([
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'}  
    ]);

    
    return(
        movies.length !== 0 ?
        <div className="movie-panel">
            {movies.map(movie =>(
                <Movie src={movie.src} title={movie.title} release={movie.release} type={movie.type} />
            ))} 
        </div>
        :
        <div className="no-content">NO MOVIES FOUND</div>
    );
    
}

export default MainContent;
