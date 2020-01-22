import React from 'react'
import Landing from 'src/landing/Landing'
import Provider from 'src/Provider'

const App: React.FC = () => {
  return (
    <Provider>
      <Landing />
    </Provider>
  )
}

export default App
