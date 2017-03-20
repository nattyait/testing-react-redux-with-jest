import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

// Describe what to test
describe('TodoItem', () => {
  // Test scenario
  it('runs jest', () => {
    expect(5).toBe(5)
  })
  // Test scenario
  it('checks array', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3])
  })
  describe('TodoItem', () => {
    it('render correct structure', () => {
      const component = shallow(<TodoItem text="Hello" />)
      expect(component.is('li')).toBe(true)
    })
  })
})
