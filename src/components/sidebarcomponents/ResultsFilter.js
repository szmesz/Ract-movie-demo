import React from 'react';
import ResultSorter from './ResultSorter'
import Button from "../Button"

function ResultsFilter(props) {
        return(
            <nav>
                <div className="filter">
                    <Button cssStyle="filter-btn" label="ALL"></Button>
                    <Button cssStyle="filter-btn" label="DOCUMENTARY"></Button>
                    <Button cssStyle="filter-btn" label="COMEDY"></Button>
                    <Button cssStyle="filter-btn" label="HORROR"></Button>
                    <Button cssStyle="filter-btn" label="CRIME"></Button>
                    <ResultSorter />
                </div>
            </nav>
        );
    
}

export default ResultsFilter;