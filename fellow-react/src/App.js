import React from 'react';
import Homepage from './Pages/Homepage/Homepage'

class App extends React.Component {
  render() {
    const m = 11
    const n = m % 2 == 0 ? 1 : 0


    return (

      <Homepage name={n}/>
    )
  }
}

export default App;
