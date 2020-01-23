import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from 'src/rootReducers'
import logo from './logo.svg'
import './App.css'
import { postNumberState } from './actions'
const Landing: React.FC = () => {
  const dispatch = useDispatch()
  const { number, error } = useSelector<StoreState, StoreState['landing']>((state: StoreState) => state.landing)
  function apiCall(number: number, state: string) {
    dispatch(postNumberState({ number, type: state }))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {error && <p className="error">{error}</p>}
        <div>
          <button className="button button-increase" onClick={() => apiCall(number + 1, 'increase')}>
            Increase
          </button>
          {number}
          <button className="button button-decrease" onClick={() => apiCall(number - 1, 'decrease')}>
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
