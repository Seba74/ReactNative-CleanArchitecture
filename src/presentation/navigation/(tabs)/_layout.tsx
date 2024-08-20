import { Tabs } from "expo-router";
import "reflect-metadata";
import { ThemeContext } from "@/presentation/context/ThemeContext";
import { useContext } from "react";
import { CustomIcon } from "@/presentation/components/navigation/CustomIcon";

export default () => {
  const { colors } = useContext(ThemeContext);
  const bottomTabBarHeight = 55;

  const screens = [
    { name: "home", title: "Inicio", icon: "home" },
    { name: "map", title: "Tiendas", icon: "map" },
    { name: "categories", title: "Explorar", icon: "explore" },
    { name: "suscriptions", title: "Suscripciones", icon: "store" },
    { name: "settings", title: "Más", icon: "more" },
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
        },
        tabBarItemStyle: {
          paddingVertical: 3,
        },
      })}
    >
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ color }) =>
              CustomIcon({
                name: screen.icon as any,
                focused: color === colors.onPrimaryContainer,
                size: 24,
                color: color,
                bg: colors.primaryContainer,
              }),
          }}
        />
      ))}
      <Tabs.Screen
        name="auth"
        options={{
          title: "auth",
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
