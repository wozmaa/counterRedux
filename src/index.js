import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux"

const defaultState = {
  cash: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "plus":
      return {...state, cash: state.cash + 1}

    case "minus":
      if(state.cash > 0){
      return {...state, cash: state.cash - 1}
      }
    case "reset":
      return {...state, cash: 0}
    case "random":
      return {...state, cash: Math.floor(Math.random() * 1000)}
    default: return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
