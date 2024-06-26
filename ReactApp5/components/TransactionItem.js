// src/components/TransactionItem.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionItem = ({ description, amount }) => (
  <View style={styles.transaction}>
    <Text>{description}</Text>
    <Text>{amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default TransactionItem;
