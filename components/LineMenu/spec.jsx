import _ from 'lodash/fp'
import R from 'ramda'
// import React from 'react'
import test from 'tape'
// import { shallow } from 'enzyme'
// import { LineMenu } from './index'

const menuItems = ['Home', 'Gallery', 'Portfolio', 'Clients', 'Contact']
// const menuItems = ['Home', 'Home']

// // contains :: String -> String -> Boolean
// const contains = _.curry((needle, haystack) => Boolean(haystack.match(RegExp(needle))))
//
// // allAreTrue :: [Boolean] -> Boolean
// const allAreTrue = _.every(_.identity)
//
// // containsMultiple :: [String] -> String -> [Boolean]
// const containsMultiple = _.curry((needles, haystack) => {
//   const runAgainstHaystack = _.map((f) => f(haystack))
//   return _.flow(_.map(contains), runAgainstHaystack, allAreTrue)(needles)
//   // needles.map(contains)
//   // return _.contains()
//   // return _.contains(needles[0], haystack)
// })

test('<LineMenu /> displays five menu items', (assert) => {
  // const wrapper = shallow(<LineMenu
  //   items={ menuItems }
  // />)
  // assert.equal(wrapper.text(), true)
  const testStr = 'Lorem Home ipsum'
  // console.log(containsMultiple(menuItems)(testStr))
  // console.log(contains(menuItems[0])(testStr))

  assert.end()
})
