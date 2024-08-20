import { View } from "react-native";
import useHomeViewModel from "./view.model";
import { FlatList } from "react-native";
import { Text } from "react-native-paper";
import Layout from "@/presentation/components/ui/Layout";

const HomeScreen = () => {
  const { posts, isLoading } = useHomeViewModel();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Layout>
      <Text>HomeScreen</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default HomeScreen;
