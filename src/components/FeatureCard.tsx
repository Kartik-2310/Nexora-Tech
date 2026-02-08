import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { ThemeColors } from "../theme/colors";

interface FeatureCardProps {
  title: string;
  description: string;
  colors: ThemeColors;
}

export function FeatureCard({ title, description, colors }: FeatureCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}> 
      <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 3
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6
  },
  description: {
    fontSize: 13,
    lineHeight: 18
  }
});
