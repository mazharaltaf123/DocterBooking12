import React, { useState } from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView, Dimensions  } from 'react-native'
import ExpandMore from "../assets/assets/expand_more.svg"
import { Avatar } from 'react-native-paper'
import MorningICon from '../assets/assets/noon.svg'
import NoonICon from '../assets/assets/Morning.svg'
import EveningICon from '../assets/assets/Evening.svg'
import HomeIcon from '../assets/assets/group.svg'
import ReviewComponent from '../components/Reviews';
import ArrowOutward from '../assets/assets/arrow_outward.svg';
import { useNavigation } from "@react-navigation/native";



const DoctorBooking = () => {
  const navigation = useNavigation();
    const currentDate = new Date();
    const daysInNumber = [ 'M', 'T', 'W', 'T', 'F', 'S'];
    const morningTimings = ['09:00 AM', '11:00 AM', '11:30 AM'];
  const afternoonTimings = ['12:00 PM', '12:30 PM'];
  const eveningTimings = ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'];
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };
    const [selectedDayIndex, setSelectedDayIndex] = useState(null);

    const handleDayPress = (index) => {
      setSelectedDayIndex(index);
    };
    const windowWidth = Dimensions.get('window').width;

  const calendarContainerWidth = windowWidth * 0.11;
  const calendarContainerHeight = calendarContainerWidth;
  const calendarContainerMargin = calendarContainerWidth * 0.1;

  const calendarContainerStyle = {
    width: calendarContainerWidth,
    // height: calendarContainerHeight,
    margin: calendarContainerMargin,
    backgroundColor:"#fff", borderWidth: 1, borderColor:"#E7E7E7",
    height: 67, justifyContent:"center", alignItems: "center", borderRadius:30
  };

  const dayTextStyle = {
    fontSize: 12,
    color: '#78879A',
    fontFamily: "Raleway-SemiBold"
  };

  const dateTextStyle = {
    fontSize: 14,
    color: '#172331',
    fontFamily: "Raleway-Bold"
  };

  const calendarContainerSelectedStyle = {
    ...calendarContainerStyle,
    backgroundColor: '#4464D9',
  };

  const daySelectedTextStyle = {
    ...dayTextStyle,
    color: 'white',
  };

  const dateSelectedTextStyle = {
    ...dateTextStyle,
    color: 'white',
  };

  return (
    <ScrollView style={styles.container}>
     <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
        <Image source={require("../assets/assets/icon-button.png")}/>
        </TouchableOpacity>
        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start", marginVertical: 20}}>
        <Avatar.Image size={64} source={require('../assets/assets/doctorimg.png')} />
        <View style={{gap: 5}}>
           <View style={{flexDirection:"row", alignItems:"center", gap:2, }}>
                    <Text style={{color:"#172331", fontFamily:"Raleway-Bold", }}>Dr Rahul</Text>
                    <Image source={require("../assets/assets/verified.png")}/>
                </View>
                <View style={{flexDirection:"row", gap: 5, alignItems:"center"}}>
                    <Text style={{color:"#172331", fontSize:12, fontFamily:"Raleway-SemiBold"}}>Physiotherapist</Text>
                    <View style={styles.dotCircle} />
                    <Text style={{color:"#172331", fontSize:12, fontFamily:"Raleway-SemiBold"}}>24 yrs exp</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", gap: 10}}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 2, }}>
                    <Image source={require("../assets/assets/star.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raleway-SemiBold", fontSize: 12}}>4.1</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                    <Image source={require("../assets/assets/location.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raleway-SemiBold",  fontSize: 12}}>Patparganj</Text>
                    </View>
                    
                </View>
        </View>
        </View>
        <View>
            
            
            {/* <Text style={styles.day}>{daysInNumber[dayInNumber]}</Text>
      <Text style={styles.date}>{day}</Text> */}
      <View style={{flexDirection: "row", gap: 5}}>
      {daysInNumber.map((day, index) => {
        const futureDate = new Date();
        futureDate.setDate(currentDate.getDate() + index);

        const dayNumber = futureDate.getDate();

        const isSelected = selectedDayIndex === index;
        const style = isSelected ? calendarContainerSelectedStyle : calendarContainerStyle;
        const dayTextStyleToApply = isSelected ? daySelectedTextStyle : dayTextStyle;
        const dateTextStyleToApply = isSelected ? dateSelectedTextStyle : dateTextStyle;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.calendarContainer, style]}
            onPress={() => handleDayPress(index)}
          >
            <Text style={dayTextStyleToApply}>{day}</Text>
            <Text style={dateTextStyleToApply}>{dayNumber}</Text>
          </TouchableOpacity>
        );
      })}
      </View>
      

      <View >
        <View style={styles.row}>
        <MorningICon/>
      <Text style={styles.sectionTitle}>Morning</Text>
      </View>
      <View style={styles.timeContainer}>
        {morningTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <NoonICon/>
        <Text style={styles.sectionTitle}>Afternoon</Text>
      </View>
      
      <View style={styles.timeContainer}>
        {afternoonTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <EveningICon/>
      <Text style={styles.sectionTitle}>Evening</Text>
      </View>
      <View style={styles.timeContainer}>
        {eveningTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    <View style={{flexDirection: "row", justifyContent:"space-between" , backgroundColor:"#F5F7F9", borderRadius: 8, alignItems:"center", paddingHorizontal:10, paddingVertical: 10}}>
        <View style={styles.row}>
        <View style={styles.circle}>
            <HomeIcon/>
        </View>
        <Text style={{color:"#172331", fontFamily:"Raleway-Medium", fontSize:14}}>Visit charges</Text>
        </View>
        <View style={{flexDirection:"row", gap: 5, alignItems:"center"}}>
        <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Fees</Text>
        </View>
    </View>

    <View>
    <ReviewComponent/>
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center" , gap: 10, marginTop:15}}>
        <Text  onPress={() => {
        navigation.navigate("DoctorDetail");
      }} style={{color:"#0D1927", fontFamily:"Raleway-SemiBold", fontSize: 16}}>See all reviews</Text>
        <ArrowOutward />
    </View>
    <View style={{marginTop: 30, width:"100%" }} >
        <TouchableOpacity onPress={() => {
        navigation.navigate("DoctorDetail");
      }}>
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
      
            </View>
            
          </ScrollView>
 )
}

export default DoctorBooking

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor:"#fff",
    padding: 30
   },
   sectionTitle: {
    fontSize: 12,
    color:"#78879A",
    marginBottom: 8,
    fontFamily:"Raleway-SemiBold"
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor:"#4464D9",
    borderWidth: 1,
    marginRight: 10,
  },
  timeButtonSelected: {
    backgroundColor: '#4464D9',
  },
  timeText: {
    fontSize: 12,
    color: "#4464D9",
    fontFamily: "Raleway-SemiBold"
  },
  timeTextSelected: {
    color: 'white',
  },
  row:{
    flexDirection: "row",
    gap: 5,
    alignItems:"center"
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "#4464D9",
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
//    calendarContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'white',
//     borderWidth: 1, borderColor:"#E7E7E7"
//   },
//    calendarContainerStyle:{
//     width: "15.5%", height:67, backgroundColor:"#fff", borderWidth: 1, borderColor:"#E7E7E7", alignItems:"center", justifyContent:"center", borderRadius:30
//    },
//    calendarContainerSelected: {
//     backgroundColor: 'blue',
//   },
//    day: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#000', // Customize the text color
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000', // Customize the text color
//   },
})