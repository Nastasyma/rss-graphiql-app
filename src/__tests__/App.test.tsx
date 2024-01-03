import ErrorBoundary from '@/components/error-boundary/ErrorBoundary';
import AuthProvider from '@/providers/AuthProvider';
import LangProvider from '@/providers/LangProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import { routes } from '@/router/router';
import { store } from '@/store/store';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

describe('testing app', () => {
  const useDispatchMock = vi.fn();
  const mockDispatch = vi.fn();
  beforeEach(() => {
    useDispatchMock.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach(async () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ['/graphiql-app/register'],
      basename: '/graphiql-app',
    });

    const useIdToken = vi.fn();
    useIdToken.mockReturnValue([true, false]);

    await waitFor(() =>
      render(
        <ErrorBoundary>
          <Provider store={store}>
            <AuthProvider>
              <ThemeProvider>
                <LangProvider>
                  <RouterProvider router={memoryRouter} />
                </LangProvider>
              </ThemeProvider>
            </AuthProvider>
          </Provider>
        </ErrorBoundary>
      )
    );
  });

  it('switch theme', async () => {
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    waitFor(() => {
      fireEvent.click(screen.getByTestId('switchTheme-button'));
    });
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });

  it('switch lang', () => {
    screen.debug();
    expect(screen.getByTestId('auth-title').textContent).toBe('Sigh up');

    waitFor(() => {
      fireEvent.click(screen.getByTestId('select-lang'));
    });
    waitFor(async () => {
      fireEvent.click(screen.getByTestId('selectLang-ru'));
    });

    expect(screen.getByTestId('auth-title').textContent).toBe('Регистрация');
  });
});
