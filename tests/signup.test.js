import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Signup from '../src/components'

describe('Index', () => {
    it('renders correctly', () => {
        const data = {
            site: {
                siteMetadata: {
                    username: `pponjrc`,
                    password: `123456`,
                    confirmPass: `123456`,
                },
            },
        }
        const tree = renderer.create(<Signup data={data} />).toJSON()
        // expect(tree).toMatchSnapshot()
    })
})
