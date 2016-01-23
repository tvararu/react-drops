import React from 'react'
import { render } from 'react-dom'
import { Hello } from './Hello/Hello'

export class App extends React.Component {
  render () {
    return <div>
      <Hello />
    </div>
  }
}

render(<App />, document.getElementById('root'))