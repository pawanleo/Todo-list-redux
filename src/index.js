import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
