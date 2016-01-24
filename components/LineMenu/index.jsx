import React from 'react'

export const LineMenuItem = ({ children }) => <div>{ children }</div>

export const LineMenu = ({ items }) => <div>
  <ul>
    { items.map(item => <LineMenuItem key={ item }>{ item }</LineMenuItem>) }
  </ul>
</div>
