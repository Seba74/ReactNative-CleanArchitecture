import { Tabs } from "expo-router";
import React, { useContext } from "react";
import {
  CustomIcon,
  IconName,
} from "@/presentation/components/navigation/CustomIcon";
import { ThemeContext } from "@/presentation/context/ThemeContext";
import { View } from "react-native";
import "reflect-metadata";

export default function TabLayout() {
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
      screenOptions={{
        tabBarActiveTintColor: colors.onPrimaryContainer,
        tabBarInactiveTintColor: colors.outline,
        tabBarStyle: {
          height: bottomTabBarHeight,
          paddingBottom: 4,
          backgroundColor: colors.background,
          borderTopColor: colors.outlineVariant,
        },
        tabBarItemStyle: {
          paddingVertical: 3,
        },
        headerShown: false,
      }}
    >
      {screens.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  {
                    position: "absolute",
                    paddingHorizontal: 22,
                    paddingVertical: 3,
                    borderRadius: 50,
                  },
                  focused && { backgroundColor: colors.primaryContainer },
                ]}
              >
                <CustomIcon
                  name={icon as IconName}
                  color={color}
                  focused={focused}
                  size={focused ? 22 : 24}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
