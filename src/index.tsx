import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import MainApp from './App';

const App = () => (
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
