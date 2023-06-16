import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const MobileAuthentication = () => {
//   const [loaded] = useFonts({
//     Raileway: require("../../assets/fonts/Raleway-Regular.ttf"),
//     // PlusJakartaSans : require("../assets/fonts/PlusJakartaSans-Regular.ttf")
//   })
  const navigation = useNavigation();
  let textInput = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, SetFocusInput] = useState(true)

  const onChangeFocus = ()=>{
    SetFocusInput(true)
  }
  const handleChange = (number)=>{
   setPhoneNumber(number)
  }
  // const onPressContinue = ()=>{
  //   if(phoneNumber){
  //      navigator.navigate("OTPVerify")
  //   }
  // }
  useEffect(()=>{
//   textInput.focus()
  },[])
  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity  onPress={() => {
        navigation.goBack();
      }}>
        <Image source={require("../assets/assets/icon-button.png")}/>
        </TouchableOpacity>
        <Text style={styles.h1}>Enter your mobile no.</Text>
        <View style={styles.inputFiedls}>
        <TextInput  
         style={{fontFamily:"Raleway-Medium", fontSize:16,  color:"#172331"}} placeholder='99001 99001' 
        onChangeText={handleChange}
        onFocus={onChangeFocus}
        value={phoneNumber}
        // onChange={handleChange}
        secureTextEntry={false}
        keyboardType='numeric'/>
        </View>
        </View>
          <TouchableOpacity onPress={() => navigation.navigate("OTPVerify")} style={{justifyContent: "flex-end" , flex: 2, alignContent: "flex-end"}}>
            <View style={styles.button}>
              <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}} >Get Started</Text>
            </View>
          </TouchableOpacity>
          </View>
 )
}

export default MobileAuthentication

const styles = StyleSheet.create({
   container:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor : "#fff",
    height: "100%"
   },
  
   input: {
    fontFamily: "Raileway",
    width: 1000,
    height: 64,
    fontSize: 26,
    marginVertical: 10,
}, 
   h1:{
    fontFamily: "Raleway-Medium",
    marginTop: 24,
    color: "#172331",
   fontSize: 20,
   fontWeight: 500,
   marginBottom: 20
   },
   inputFiedls:{
    fontFamily: "Raleway-Medium",
    backgroundColor: "#fff",
    borderColor: "#EBEBEB",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginBottom: 20,
    borderRadius: 8,
    height: 48,
    color:"#172331",
    
   },
   button:{
    backgroundColor: "#4464D9",
    width: '100%',
    height: 48,
   color: "#fff",
   borderRadius : 10,
   display: 'flex',
   alignItems: "center",
   justifyContent:"center",
   marginBottom: 10
   },
   colorWhite:{
    fontFamily: "PlusJakartaSans",
   color : "#fff",
   textAlign: "center",
   fontWeight: 600,
   }
})