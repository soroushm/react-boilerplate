import React from 'react'
import Landing from 'src/landing/Landing'
import CustomProvider from 'src/CustomProvider'

const App: React.FC = () => {
  return (
    <CustomProvider>
      <Landing />
    </CustomProvider>
  )
}

export default App
