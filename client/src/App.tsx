import React from 'react';
import './App.css';
import DataGrid from './components/DataGrid'; 

function App() {

  return (
    <div className="App">
        <DataGrid name="100K People" url="/api/people" />
    </div>
  );
}

export default App;
