import React, { Component } from 'react';
import AddMovie from './headercomponents/AddMovie';
import Search from './headercomponents/Search';
import TitleComponent from './headercomponents/TitleComponent';

class Header extends Component {
    render() {
    return ( 
        <header>
            <TitleComponent text={"NOTFLIX"}/>
            <AddMovie text={"+ ADD MOVIE"}/>
            <Search text={"What do you want to watch?"}/>
        </header> 
        );
    }
}

export default Header;
