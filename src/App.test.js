import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render learn react', () => {
  render(<App/>)
    const  textElement = screen.getAllByAltText("learn react"); 
    expect(textElement).toBeInTheDocument() ;


})