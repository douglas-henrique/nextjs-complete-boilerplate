import { render, screen } from '@testing-library/react'
import Teste from '../'

describe('<Teste />', () => {
  it('should render the heading', () => {
    const { container } = render(<Teste />)

    expect(screen.getByRole('heading', { name: /Teste/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})