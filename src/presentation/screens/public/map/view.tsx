import { Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Button, Text } from "react-native-paper";
import Layout from "@/presentation/components/ui/Layout";

const MapScreen = () => {
  return (
    <Layout>
      <Text>MapScreen</Text>
      <Button
        onPress={() => router.push("/(products)")}
        mode="contained"
        style={{ marginTop: 16 }}
      >
        Products
      </Button>
    </Layout>
  );
};

export default MapScreen;
