import React from 'react'
import Radium from 'radium'

export class Item extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render () {
    return <div>
      {this.props.children}
    </div>
  }
}

export default Radium(Item)
