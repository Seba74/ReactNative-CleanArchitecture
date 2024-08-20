import { View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Back from "@/presentation/components/Back";
import { Text } from "react-native-paper";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Back />
      <Text>ProductScreen {id}</Text>
    </View>
  );
};

export default ProductScreen;
