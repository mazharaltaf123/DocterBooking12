import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';
import { Image } from 'react-native-svg';
import HomeIcon from '../assets/assets/home.svg'
import CalendarIcon from '../assets/assets/calendar.svg'
import CalendarNotACtiveIcon from '../assets/assets/calenderna.svg'
import NotificationIcon from '../assets/assets/notification.svg'
import UserImg from '../assets/assets/userimg.svg'
import NotActiveHome from '../assets/assets/homna.svg'
import HomeNavigation from './Navigation/Client/HomeScreen';
import { useNavigation, useRoute } from '@react-navigation/native';
import MyProfile from '../screens/MyProfile';
import Schedule from '../screens/Appointment/Appointment';
import Notification from '../screens/Notification/Notification';

const Tab = createBottomTabNavigator();

const Tab1Screen = () => (
    <View >
      <Text>Tab 1</Text>
    </View>
  );
  
  const Tab2Screen = () => (
    <View >
      <Text>Tab 2</Text>
    </View>
  );
  
  const Tab3Screen = () => (
    <View >
      <Text>Tab 3</Text>
    </View>
  );

const  CustomTabNavigator = ()=> {

  const navigation = useNavigation();
  return (
    <Tab.Navigator
       screenOptions={{
        headerShown: false,
        tabBar: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 0,
            backgroundColor: "#fff",
            height: 60,
            borderTopWidth: 2, borderTopColor: '#EBF0FF',
          },
          
        ],
        tabBarIndicator: [{ borderTopWidth: 2, borderTopColor: 'transparent' }],
      }}>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#4464D9' : '#66708F', fontFamily:"Railway-SemiBold", fontSize: 12,
            marginBottom: 10 }}>Home</Text>
          ),
        tabBarIcon:({focused})=>(
            <View>
                {focused ? <HomeIcon width={24}/> : <NotActiveHome/>  }
            </View>
        ),
      }} ></Tab.Screen>
      <Tab.Screen name="Appointment" component={Schedule} options={{
        tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#4464D9' : '#66708F', fontFamily:"Railway-SemiBold", fontSize: 12,
            marginBottom: 10 }}>Appointments</Text>
          ),
        tabBarIcon:({focused})=>(
            <View>
                {!focused ? <CalendarIcon width={24}/> : <CalendarNotACtiveIcon/> }
            </View>
        )
      }}/>
    <Tab.Screen name="Notification" component={Notification} options={{
        tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#4464D9' : '#66708F', fontFamily:"Railway-SemiBold", fontSize: 12,
            marginBottom: 10 }}>NotificationIcon</Text>
          ),
        tabBarIcon:({focused})=>(
            <View>
                <NotificationIcon width={24}/>
            </View>
        )
      }} />
    <Tab.Screen name="Profile" component={MyProfile} options={{
        tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#4464D9' : '#66708F', fontFamily:"Railway-SemiBold", fontSize: 12,
            marginBottom: 10 }}>More</Text>
          ),
        tabBarIcon:({focused})=>(
            <View>
                <UserImg width={24}/>
            </View>
        )
      }}
      
      
      />
    </Tab.Navigator>
  );
}


export default CustomTabNavigator

const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#ffe45d",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });