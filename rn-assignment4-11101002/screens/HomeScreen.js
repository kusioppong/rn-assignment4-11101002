import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
  { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Mountain View, CA' },
];

const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
  { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <TextInput style={styles.searchBar} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) => (
          <View style={styles.featuredJobCard}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text>{item.company}</Text>
            <Text>{item.salary}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text>{item.company}</Text>
            <Text>{item.salary}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  email: {
    color: 'gray',
    marginLeft: 20,
  },
  searchBar: {
    margin: 20,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  featuredJobCard: {
    padding: 20,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 10,
  },
  popularJobCard: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  jobTitle: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
