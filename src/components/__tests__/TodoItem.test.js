import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

// Describe what to test
describe('TodoItem', () => {
  let component
  beforeEach(() => {
    component = shallow(<TodoItem text="Drink offee" />)
  })
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
      expect(component).toMatchSnapshot()
    })
    it('render correct structure', () => {
      const component = shallow(<TodoItem text="Hello" />)
      expect(component.is('li')).toBe(true)
    })
  })
  it('has complete class if receving complete prop', () => {
    component.setProps({ complete: true })
    expect(component.hasClass('complete')).toBe(true)
  })
})
