import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render( <App />, app)
