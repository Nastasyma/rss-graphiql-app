import Welcome from '@/pages/Welcome/Welcome';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

describe('Welcome component', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true);
    render(
      <Router>
        <Welcome />
      </Router>
    );
  });

  it('renders Welcome component with all blocks', () => {
    expect(screen.getByTestId('welcome-block')).toBeInTheDocument();
    expect(screen.getByText('Development team')).toBeInTheDocument();
    expect(screen.getByText('Our Project')).toBeInTheDocument();
    expect(screen.getByTestId('course-block')).toBeInTheDocument();
  });
});
