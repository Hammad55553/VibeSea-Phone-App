import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const iconData = [
  { id: '1', source: require('../../assets/icons/washing.png'), label: 'Washer' },
  { id: '2', source: require('../../assets/icons/balcony.png'), label: 'Balconay' },
  { id: '3', source: require('../../assets/icons/parking.png'), label: 'Parking' },
  { id: '4', source: require('../../assets/icons/kitchen.png'), label: 'Kitchen' },
  { id: '5', source: require('../../assets/icons/pet.png'), label: 'Pet friendly' },
];

const DetailedPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/detailedpage.jpg')}
        style={styles.bannerImage}
        resizeMode="cover"
      />
      
      <TouchableOpacity style={styles.backButton}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.iconLeft}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.likeButton}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/icons/like.png')}
            style={styles.iconRight}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.descriptionBox}>
        <View style={styles.headerRow}>
          <Text h1 style={styles.priceText}>$700/m</Text>
          <View style={styles.availabilityBox}>
            <Text style={styles.availabilityText}>Availability Status</Text>
            <Text style={styles.dateText}>1 Jul - 31 Aug</Text>
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={[styles.title, styles.textSpacing]}>Spacious 2-Bedroom Apartment</Text>
          <Text style={[styles.subtitle, styles.textSpacing]}>Duplex Apartment</Text>
          <Text style={styles.address}>1234 Pine Street, Apartment 567, Seattle</Text>
        </View>
        <View style={styles.iconBox}>
          <FlatList
            data={iconData}
            renderItem={({ item }) => (
              <View style={styles.iconItem}>
                <View style={styles.iconBackground}>
                  <Image source={item.source} style={styles.descriptionIcon} />
                </View>
                <Text style={styles.iconLabel}>{item.label}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            style={styles.iconList}
          />
        </View>
        <View style={styles.descriptionTextBox}>
          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.descriptionTextBottom}>
            Great 2-bedroom, 2-bathroom apartment in downtown Seattle. Fully furnished with a modern open floor plan, stainless steel kitchen appliances, and a private balcony with city views. Perfect location close to dining, shopping, and entertainment.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 19.5,
    zIndex: 1,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    width: 5.63,
    height: 11.25,
    tintColor: '#fff',
  },
  iconRight: {
    width: 16.67,
    height: 15.29,
    tintColor: '#fff',
  },
  descriptionBox: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2441D0',
  },
  availabilityBox: {
    alignItems: 'flex-end',
  },
  availabilityText: {
    fontSize: 12,
  },
  dateText: {
    fontSize: 14,
    color: "#2441D0",
  },
  textBox: {
    marginTop: 8,
  },
  textSpacing: {
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  iconBox:{
    
  },
  iconList: {
    marginTop: 16,
  },
  iconItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  iconBackground: {
    backgroundColor: '#F7F8FA',
    padding: 8,
    borderRadius: 5,
  },
  descriptionIcon: {
    width: 48,
    height: 48,
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
    color: '#7B7B7B',
  },
  descriptionTextBox: {
    marginTop: 16,
  },
  descriptionHeading: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: "#000000",
  },
  descriptionTextBottom: {
    fontSize: 14,
    color: "#7B7B7B",
  }
});

export default DetailedPage;

//dat and avaibility right align
//desc top widtg 
//rledt align of des
//https://katb.in/evereloronu code of slider