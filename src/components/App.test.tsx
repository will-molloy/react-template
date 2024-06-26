import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('[components] App', () => {
  it('renders Vite and React logos with links', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<App />);
    const heading = screen.getByText('Vite + React');
    expect(heading).toBeInTheDocument();
  });

  it('renders the button and increments count on click', () => {
    render(<App />);
    const button = screen.getByText('count is 0');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });

  it('renders the instruction text', () => {
    render(<App />);
    const instructionText = screen.getByText('Edit ', { exact: false });
    expect(instructionText.textContent).toEqual('Edit src/App.tsx and save to test HMR');
    expect(instructionText).toBeInTheDocument();
  });

  it('renders the footer text', () => {
    render(<App />);
    const footerText = screen.getByText('Click on the Vite and React logos to learn more');
    expect(footerText).toBeInTheDocument();
  });
});
