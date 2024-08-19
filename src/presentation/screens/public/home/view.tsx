import { Text, View } from "react-native";
import useHomeViewModel from "./view.model";
import { FlatList } from "react-native";

const HomeScreen = () => {
  const { posts, isLoading } = useHomeViewModel();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
