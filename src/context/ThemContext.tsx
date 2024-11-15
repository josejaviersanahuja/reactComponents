/* eslint-disable react-refresh/only-export-components */
// ThemeContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    headerBackground: string;
    footerBackground: string;
  };
  typography: {
    fontFamilies: {
      heading: string;
      body: string;
    };
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
    lineHeights: {
      xs: number;
      sm: number;
      md: number;
    };
  };
  round: number;
}

interface ThemeContextProps {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setRound: (value: number) => void;
}

const defaultLightTheme: Theme = {
  colors: {
    primary: "#2196f3",
    secondary: "#66d9ef",
    background: "#f7f7f7",
    text: "#333",
    headerBackground: "#ffffff",
    footerBackground: "#eeeeee",
  },
  typography: {
    fontFamilies: {
      heading: "OpenSans-Bold",
      body: "OpenSans-Regular",
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
    },
    lineHeights: {
      xs: 1.2,
      sm: 1.4,
      md: 1.6,
    },
  },
  round: 4,
};

const defaultDarkTheme: Theme = {
  ...defaultLightTheme,
  colors: {
    primary: "#bb86fc",
    secondary: "#03dac6",
    background: "#121212",
    text: "#ffffff",
    headerBackground: "#1f1f1f",
    footerBackground: "#222222",
  },
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultLightTheme,
  isDarkMode: false,
  toggleTheme: () => {},
  setRound: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<Theme>(defaultLightTheme);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? defaultLightTheme : defaultDarkTheme);
  };

  const setRound = (value: number) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      round: value,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode,
        toggleTheme,
        setRound,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
