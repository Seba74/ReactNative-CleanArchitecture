import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePosts } from "@/presentation/hooks/usePosts";

const HomeScreen = () => {
  const topSafeArea = useSafeAreaInsets().top;
  const { data, isLoading } = usePosts();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={{ top: topSafeArea }}>
      <Text>HomeScreen</Text>

      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
