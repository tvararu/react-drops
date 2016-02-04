import React from 'react'

export class LineMenuItem extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render () {
    return <div>
      { this.props.children }
    </div>
  }
}

export class LineMenu extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  };

  render () {
    return <div>
      <ul>
        { this.props.items.map(item => <LineMenuItem key={ item }>{ item }</LineMenuItem>) }
      </ul>
    </div>
  }
}
