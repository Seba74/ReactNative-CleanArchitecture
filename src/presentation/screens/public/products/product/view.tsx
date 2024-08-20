import React from "react";
import { useLocalSearchParams } from "expo-router";
import Back from "@/presentation/components/Back";
import { Text } from "react-native-paper";
import Layout from "@/presentation/components/ui/Layout";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <Layout>
      <Back />
      <Text>ProductScreen {id}</Text>
    </Layout>
  );
};

export default ProductScreen;
