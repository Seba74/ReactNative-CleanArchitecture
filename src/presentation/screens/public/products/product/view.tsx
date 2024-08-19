import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Back from "@/presentation/components/Back";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ top: 50 }}>
      <Back />
      <Text>ProductScreen {id}</Text>
    </View>
  );
};

export default ProductScreen;
