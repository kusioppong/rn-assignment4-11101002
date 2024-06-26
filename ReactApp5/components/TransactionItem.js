// src/components/TransactionItem.js
import React from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const TransactionItem = ({ img, description, amount }) => (
  <View style={styles.transaction}>
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Image src={img} style={{ width: 50, height: 50 }} />
      <Text>{description}</Text>
    </View>
    <Text>{amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default TransactionItem;
