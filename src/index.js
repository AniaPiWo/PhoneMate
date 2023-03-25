import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store,  persistor } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ChakraProvider>        
        <App />
        </ChakraProvider>
      </ BrowserRouter>
    </PersistGate>
  </Provider>
);


//<BrowserRouter basename="/goit-react-hw-08-phonebook/">