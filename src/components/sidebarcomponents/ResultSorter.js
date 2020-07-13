import React from 'react';

function ResultSorter(props) {
    return(
        <div>
                <label className="sort-by">SORT BY</label>
            <div>
                <select className="sort-selector">
                    <option label="RELEASE DATE"></option>
                </select>
            </div>
        </div>
    );
    
}

export default ResultSorter;
