import Main from '@/pages/Main/Main';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Main component', () => {
  beforeEach(() => {
    const ResizeObserverMock = vi.fn(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
  })

  it('renders the Documentation component when isDocsOpen is true', () => {
    const mockStore = configureMockStore();

    const store = mockStore({
      editor: {
        isDocOpen: true,
      },
      tabs: {
        tabs: [
          {
            requestContent: '',
            variablesContent: '',
            headersContent: '',
            responseContent: '',
            url: '',
          },
        ],
        activeTab: 0,
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('documentation')).toBeInTheDocument();
  });
});