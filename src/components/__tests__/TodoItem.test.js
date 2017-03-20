import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
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
    it('matches its snapshot - not complete', () => {
      const component = shallow(<TodoItem text="Not complete" />)
      expect(toJson(component)).toMatchSnapshot()
    })
    it('render correct structure', () => {
      const component = shallow(<TodoItem text="Hello" />)
      expect(component.is('li')).toBe(true)
    })
  })
  it('has complete class if receving complete prop', () => {
    const component = shallow(
      <TodoItem text="Hello" complete />
    )
    expect(component.hasClass('complete')).toBe(true)
  })
})
