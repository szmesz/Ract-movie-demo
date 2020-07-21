import React, { useState } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

function MainContent(props) {

    const [movies] = useState([
        {id: 1, src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {id: 2, src: 'images/hundstage.jpg', title: 'Hudnstage', release: '1999', type: 'comedy'},
        {id: 3, src: 'images/lockstock.jpg', title: 'Lock stock and two smoking barrels', release: '1998', type: 'crime'},
        {id: 4, src: 'images/snatch.jpg', title: 'Snatch', release: '2001', type: 'comedy'},
        {id: 5, src: 'images/psycho.jpg', title: 'Psycho', release: '1960', type: 'horror'},
        {id: 6, src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {id: 7, src: 'images/hundstage.jpg', title: 'Hudnstage', release: '1999', type: 'comedy'},
        {id: 8, src: 'images/lockstock.jpg', title: 'Lock stock and two smoking barrels', release: '1998', type: 'crime'},
        {id: 9, src: 'images/snatch.jpg', title: 'Snatch', release: '2001', type: 'comedy'},
        {id: 10, src: 'images/psycho.jpg', title: 'Psycho', release: '1960', type: 'horror'},
        {id: 11, src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {id: 12, src: 'images/hundstage.jpg', title: 'Hudnstage', release: '1999', type: 'comedy'},
        {id: 13, src: 'images/lockstock.jpg', title: 'Lock stock and two smoking barrels', release: '1998', type: 'crime'},
        {id: 14, src: 'images/snatch.jpg', title: 'Snatch', release: '2001', type: 'comedy'},
        {id: 15, src: 'images/psycho.jpg', title: 'Psycho', release: '1960', type: 'horror'},
        {id: 16, src: 'images/pulp_fiction.jpg', title: 'Pulp Fiction', release: '1994', type: 'crime'},
        {id: 17, src: 'images/hundstage.jpg', title: 'Hudnstage', release: '1999', type: 'comedy'},
        {id: 18, src: 'images/lockstock.jpg', title: 'Lock stock and two smoking barrels', release: '1998', type: 'crime'},
        {id: 19, src: 'images/snatch.jpg', title: 'Snatch', release: '2001', type: 'comedy'},
        {id: 20, src: 'images/psycho.jpg', title: 'Psycho', release: '1960', type: 'horror'}
    ]);

    
    return(
        movies.length !== 0 ?
        <div className="movie-panel">
            {movies.map(movie =>(
                <Movie key={movie.id} src={movie.src} title={movie.title} release={movie.release} type={movie.type} {...props}></Movie>
            ))} 
        </div>
        :
        <div className="no-content">NO MOVIES FOUND</div>
    );
    
}

MainContent.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    release: PropTypes.string,
    type: PropTypes.string
}

export default MainContent;
