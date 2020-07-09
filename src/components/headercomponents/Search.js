import React, { Component } from 'react';

class Search extends Component {
    render() {
        return(
            <div>
                <div className="search">
                    <input className="search-input" placeholder={this.props.text}></input>
                    <button className="search-btn">SEARCH</button>
                </div>
            </div>
        );
    }
}

export default Search;
