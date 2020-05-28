import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

console.log(window.Twitch.ext);

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
