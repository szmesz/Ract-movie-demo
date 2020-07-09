import React, { Component } from 'react';

class ResultSorter extends Component {
    render() {
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
}

export default ResultSorter;
