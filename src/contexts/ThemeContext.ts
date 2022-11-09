import { createContext } from 'react';

interface IThemeContext {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

export default ThemeContext;
