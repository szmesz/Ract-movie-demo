import React from 'react';
import Button from '../Button';

function Search(props) {
        return(
            <div>
                <div className="search">
                    <input className="search-input" placeholder="What do you want to watch?" ></input>
                    <Button cssStyle="search-btn" onclick={props.onclick} label="SEARCH"></Button>
                </div>
            </div>
        );
    
}

export default Search;
