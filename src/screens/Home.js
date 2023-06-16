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
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };

  return (
    <View>
      
      <View style={styles.firstSection}>
     
        <View style={styles.row}>
          <View>
          <Image source={require('../assets/assets/logo.png')} style={{zIndex: 1}} />
          <Image style={{position: "absolute"}} source={require('../assets/assets/logo2.png')} />
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate("Intro")}>
          <View style={styles.btnOutline}>
            <Text style={styles.textWhite}>Continue as a Doctor</Text>
          </View>
          </TouchableOpacity>
        </View>
        <Swiper
        loop={false}
        onIndexChanged={handleIndexChanged}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        >
        <View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginTop: 40,
          }}>
          <Image source={require('../assets/assets/illustration.png')} />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginTop: 40,
          }}>
          <Text style={{ fontFamily: "Raileway-Regular", fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 5}}>Thousands of doctors</Text>
          <Text style={{fontFamily: "Raileway-Regular", fontWeight: 400, fontSize: 12, color: "#fff", textAlign:"center", alignItems:"center", width:"60%", lineHeight: 16}}>
            Access thousands of doctors instantly. </Text>
            <Text style={{fontFamily: "Raileway-Regular", fontWeight: 400, marginBottom: 20, fontSize: 12, color: "#fff", textAlign:"center", alignItems:"center" , width:"75%", lineHeight: 16}}>
            You can easily contact with
            the doctors and contact for your needs.
          </Text>
        </View>
        </View>
        </Swiper>
        <View style={styles.dotsContainer}>
        <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
        <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
      </View>
        
      </View>
      
      <View style={styles.lastSection}> 
        <Text style={{color: "#172331", width: "70%", fontFamily:"Raleway-Bold" , fontSize: 20, }}>Get Professional Doctor at One Click</Text>
        <TouchableOpacity>
        <View style={{width: "100%", borderRadius: 10, justifyContent:"center", alignItems:"center" , backgroundColor:"#4464D9" , padding:12, marginTop: 10}}>
          <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Regular", fontWeight: 500}}>Get Started</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  firstSection: {
    backgroundColor: '#4464D9',
    height: '80%',
    padding: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"linear-gradient(180deg, rgba(0, 0, 0, 0.6) 1.04%, rgba(0, 0, 0, 0) 27.93%, rgba(0, 0, 0, 0.8) 100%)"
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textWhite: {
    color: '#fff',
    fontFamily: "Raleway-Medium",
    fontSize: 12
  },
  lastSection:{
    marginTop: 20,
    justifyContent: "center",
    paddingHorizontal : 30
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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

export default Home;
