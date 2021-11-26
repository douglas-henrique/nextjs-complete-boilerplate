import { render } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home testing example', () => {
    it('should render home', () => { 
        const { container } = render(<Home />)
        expect(container).toMatchSnapshot()
    })
})