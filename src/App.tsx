import React from 'react'
import { hot } from 'react-hot-loader'
import ViewsIndex from '@/views/index'

const App: React.FC = () => {
  return (
    <div>
      <ViewsIndex />
    </div>
  )
}

export default hot(module)(App)
