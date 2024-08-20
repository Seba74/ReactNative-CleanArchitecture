import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import "reflect-metadata";
import { ThemeContext } from "@/presentation/context/ThemeContext";
import { useContext } from "react";

export default () => {

  const { colors } = useContext(ThemeContext);
  const bottomTabBarHeight = 55;

  const screens = [
    { name: "index", title: "Inicio", icon: "home" },
    { name: "map", title: "Tiendas", icon: "map" },
    { name: "explore", title: "Explorar", icon: "explore" },
    { name: "suscriptions", title: "Suscripciones", icon: "store" },
    { name: "more", title: "Más", icon: "more" },
  ];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.onPrimaryContainer,
        tabBarInactiveTintColor: colors.outline,
        tabBarStyle: {
          height: bottomTabBarHeight,
          paddingBottom: 4,
          backgroundColor: colors.background,
          borderTopColor: colors.outlineVariant,
          display: route.name.startsWith("(products)") ? "none" : "flex",
        },
        tabBarItemStyle: {
          paddingVertical: 3,
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
