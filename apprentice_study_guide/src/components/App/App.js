import React from 'react';
import * as Questions_List from '../../assets/questions.json';
import Questions from '../Questions';
import Nav from '../Nav';
import './Default.css';
function App() {
  return (
    <>
      <Nav />
      <Questions questions={Questions_List} />
    </>
  );
}

export default App;
