import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux"

const initialState = [
  'learn React',
    'Clean my mac'
];

function taskList(state=initialState, action){
    if (action.type === 'task') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
const store = createStore(taskList);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
