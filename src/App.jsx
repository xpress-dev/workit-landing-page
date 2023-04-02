import React from 'react';
import CallToAction from './components/Home/CallToAction';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Jumbotron from './components/Home/Jumbotron';
import Perks from './components/Home/Perks';

const App = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <Jumbotron />
      <Perks />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default App;
