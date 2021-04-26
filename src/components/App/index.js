// == Import npm
import React from 'react';

// == Import
import Counter from '../../containers/Counter';
import RandomColors from '../../containers/RandomColors';
import Gradient from '../../containers/Gradient';
import Directions from '../../containers/Directions';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Counter />
    <RandomColors />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
