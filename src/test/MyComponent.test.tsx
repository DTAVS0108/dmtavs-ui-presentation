// src/components/MyComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders the text prop correctly', () => {
    render(<MyComponent text="Hello, World!" />);
    
    // Check that the component renders the correct text
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
