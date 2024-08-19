import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import "reflect-metadata";

export default () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: route.name.startsWith("(products)") ? "none" : "flex",
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "tiendas",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="map" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "categorias",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="odnoklassniki-square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="heart" color={color} />
          ),
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="auth"
        options={{
          title: "auth",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="sign-in" color={color} />
          ),
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="(products)"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
};
