import React, { Component } from 'react';
import ResultSorter from './ResultSorter'

class ResultsFilter extends Component {
    render() {
        return(
            <nav>
                <div className="filter">
                    <button className="filter-btn">ALL</button> 
                    <button className="filter-btn">DOCUMENTARY</button> 
                    <button className="filter-btn">COMEDY</button> 
                    <button className="filter-btn">HORROR</button> 
                    <button className="filter-btn">CRIME</button> 
                    <ResultSorter />
                </div>
            </nav>
        );
    }
}

export default ResultsFilter;