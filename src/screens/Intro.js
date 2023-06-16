import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
// import Swiper from 'react-native-swiper';
const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        
        <Image resizeMethod={'auto'} style={styles.image} source={require("../assets/assets/bg.png")}/>
        <View style={styles.row}>
          <View>
          <Image source={require('../assets/assets/logo.png')} style={{zIndex: 1}} />
          <Image style={{position: "absolute"}} source={require('../assets/assets/logo2.png')} />
          </View>
          <TouchableOpacity >
          <View style={{backgroundColor: "#fff", opacity: 0.6, borderRadius: 20, padding: 10}}>
            <Text style={styles.textBlack}>Skip</Text>
          </View>
          </TouchableOpacity>
        </View>
        <Swiper
        loop={false}
        onIndexChanged={handleIndexChanged}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        >
        <View style={{position:"absolute", bottom: 10, left: 30}}>
          <Text style={{ fontFamily: "Raileway-Regular", fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 5}}>Thousands of doctors</Text>
          <Text style={{fontFamily: "Raileway-Regular", fontWeight: 400, fontSize: 12, color: "#fff",  width:"40%", lineHeight: 16}}>Access thousands of doctors instantly.
You can easily contact with the doctors and contact for your needs.</Text>
        </View>
        </Swiper>
        <View style={styles.dotsContainer}>
        <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
      </View>
      </View>
      <View style={styles.lastSection}>
        <Text style={{color: "#172331", width: "70%", fontFamily:"Raleway-Bold" , fontSize: 20, }}>Get Professional Doctor
at One Click</Text>
        <TouchableOpacity >
        <View style={{width: "100%", borderRadius: 10, justifyContent:"center", alignItems:"center" , backgroundColor:"#4464D9" , padding:12, marginTop: 10}}>
          <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Regular", fontWeight: 500}}>Get Started</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Authentication")}>
        <View style={{alignItems:"center", marginTop: 10}}>
          <Text style={{color:"#4464D9",  fontWeight: 700, fontFamily:"PlusJakartaSans-Regular", fontSize: 16}}>Doctor Login</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  firstSection: {
    height: '75%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  btnOutline: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
  },
  textWhite: {
    color: '#fff',
    fontFamily: "Raleway-Regular"
  },
  textBlack:{
    color : "#000",
    fontFamily: "Raleway-Regular",
    fontWeight: 600
  },
  lastSection:{
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal : 30
  },
  image: {
    width: "100%",
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    height: "100%",
    alignSelf: "flex-end"
},
dotsContainer: {
  flexDirection: 'row',
  marginTop: 10,
  marginLeft: 30,
  marginBottom: 20
},
dot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: '#fff',
  marginHorizontal: 5,
  opacity: 0.4,
},
activeDot: {
  backgroundColor: '#fff',
  opacity: 1
},
});

export default Intro;
