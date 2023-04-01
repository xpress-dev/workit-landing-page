import React from 'react';
import Header from './components/Home/Header';
import Jumbotron from './components/Home/Jumbotron';
import Perks from './components/Home/Perks';

const App = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <Jumbotron />
      <Perks />
    </main>
  );
};

export default App;
