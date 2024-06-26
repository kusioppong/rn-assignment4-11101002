// src/screens/HomeScreen.js
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TransactionItem from "../components/TransactionItem";

const HomeScreen = () => {
  const transactions = [
    { id: "1", description: "Grocery Shopping", amount: "$88" },
    { id: "2", description: "Apple Store Entertainment", amount: "$5.99" },
    { id: "3", description: "Spotify Music", amount: "$12.99" },
    { id: "4", description: "Apple Store Entertainment", amount: "$5.99" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back, Eric Atsu</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem {...item} />}
      />
      <View style={styles.card}>
        <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
        <Text style={styles.cardHolder}>AR Jonson</Text>
        <Text style={styles.expiryDate}>Expiry Date: 24/2000</Text>
        <Text style={styles.cvv}>CVV: 6986</Text>
        <Text style={styles.cardType}>Mastercard</Text>
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
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 16,
    marginBottom: 10,
  },
  expiryDate: {
    fontSize: 14,
    marginBottom: 10,
  },
  cvv: {
    fontSize: 14,
    marginBottom: 10,
  },
  cardType: {
    fontSize: 14,
  },
});

export default HomeScreen;
