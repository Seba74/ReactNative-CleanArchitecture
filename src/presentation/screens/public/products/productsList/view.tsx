import { View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Back from "@/presentation/components/Back";
import { Text } from "react-native-paper";

const ProductListScreen = () => {
  return (
    <View>
      <Back />
      <Text>Products List Screen</Text>
      {["nike", "adidas", "puma"].map((z, i) => (
        <Link
          key={i}
          href={{
            params: {
              id: i,
            },
            pathname: "(products)/[id]",
          }}
          asChild
        >
          <Pressable>
            <Text
              key={i}
              style={{
                marginVertical: 10,
              }}
            >
              {z}
            </Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
};

export default ProductListScreen;
