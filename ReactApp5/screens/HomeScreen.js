// src/screens/HomeScreen.js
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Image } from "react-native";
import TransactionItem from "../components/TransactionItem";
import download from "../assets/download.png";
import spotify from "../assets/spotify.png";
import cart from "../assets/cart.png";
import apple from "../assets/apple.png";
import mastercard from "../assets/mastercard.png";

const HomeScreen = () => {
  const transactions = [
    { id: "1", img: cart, description: "Grocery Shopping", amount: "$88" },
    {
      id: "2",
      img: apple,
      description: "Apple Store Entertainment",
      amount: "$5.99",
    },
    { id: "3", img: spotify, description: "Spotify Music", amount: "$12.99" },
    { id: "4", img: download, description: "Money Transfer", amount: "$300" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back, Oppong Kusi</Text>

      <View style={styles.card}>
        <View></View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={styles.cardNumber}>4562</Text>
          <Text style={styles.cardNumber}>1122</Text>
          <Text style={styles.cardNumber}>4595</Text>
          <Text style={styles.cardNumber}>7852</Text>
        </View>
        <View>
          <Text style={styles.cardHolder}>OPPONG KUSI</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ gap: 10 }}>
            <Text style={{ color: "#aaa" }}>Expiry Date</Text>
            <Text style={styles.expiryDate}>08/2004</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ color: "#aaa" }}>CVV</Text>
            <Text style={styles.cvv}>6986</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Text style={styles.cardType}>Mastercard</Text>
            <Image src={mastercard} />
          </View>
        </View>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem {...item} />}
      />
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
    flexDirection: "column",
    gap: "20",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardNumber: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 20,
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
  cardLogo: {
    width: 50,
    height: 30,
    resizeMode: "contain",
    marginTop: 10,
  },
});

export default HomeScreen;
