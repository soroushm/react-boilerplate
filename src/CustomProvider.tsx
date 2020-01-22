import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/store'

const CustomProvider: React.FC = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}

export default CustomProvider
