import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from '../src/components/App'

describe('<App />', () => {
    it('should render without throwing an error', () => {
        const component = shallow(<App />)
        expect(component.contains(<h1>Hello React App</h1>)).toBe(true)
    })
    it('should mount in a full DOM', () => {
        const component = mount(<App />)
        expect(component.find('.app').length).toBe(1)
    })
    it('should render to static HTML', () => {
        const component = render(<App />)
        expect(component.text()).toEqual('Hello React App')
    })
})
