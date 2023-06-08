import { render } from '@testing-library/react';
import Quote from '../../components/quote/Quote';

describe('Tests Quote component ', () => {
  it('renders correctly', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<Quote />);
  });
});
