import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Avatar, RadioButton } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const navigation = useNavigation();

  const handleImageUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
        
      }
    });
  };


  const handleCameraUpload = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
      }
    });
  };
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.h1}>Create Account</Text>
            <Text style={{fontFamily: "Raleway-Medium",color: "#172331", fontSize: 16, marginBottom: 10}}>phone</Text>
            <Text style={{ fontFamily: "Raleway-ExtraBold",color: "#172331",marginBottom: 10 }}>+91 9540826565</Text>
        </View>
      <TouchableOpacity style={styles.avatarContainer} onPress={handleImageUpload}>
        {/* {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <Text style={styles.avatarText}>Upload Avatar</Text>
        )} */}
        <View onPress={handleCameraUpload}>
            <Avatar.Image size={72} source={require("../assets/assets/avatar.png")}/>
            <Image style={{position: "absolute", bottom:2, right:0}} source={require("../assets/assets/cameraIcon.png")}/>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.cameraButton} >
        <Text style={styles.cameraButtonText}>Camera</Text>
      </TouchableOpacity> */}
      <View>
        <Text style={styles.inputLabel}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      </View>
      <View>
        <Text style={styles.inputLabel}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      </View>
      <View>
        <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      </View>
      <View style={styles.genderContainer}>
        
        <Text style={styles.inputLabel}>Gender:</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={styles.radioContainer}>
          <RadioButton
            value="male"
            color={'#4464D9'}
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text style={{color: gender==="male" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Male</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          color={'#4464D9'}
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />
          <Text style={{color: gender==="female" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Female</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          color={'#4464D9'}
            value="other"
            status={gender === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setGender('other')}
          />
          <Text style={{color: gender==="other" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Other</Text>
        </View>
       
        
        </View>
        <View style={{marginTop: 30, width:"100%" }} >
        <TouchableOpacity onPress={() => {
        navigation.navigate("HomePage");
      }}>
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  h1: {
    fontFamily: "Raleway-SemiBold",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 15,
    color: "#172331",
    marginTop: 30
  },
  avatarContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 16,
    marginTop: 10,
  },
  cameraButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputLabel:{
   fontFamily: "Raleway-SemiBold",
   fontSize: 14,
   color: "#172331",
   marginBottom: 5

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  genderLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
    color:"#172331"
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
  colorWhite: {
    fontFamily: "PlusJakartaSans-ExtraBold",
    color: "#fff",
    textAlign: "center",
  },
});

export default AccountScreen;