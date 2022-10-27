import React from 'react';
import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg';

class App extends React.Component {
  render () {
    return <Image source={ staringCat } alternativeText='Cute cat staring' />
  }
}

export default App;
