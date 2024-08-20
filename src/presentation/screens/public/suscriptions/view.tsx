import { View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Text } from "react-native-paper";
import Layout from "@/presentation/components/ui/Layout";

const SuscriptionsScreen = () => {
  return (
    <Layout>
      <Text>SuscriptionsScreen</Text>
      <Link href="/(products)" asChild>
        <Pressable>
          <Text>Products BTN</Text>
        </Pressable>
      </Link>
    </Layout>
  );
};

export default SuscriptionsScreen;
