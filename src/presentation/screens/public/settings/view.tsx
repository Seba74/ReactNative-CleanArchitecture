import { View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "@/presentation/context/ThemeContext";
import { Divider, List } from "react-native-paper";
import Notification from "@assets/icons/filled/bell";
import Home from "@assets/icons/filled/home";
import Help from "@assets/icons/filled/help";
import Lock from "@assets/icons/filled/privacy";
import FileDocument from "@assets/icons/filled/paper";
import Logout from "@assets/icons/filled/logout";
import Info from "@assets/icons/filled/info";
import { router } from "expo-router";
import Layout from "@/presentation/components/ui/Layout";

const SettingsScreen = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Layout>
      <List.Section>
        <View>
          <List.Item
            title="Inicio"
            left={() => <Home color={colors.text} size={24} />}
            onPress={() => router.replace("/home")}
            style={{ paddingLeft: 16 }}
          />
          <List.Item
            title="Notifications"
            left={() => <Notification color={colors.text} size={24} />}
            style={{ paddingLeft: 16 }}
          />
          <List.Item
            title="Ayuda"
            left={() => <Help color={colors.text} size={24} />}
            style={{ paddingLeft: 16 }}
          />
        </View>
        <Divider />
        <View>
          <List.Item
            title="Privacy"
            left={() => <Lock color={colors.text} size={24} />}
            style={{ paddingLeft: 16 }}
          />
          <List.Item
            title="Terms & Conditions"
            left={() => <FileDocument color={colors.text} size={24} />}
            style={{ paddingLeft: 16 }}
          />
          <List.Item
            title="About"
            left={() => <Info color={colors.text} size={24} />}
            style={{ paddingLeft: 16 }}
          />
          <List.Item
            title="Cerrar Sesión"
            left={() => <Logout color={colors.text} size={24} />}
            onPress={() => console.log("Cerrar Sesión")}
            style={{ paddingLeft: 16 }}
          />
        </View>
      </List.Section>
    </Layout>
  );
};

export default SettingsScreen;
