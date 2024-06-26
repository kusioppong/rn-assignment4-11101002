// src/screens/SettingsScreen.js
import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { rightArrow } from "../assets/rightarrow.png";

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.setting}>
        <Text style={{ fontSize: 17 }}>My Profile</Text>
      </View>

      <View style={styles.setting}>
        <Text style={{ fontSize: 17 }}>Language</Text>
      </View>

      <View style={styles.setting}>
        <Text style={{ fontSize: 17 }}>Change Password</Text>
      </View>
      <View style={styles.setting}>
        <Text style={{ fontSize: 17 }}>Privacy Policy</Text>
      </View>

      <View style={styles.setting}>
        <Text style={{ fontSize: 17 }}>Dark Theme</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
    fontSize: 44,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 30,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default SettingsScreen;
