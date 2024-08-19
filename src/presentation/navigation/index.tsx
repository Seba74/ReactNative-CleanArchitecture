import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Index = () => {
  const topSafeArea = useSafeAreaInsets().top;
  return (
    <View style={{ flex: 1, top: topSafeArea, backgroundColor: "black" }}>
      <Text variant="displayMedium">Index</Text>
      <Link href="/(tabs)/" style={{ color: "white" }}>
        <Text variant="bodyMedium">Go to tabs</Text>
      </Link>
    </View>
  );
};

export default Index;
