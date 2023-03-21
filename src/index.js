import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store,  persistor } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </ BrowserRouter>
    </PersistGate>
  </Provider>
);

//   <BrowserRouter basename={process.env.PUBLIC_URL}>