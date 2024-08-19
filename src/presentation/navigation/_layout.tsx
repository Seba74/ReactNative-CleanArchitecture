import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import * as SystemUI from "expo-system-ui";
import "reflect-metadata";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "inversify-react";
import { container } from "../../infrastructure/di/container";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
  });

  const setBackgroundColor = async () =>
    await SystemUI.setBackgroundColorAsync("#fff");

  useEffect(() => {
    if (loaded) {
      setBackgroundColor();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider container={container} key={container.id}>
      <QueryClientProvider client={queryClient}>
        <Stack initialRouteName="index">
          <Stack.Screen
            name="index"
            options={{ headerShown: false, animation: "fade" }}
          />
        </Stack>
      </QueryClientProvider>
    </Provider>
  );
}
