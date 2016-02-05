import React from 'react'
import test from 'tape'
import { render } from 'enzyme'
import Item from './index'

const item = 'Home'

test('<Item /> displays item content', assert => {
  const wrapper = render(<Item>{ item }</Item>)
  assert.equal(item, wrapper.text(), true)

  assert.end()
})
