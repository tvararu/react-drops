import R from 'ramda'
import React from 'react'
import test from 'tape'
import { render } from 'enzyme'
import LineMenu from './index'

const menuItems = ['Home', 'Gallery', 'Portfolio', 'Clients', 'Contact']

// allAreTrue :: [Boolean] -> Boolean
const allAreTrue = R.all(R.identity)

// contains :: [String] -> String -> Boolean
const contains = R.curry((needles, haystack) =>
  R.pipe(R.map(R.contains(R.__, haystack)), allAreTrue)(needles)
)

test('<LineMenu /> displays five menu items', (assert) => {
  const wrapper = render(<LineMenu
    items={menuItems}
  />)
  assert.equal(contains(menuItems, wrapper.text()), true)

  assert.end()
})
