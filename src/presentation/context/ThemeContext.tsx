import { darkPalette, lightPalette } from "@/config/theme/Tokens";
import { darkTheme, lightTheme } from "@/config/theme/Theme";
import { StatusBar } from "expo-status-bar";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Palette } from "@/config/theme/Types";
import * as SystemUI from "expo-system-ui";

type ThemeColor = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeColor;
  colors: Palette;
  toggleTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorTheme = useColorScheme();

  const [theme, setTheme] = useState<ThemeColor>(colorTheme as ThemeColor);

  useEffect(() => {
    setTheme(colorTheme as ThemeColor);
    setBackgroundColor();
  }, [colorTheme]);

  const handleTheme = (theme: ThemeColor) => {
    setTheme(theme);
  };

  const setBackgroundColor = async () =>
    await SystemUI.setBackgroundColorAsync(
      colorTheme === "dark" ? darkPalette.background : lightPalette.background
    );

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        colors: theme === "light" ? lightTheme : darkTheme,
        toggleTheme: (theme: ThemeColor) => handleTheme(theme),
      }}
    >
      <PaperProvider
        theme={{
          colors: theme === "light" ? lightPalette : darkPalette,
        }}
      >
        {children}
      </PaperProvider>
      <StatusBar
        style={theme === "light" ? "dark" : "light"}
        translucent
        backgroundColor={
          theme === "light" ? lightPalette.background : darkPalette.background
        }
      />
    </ThemeContext.Provider>
  );
};