
import {
  SafeAreaView,
  StatusBar,
  Text,
  Platform, NativeModules
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import Intro from './src/screens/Intro';
import MobileAuthentication from './src/screens/MobileAuthentication';
import OTPScreen from './src/screens/OTPVerify';
import AccountScreen from './src/screens/CreateAccount';
import HomePage from './src/screens/HomePage';
import CustomTabNavigator from './src/components/NavigationTab';
import Specialist from './src/screens/SpecialistList';
import DoctorBooking from './src/screens/DoctorBooking';
import DoctorDetail from './src/screens/DoctorDetail';
import AmountPay from './src/screens/AmountPay';
import BookingDone from './src/screens/BookingDone';
import MyProfile from './src/screens/MyProfile';
import Schedule from './src/screens/Appointment/Appointment';
import ReviewScreen from './src/screens/Appointment/Review/ReviewScreen';


function App(){
  const Stack = createStackNavigator();
  const { StatusBarManager } = NativeModules;
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Home">
    <Stack.Screen  name="Home" component={Home} />
    <Stack.Screen  name="SplashScreen" component={SplashScreen} />
    <Stack.Screen  name="Intro" component={Intro} />
    <Stack.Screen  name="Authentication" component={MobileAuthentication} />
      <Stack.Screen  name="OTPVerify" component={OTPScreen} />
      <Stack.Screen  name="CreateAccount" component={AccountScreen} />
      <Stack.Screen  name="HomePage" component={CustomTabNavigator} />
      <Stack.Screen  name="BookingDone" component={BookingDone} />
      <Stack.Screen  name="Profile" component={MyProfile} />
      <Stack.Screen  name="Schedule" component={Schedule} />
      <Stack.Screen  name="Review" component={ReviewScreen} />
      <Stack.Screen  name="Specialist" component={DoctorBooking} />
      <Stack.Screen  name="DoctorDetail" component={DoctorDetail} />
      <Stack.Screen  name="AmountPayment" component={AmountPay} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}


export default App;
