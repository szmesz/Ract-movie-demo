import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import '../styles/App.css';

function App(props) {
  return (
    <>
      <Header {...props}/>
      <Main {...props}/>
      <Footer />
    </>
  );
}

export default App;
