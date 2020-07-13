import React from 'react';
import AddMovie from './headercomponents/AddMovie';
import Search from './headercomponents/Search';
import TitleComponent from './headercomponents/TitleComponent';

function Header(props) {
    return ( 
        <header>
            <TitleComponent />
            <AddMovie />
            <Search />
        </header> 
    );
}


export default Header;
