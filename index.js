/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import CounterScreen from './screen/CounterScreen';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import ConterReducer from './src/Reducer/ConterReducer';

const store = createStore(ConterReducer)


const AppContainer = () =>
    <Provider store={store}>
        <CounterScreen />
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
