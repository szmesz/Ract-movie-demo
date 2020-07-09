import React, { Component } from 'react';
import MainContent from './maincomponents/MainContent'
import Sidebar from './Sidebar'

class Main extends Component {
    render() {
    return( 
    <main>
        <Sidebar />
        <MainContent text={"NO MOVIE FOUND"}/>
    </main>
    );}
}
export default Main;
