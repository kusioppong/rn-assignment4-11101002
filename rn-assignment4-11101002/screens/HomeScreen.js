import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { Image } from'react-native';
import Avatar from '../assets/avatar.png';
import coca from '../assets/coca.png';
import mtn from '../assets/mtn.png';
import telecel from '../assets/Telecel.png';
import beats from '../assets/Beats.png';
import burger from '../assets/burger.png';
import apple from '../assets/apple-auth.png';
import google from '../assets/google-auth.png';
import kfc from '../assets/kfc.png';

const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Telecel', salary: '$180,000', location: 'Accra, Ghana', img: burger },
  { id: '2', title: 'Cook', company: 'Apple', salary: '$60,000', location: 'Mountain View, CA', img: apple },
  { id: '3', title: 'Snr Research Engineer', company: 'Google', salary: '$260,000', location: 'Mountain View, CA', img: google },
  { id: '4', title: 'Product Manager', company: 'Telecel', salary: '$160,000', location: 'Kumasi, GH', img: telecel },
  { id: '5', title: 'Network Engineer', company: 'MTN', salary: '$130,000', location: 'Kumasi, GH', img: mtn },
  { id: '6', title: 'cyberSecurity Manager', company: 'Google', salary: '$180,000', location: 'Miami, US', img: google },
  { id: '7', title: 'Sales Manager', company: 'KFC', salary: '$140,000', location: 'Koforidua, GH', img: kfc },
  { id: '8', title: 'Snr Software Engineer', company: 'MTN', salary: '$130,000', location: 'Takoradi, GH', img: mtn },
];

const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$196,000/y', location: 'Los Angeles, US', img: burger },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$104,000/y', location: 'Florida, US', img: beats },
  { id: '3', title: 'Data Engineer', company: 'Google', salary: '$86,000/y', location: 'Ghana, GH', img: google },
  { id: '4', title: 'Front end Engineer', company: 'Apple', salary: '$97,000/y', location: 'Florida, US', img: apple },
  { id: '5', title: 'Front End Engineer', company: 'MTN Gh', salary: '$76,000/y', location: 'Accra, GH', img: mtn },
  { id: '6', title: 'Network Engineer', company: 'Coca-Cola', salary: '$86,000/y', location: 'London, UK', img: coca },
  { id: '7', title: 'Back End Engineer', company: 'Telecel Gh', salary: '$326,000/y', location: 'Accra, GH', img: telecel },
  { id: '8', title: 'CyberSecurity Engineer', company: 'KFC', salary: '$186,000/y', location: 'Takoradi, GH', img:kfc },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarText}>
        <View style={styles.auth}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <View style={styles.Avatar}>
          <Image source={Avatar} style={styles.Avatar}/>
        </View>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) => (
          <View style={styles.featuredJobCard}>
            <View style={styles.top}>
              <View>
                <Image source={item.img} style={styles.Featimg} />
              </View>

              <View style={styles.padd}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text>{item.company}</Text>
              </View>
            </View>
            
            <View style={styles.bottom}>
              <Text>{item.salary}</Text>
              <Text>{item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <View>
              <Image source={item.img} style={styles.img} />
            </View>
            <View style={styles.padd}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text>{item.company}</Text>
            </View>
            <View style={styles.padd}>
              <Text>{item.salary}</Text>
              <Text>{item.location}</Text>
            </View>
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
    paddingBottom: '30px',
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
  avatarText: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  Avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
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
    width: 300,
    height: '80%',
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent:'space-between',
    gap: 10,
  },
  top:{
    flexDirection: 'row',
    justifyContent:'',
    alignItems: 'center',
  },
  bottom:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    gap: 10,
  },
  Featimg: {
    width: 70,
    height: 70,
    borderRadius: 14,
    backgroundColor: '#fff',
  },
  img:{
    width: 90,
    height: 90,
    borderRadius: 25,
    marginLeft: 'auto',
  },
  padd: {
    padding: 10,
    flexDirection: 'column',
    justifyContent:'space-between',
    gap: 10,
  },
  popularJobCard: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    shadowColor:'#ddd',
    shadowOffset: { width: 0, height: 2,},
    shadowOpacity: 8.25,
    shadowRadius: 5.84,
    elevation: 9,
    margin: 10,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    gap: 10,  
  },
  jobTitle: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
