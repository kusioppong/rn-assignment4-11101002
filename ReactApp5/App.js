import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/Settings";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ isDarkTheme }) => (
          <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconPath;

                  if (route.name === "Home") {
                    iconPath = require("./assets/home.png");
                  } else if (route.name === "My Cards") {
                    iconPath = require("./assets/credit.png");
                  } else if (route.name === "Statistics") {
                    iconPath = require("./assets/pie.png");
                  } else if (route.name === "Settings") {
                    iconPath = require("./assets/settings.png");
                  }

                  return (
                    <Image
                      source={iconPath}
                      style={{ width: size, height: size, tintColor: color }}
                    />
                  );
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="My Cards" component={SettingsScreen} />
              <Tab.Screen name="Statistics" component={SettingsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

const lightTheme = {
  dark: false,
  colors: {
    primary: "#ffffff",
    background: "#f5f5f5",
    card: "#ffffff",
    text: "#333333",
    border: "#cccccc",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#000000",
    background: "#333333",
    card: "#444444",
    text: "#ffffff",
    border: "#555555",
  },
};

export default App;
