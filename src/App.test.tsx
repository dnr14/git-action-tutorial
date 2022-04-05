import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('테스트 코드 PR 연습');
  expect(linkElement).toBeInTheDocument();
});
