import { View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Text } from "react-native-paper";

const MapScreen = () => {
  return (
    <View>
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
