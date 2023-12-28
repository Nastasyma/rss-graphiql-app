import Layout from '@/pages/Layout/Layout';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Layout component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Layout />
      </Router>
    );
  })

  it('renders header', () => {
    const headerElement = screen.getByText('GraphiQL');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders footer', () => {
    const footerElement = screen.getByTestId('rs-logo');
    expect(footerElement).toBeInTheDocument();
  });
});
