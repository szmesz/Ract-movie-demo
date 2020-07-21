import React from 'react';
import MainContent from './maincomponents/MainContent'
import Sidebar from './Sidebar'

function Main(props) {
    return( 
        <main>
            <Sidebar />
            <MainContent {...props}></MainContent>
        </main>
    );
}
export default Main;
