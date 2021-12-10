// import App from './src/Montly';
import React from 'react';
import RootStack from './src/J_index.js';

import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }

}

export default App;