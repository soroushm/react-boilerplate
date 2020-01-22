import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from 'src/rootReducers'
import actionTypes from './actionTypes'
import logo from './logo.svg'
import './App.css'
const Landing: React.FC = () => {
  const dispatch = useDispatch()
  const number = useSelector<StoreState>((state) => state.landing.number)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button className="button button-increase" onClick={() => dispatch({ type: actionTypes.INCREASE })}>
            Increase
          </button>
          {number}
          <button className="button button-decrease" onClick={() => dispatch({ type: actionTypes.DECREASE })}>
            Decrease
          </button>
        </div>
        <p>
          Learn&nbsp;
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            React
          </a>
          &nbsp;and&nbsp;
          <a
            className="App-link"
            href="https://react-redux.js.org/introduction/quick-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
        </p>
      </header>
    </div>
  )
}

export default Landing
