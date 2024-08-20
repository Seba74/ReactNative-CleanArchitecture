import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "inversify-react";
import { container } from "../../infrastructure/di/container";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import "reflect-metadata";
import { SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider container={container} key={container.id}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>

          <StackLayout />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

const StackLayout = () => {
  const topSafeArea = useSafeAreaInsets().top;
  const { colors } = useContext(ThemeContext);
  return (
    <SafeAreaView style={{
      flex: 1,
      marginTop: topSafeArea,
      backgroundColor: colors.background
    }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>

  )
}