import React from 'react'
import { render } from 'react-dom'
import LineMenu from './LineMenu'

export class App extends React.Component {
  render () {
    const menuItems = ['Home', 'Gallery', 'Portfolio', 'Clients', 'Contact']
    return <div>
      <LineMenu items={ menuItems } />
    </div>
  }
}

render(<App />, document.getElementById('root'))
