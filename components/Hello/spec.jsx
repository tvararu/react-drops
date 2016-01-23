import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Hello } from './index'

test('<Hello /> displays hello world', (assert) => {
  const wrapper = shallow(<Hello />)
  assert.equal(wrapper.text(), 'Hello, world!')

  assert.end()
})
