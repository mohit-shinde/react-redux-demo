import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import './App.css';
import BbContainer from './components/BbContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BbContainer/> 
      </div>
    </Provider>
    
  );
}

export default App;
