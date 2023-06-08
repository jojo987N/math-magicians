import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from '../../components/calculator/Calculator';

it('renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

test("renders Let's do some math! text", () => {
  render(<Calculator />);

  const textElement = screen.getByText(/Let's do some math!/i);
  expect(textElement).toBeInTheDocument();
});

test('renders AC button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: /ac/i });
  expect(textElement).toBeInTheDocument();
});

test('renders "+/-" button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: '+/-' });
  expect(textElement).toBeInTheDocument();
});

test('renders "%" button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: '%' });
  expect(textElement).toBeInTheDocument();
});

test('renders "." button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: '.' });
  expect(textElement).toBeInTheDocument();
});

test('renders "÷" button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: '÷' });
  expect(textElement).toBeInTheDocument();
});

test('renders "+" button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: '+' });
  expect(textElement).toBeInTheDocument();
});

test('renders "-" button', () => {
  render(<Calculator />);

  const textElement = screen.getByRole('button', { name: '-' });
  expect(textElement).toBeInTheDocument();
});

test('renders buttons with numbers', () => {
  render(<Calculator />);

  [...Array(9).keys()].map((i) => i + 1).forEach((v) => {
    const textElement = screen.getByRole('button', { name: `${v}` });
    expect(textElement).toBeInTheDocument();
  });
});

test('Check when click on AC, texbox should show 0', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText(/AC/i));

  expect(screen.getByRole('textbox').value).toBe('0');
});

test('Check when click on some number, texbox should display this number', () => {
  const randomNumber = Math.floor(Math.random() * 10).toString();
  render(<Calculator />);
  fireEvent.click(screen.getByText(randomNumber));

  expect(screen.getByRole('textbox').value).toBe(randomNumber);
});
