import React, { useMemo, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { darkColors, lightColors } from "./src/theme/colors";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <View style={[styles.themeToggle, { borderColor: colors.border }]}> 
        <Text style={[styles.themeLabel, { color: colors.textSecondary }]}>Dark mode</Text>
        <Switch value={isDark} onValueChange={setIsDark} />
      </View>
      <HomeScreen colors={colors} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1
  },
  themeLabel: {
    fontSize: 13,
    fontWeight: "600"
  }
});
