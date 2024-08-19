import { DefaultThemeColors, Palette } from "./Types";
import { lightPalette, darkPalette } from "./Tokens";

export const lightDefaultTheme: DefaultThemeColors = {
  primary: lightPalette.primary,
  text: lightPalette.onBackground,
  background: lightPalette.background,
  card: lightPalette.surface,
  border: lightPalette.outline,
  notification: lightPalette.inverseSurface,
  tabIconDefault: lightPalette.onSurfaceVariant,
  tabIconSelected: lightPalette.primary,
};

export const darkDefaultTheme: DefaultThemeColors = {
  primary: darkPalette.primary,
  text: darkPalette.onBackground,
  card: darkPalette.surface,
  border: darkPalette.outline,
  notification: darkPalette.inverseSurface,
  background: darkPalette.background,
  tabIconDefault: darkPalette.onSurfaceVariant,
  tabIconSelected: darkPalette.primary,
};

export const lightTheme: Palette = {
  ...lightDefaultTheme,
  ...lightPalette,
};

export const darkTheme: Palette = {
  ...darkDefaultTheme,
  ...darkPalette,
};
