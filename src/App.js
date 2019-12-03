import React from 'react';

import List from './components/list'

function App() {
  return (
    <div className="App">
      <h1>Shopping List App</h1>
      <List storeName="Fred Meyer" />
      <List storeName="Uwajimaya" />
    </div>
  );
}

export default App;
