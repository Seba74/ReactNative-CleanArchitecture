import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const Back = () => {
  return (
    <Pressable
      onPress={function () {
        router.back();
      }}
    >
      <FontAwesome size={20} name="arrow-circle-o-left" color={"tomato"} />
    </Pressable>
  );
};

export default Back;
