import React from 'react'
import Radium from 'radium'
import Item from './Item'

class LineMenu extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  };

  render () {
    return <div>
      { this.props.items.map(item => <Item key={ item }>{ item }</Item>) }
    </div>
  }
}

export default Radium(LineMenu)
