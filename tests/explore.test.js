import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Explore from '../src/components'

describe('<Explore />', () => {
    it('should render without throwing an error', () => {
        const component = shallow(<Explore />)
        expect(component.contains(<p> Explore </p>)).toBe(true)
    })
    // it('should mount in a full DOM', () => {
    //   const component = mount(<Explore />);
    //   expect(component.find('.app').length).toBe(1);
    // });
    // it('should render to static HTML', () => {
    //   const component = render(<Explore  />);
    //   expect(component.text()).toEqual('Hello React App');
    // });
})
