import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={{marginVertical: 20}}>
      <Text style={styles.title}>Hello Abdullah</Text>
      <Text style={styles.heading}>Find your specialist</Text>
      </View>
      <View style={{ gap: 20, flexDirection:"row"}}>
        
        <View style={styles.col4}>
        <TouchableOpacity onPress={() => {
        navigation.navigate("Specialist");
      }}>
        <View style={styles.card}>
            <Image style={{resizeMode: "cover", width:"100%"}} source={require("../assets/assets/cat1.png")}/>
        </View>
        <Text style={{marginTop: 10, color: "#172331", fontFamily:"Raileway-Regular", fontSize: 12, fontWeight: 500}}>Physiotherapy </Text>
        </TouchableOpacity>
        </View >
        <View style={styles.col4}>
        <View style={styles.card}>
            <Image style={{resizeMode: "cover", width:"100%"}} source={require("../assets/assets/cat2.png")}/>
        </View>
        <Text style={{marginTop: 10, color: "#172331", fontFamily:"Raileway-Regular", fontSize: 12, fontWeight: 500}}>Dietician</Text>
        </View>
        <View style={styles.col4}>
        <View style={styles.card}>
            <Image style={{resizeMode: "cover", width:"100%"}} source={require("../assets/assets/cat3.png")}/>
        </View>
        <Text style={{marginTop: 10, color: "#172331", fontFamily:"Raileway-Regular", fontSize: 12, fontWeight: 500}}>Mental Wellness</Text>
        
        </View>
        
      </View>

      <View>
      <Text style={styles.heading}>Popular Doctor</Text>
      <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  pagingEnabled={false}>
    <View style={{flexDirection: 'row', gap: 20}}>
        <View >
            <View style={styles.horizontalCard}>
                <Image style={{width: "100%"}} source={require("../assets/assets/cat1.png")}/>
            </View>
            <View>
                <View style={{flexDirection:"row", alignItems:"center", gap:2, marginVertical:5}}>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 700}}>Dr Rahul</Text>
                    <Image source={require("../assets/assets/verified.png")}/>
                </View>
                <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>Physiotherapist</Text>
                <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>8 yrs exp</Text>
                <View style={{flexDirection:"row", alignItems:"center", gap: 10}}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 2, marginVertical: 8}}>
                    <Image source={require("../assets/assets/star.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 600, fontSize: 12}}>4.1</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                    <Image source={require("../assets/assets/location.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>Patparganj</Text>
                    </View>
                    
                </View>
                <View style={{borderColor:"#4464D9", borderWidth:1, backgroundColor:"#fff", borderRadius:74, width: 70, height:30, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#4464D9", alignItems:"center", textAlign:"center", fontFamily:"Raleway-SemiBold", fontWeight:600}}>Book</Text>
        </View>
            </View>
        </View>
        <View >
            <View style={styles.horizontalCard}>
                <Image style={{width: "100%"}} source={require("../assets/assets/cat1.png")}/>
            </View>
            <View>
                <View style={{flexDirection:"row", alignItems:"center", gap:2, marginVertical:5}}>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 700}}>Dr Rahul</Text>
                    <Image source={require("../assets/assets/verified.png")}/>
                </View>
                <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>Physiotherapist</Text>
                <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>8 yrs exp</Text>
                <View style={{flexDirection:"row", alignItems:"center", gap: 10}}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 2, marginVertical: 8}}>
                    <Image source={require("../assets/assets/star.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 600, fontSize: 12}}>4.1</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                    <Image source={require("../assets/assets/location.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>Patparganj</Text>
                    </View>
                </View>
                <View style={{borderColor:"#4464D9", borderWidth:1, backgroundColor:"#fff", borderRadius:74, width: 70, height:30, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#4464D9", alignItems:"center", textAlign:"center", fontFamily:"Raleway-SemiBold", fontWeight:600}}>Book</Text>
        </View>
            </View>
        </View>
        <View >
            <View style={styles.horizontalCard}>
                <Image style={{width: "100%"}} source={require("../assets/assets/cat1.png")}/>
            </View>
            <View>
                <View style={{flexDirection:"row", alignItems:"center", gap:2, marginVertical:5}}>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 700}}>Dr Rahul</Text>
                    <Image source={require("../assets/assets/verified.png")}/>
                </View>
                <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>Physiotherapist</Text>
                <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>8 yrs exp</Text>
                <View style={{flexDirection:"row", alignItems:"center", gap: 10}}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 2, marginVertical: 8}}>
                    <Image source={require("../assets/assets/star.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 600, fontSize: 12}}>4.1</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                    <Image source={require("../assets/assets/location.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raileway-Regular", fontWeight: 500, fontSize: 12}}>Patparganj</Text>
                    </View>
                </View>
                <View style={{borderColor:"#4464D9", borderWidth:1, backgroundColor:"#fff", borderRadius:74, width: 70, height:30, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"#4464D9", alignItems:"center", textAlign:"center", fontFamily:"Raleway-SemiBold", fontWeight:600}}>Book</Text>
        </View>
            </View>
        </View>
        
    </View>
</ScrollView>
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        backgroundColor: "#fff"
    },
    title:{
        fontFamily: "Raileway-medium",
        color: "#172331",
        fontSize: 14
    },
    heading:{
        color: "#172331",
        fontFamily: "Raileway-ExtraBold",
        fontSize: 18,
        marginTop: 10,
        fontWeight: 700
    },
    card:{
         width:"100%",
         height: 120,
         borderRadius: 20,
         overflow: "hidden"
        
    },
    horizontalCard:{
        width: 120,
        height: 80,
        borderRadius: 12,
        marginTop: 10,
        overflow: "hidden",
    },
    col4:{
        width:"30%",
        
    }
    
})