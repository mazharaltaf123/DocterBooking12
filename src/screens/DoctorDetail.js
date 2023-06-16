import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import ExpandMore from '../assets/assets/expand_more.svg';
import {Avatar} from 'react-native-paper';
import {Divider, Text} from 'react-native-paper';
import CalendarIcon from '../assets/assets/appointment.svg';
import HomeHealthIcon from '../assets/assets/home_health.svg';
import LocationIcon from '../assets/assets/my_location.svg';
import CoupenIcon from '../assets/assets/coupen.svg';
import { useNavigation } from '@react-navigation/native';

const DoctorDetail = () => {
  const  navigation = useNavigation()
  return (
    <ScrollView  style={styles.container} onContentSizeChange={(contentWidth, contentHeight)=>{
        _scrollToBottomY = contentHeight;
        }}>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
        <Image source={require('../assets/assets/icon-button.png')} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'flex-start',
          marginVertical: 20,
        }}>
        <Avatar.Image
          size={64}
          source={require('../assets/assets/doctorimg.png')}
        />
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text style={{color: '#172331', fontFamily: 'Raleway-Bold'}}>
              Dr Rahul
            </Text>
            <Image source={require('../assets/assets/verified.png')} />
          </View>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              Physiotherapist
            </Text>
            <View style={styles.dotCircle} />
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              24 yrs exp
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Image source={require('../assets/assets/star.png')} />
              <Text
                style={{
                  color: '#172331',
                  fontFamily: 'Raleway-SemiBold',
                  fontSize: 12,
                }}>
                4.1
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image source={require('../assets/assets/location.png')} />
              <Text
                style={{
                  color: '#172331',
                  fontFamily: 'Raleway-SemiBold',
                  fontSize: 12,
                }}>
                Patparganj
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.appointmentContainer}>
        <View style={{flexDirection: 'row', gap: 20, padding: 20}}>
          <View style={styles.circle}>
            <CalendarIcon style={styles.image} />
          </View>
          <View>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 10,
              }}>
              Appointment Time
            </Text>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-SemiBold',
                fontSize: 14,
              }}>
              Fri, 10 Mar 11:00 AM
            </Text>
          </View>
        </View>
        <Divider />
        <View style={{flexDirection: 'row', gap: 20, padding: 20}}>
          <View style={styles.circleGreen}>
            <HomeHealthIcon style={styles.image} />
          </View>
          <View>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 10,
              }}>
              Patient Address
            </Text>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 14,
                width: '70%',
              }}>
              C-12/74, Khirki Ext. Malviya nagar New Delhi, 110017
            </Text>
          </View>
          <Divider />
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 5,
          }}>
          <LocationIcon />
          <Text
            style={{
              color: '#4464D9',
              fontFamily: 'Raleway-SemiBold',
              fontSize: 12,
            }}>
            Choose current location
          </Text>
        </View>
       
      </View>
      <Divider/>
      <View
        style={{
          marginVertical: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderColor: '#F5F7F9',
          borderWidth: 1,
          borderRadius: 12,
          paddingVertical: 5,
          alignContent: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <CoupenIcon />
          <View>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-SemiBold',
                fontSize: 14,
              }}>
              Apply Coupon
            </Text>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 12,
                width: '80%',
              }}>
              Unlock offers with coupon codes
            </Text>
          </View>
        </View>
        <TouchableOpacity>
        <Text
          style={{
            color: '#4464D9',
            fontFamily: 'Raleway-SemiBold',
            fontSize: 12,
          }}>
          APPLY
        </Text>
        </TouchableOpacity>
      </View>
    
      <View>
        <Text style={{fontFamily:"Raleway-SemiBold", fontSize: 14, color: "#172331", marginBottom: 10}}>Bill Details</Text>
        <View style={{marginBottom: 20}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>Consultation Fee</Text>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>₹1000</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>Service Fee & Tax</Text>
          <Text style={{
              color: '#48BD69',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>Free</Text>
        </View>
        </View>
        <Divider style={{borderColor:"#48BD69"}} />
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Bold',
              fontSize: 14,
            }}>Total Payable</Text>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Bold',
              fontSize: 14,
            }}>₹1000</Text>
        </View>
      </View>
      <View style={{marginTop: 30, width:"100%" }} >
        <TouchableOpacity onPress={()=>{
          navigation.navigate("AmountPayment")
        }} >
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  appointmentContainer: {
    backgroundColor: '#F5F7F9',
    borderRadius: 12,
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleGreen: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: '#48BD69',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: "#4464D9",
    width: "100%",
    height: 48,
    color: "#fff",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
});
