import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IProps {
  children: React.ReactNode;
}

type ThemeContextType = 'light' | 'dark';

interface ThemeContext {
  theme: 'light' | 'dark';
  setTheme?: TypeSetState<ThemeContext['theme']>;
}

export const ThemeContext = createContext<ThemeContext>({ theme: 'light' });

export default function ThemeProvider({ children }: IProps) {
  const [theme, setTheme] = useState<ThemeContextType>('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
