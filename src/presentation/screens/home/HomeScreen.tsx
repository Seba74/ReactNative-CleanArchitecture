import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePosts } from "@/presentation/hooks/usePosts";
import { ThemeContext } from "@/presentation/context/ThemeContext";
import { Text } from "react-native-paper";
const HomeScreen = () => {
  const topSafeArea = useSafeAreaInsets().top;
  const { colors } = useContext(ThemeContext);
  const { data, isLoading } = usePosts();

  return (
    <View style={{ top: topSafeArea, backgroundColor: colors.background }}>
      <Text>HomeScreen</Text>

      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text variant="bodyMedium">{item.title}</Text>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
