import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Back from "@/presentation/components/Back";

const ProductListScreen = () => {
  return (
    <View style={{ top: 50 }}>
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
