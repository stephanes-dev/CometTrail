// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CometTrail title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CometTrail/i);
    expect(titleElement).toBeInTheDocument();
});
