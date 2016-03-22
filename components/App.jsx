import React from 'react'
import LineMenu from './LineMenu'

export default class App extends React.Component {
  render () {
    const menuItems = ['Home', 'Gallery', 'Portfolio', 'Clients', 'Contact']
    return <div>
      <LineMenu items={menuItems} />
    </div>
  }
}
