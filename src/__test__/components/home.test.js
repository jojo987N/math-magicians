import { render, screen } from '@testing-library/react';
import Home from '../../components/home/Home';

describe('Tests Home component ', () => {
  it('renders correctly', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<Home />);
  });
  test('renders "Welcome to our page !" text', () => {
    render(<Home />);

    const textElement = screen.getByText(/Welcome to our page !/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here" text', () => {
    render(<Home />);

    const textElement = screen.getByText(/Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen" text', () => {
    render(<Home />);

    const textElement = screen.getByText(/text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen/i);
    expect(textElement).toBeInTheDocument();
  });
});
