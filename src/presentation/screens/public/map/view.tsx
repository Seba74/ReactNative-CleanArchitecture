import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MapScreen = () => {
  return (
    <View
      style={{
        top: 50,
      }}
    >
      <Text>MapScreen</Text>
      <Link href="/(products)" asChild>
        <Pressable>
          <Text>Products BTN</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default MapScreen;
