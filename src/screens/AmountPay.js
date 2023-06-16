import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ArrowIcon from '../assets/assets/Vector.svg'
import NotBanKing from '../assets/assets/credit_card.svg'
import Upi from '../assets/assets/upi.svg'
import Paytm from '../assets/assets/paytm.svg'
import GooglePlay from '../assets/assets/googleplay.svg'
import CreditCard from '../assets/assets/credit.svg'
import PhonePE from '../assets/assets/phonepe.svg'
import COD from '../assets/assets/creditBill.svg'
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const AmountPay = () => {
 const navigation = useNavigation();
  return (
    <>
      <View style={{backgroundColor:"#4464D9", padding: 20,}}>
        <ArrowIcon style={{position:"absolute" , left: 20, top: 30}}/>
        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
            <Text style={{fontFamily:"Raleway-SemiBold", fontSize:16, color:"#fff"}}>Amount To Pay</Text>
            <Text style={{fontFamily:"Raleway-Bold", fontSize:24, color:"#fff"}}>₹1000</Text>
        </View>
      </View>
      <View style={{backgroundColor:"#fff", flex: 1}}>
        <View style={styles.cardContainer}>
            <CreditCard/>
            <Text style={styles.cardTitle}>Credit/Debit Card</Text>
        </View>
        <View style={styles.cardContainer}>
            <NotBanKing/>
            <Text style={styles.cardTitle}>Net Banking</Text>
        </View>
        <View style={styles.cardContainer}>
            <Paytm/>
            <Text style={styles.cardTitle}>Paytm & Wallet</Text>
        </View>
        <View style={styles.cardContainer}>
            <Upi/>
            <Text style={styles.cardTitle}>UPI</Text>
        </View>
        <View style={styles.cardContainer}>
            <GooglePlay/>
            <Text style={styles.cardTitle}>Google Pay</Text>
        </View>
        <View style={styles.cardContainer}>
            <PhonePE/>
            <Text style={styles.cardTitle}>PhonePe/BHIM UPI</Text>
        </View>
        <View style={styles.cardContainer}>
            <COD/>
            <Text style={styles.cardTitle}>Cash on Delivery</Text>
        </View>

        <View style={{marginTop: 80, width:"100%", padding: 20 }} >
        <TouchableOpacity onPress={() => {
        navigation.navigate("BookingDone");
      }}>
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Pay ₹1000</Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20
  },
  cardContainer:{
    borderBottomColor:"#E7E7E7", borderWidth: 1, borderColor:"transparent", paddingHorizontal: 20, paddingVertical:15, flexDirection:"row", alignItems:"center", gap: 15
  },
  cardTitle:{
    fontFamily: "Raleway-SemiBold",
    fontSize: 14,
    color: "#172331"
  },
  button: {
    backgroundColor: "#4464D9",
    width: "100%",
    height: 48,
    color: "#fff",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
});

export default AmountPay;