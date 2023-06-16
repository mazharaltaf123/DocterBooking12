import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../assets/assets/log.svg'
const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <View >
          <Logo/>
     </View>
     </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4464D9',
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
    zIndex: 1
},
  image2: {
    position: "absolute",
    width: 100,
    height: 70,
    resizeMode: 'contain',
    left: 2,
    top: 8,
}
});

export default SplashScreen;
