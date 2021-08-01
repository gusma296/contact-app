import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers';
import Navigator from './navigation';

const middleware = [thunk];

export const store = createStore(rootReducers, applyMiddleware(...middleware));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
