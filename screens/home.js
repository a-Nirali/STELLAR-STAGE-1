import React,{Component} from 'react';
import { Text, View, StyleSheet,SafeAreaView ,StatusBar ,Platform ,ImageBackground ,TouchableOpacity,Image} from 'react-native';

export default class HomeScreen extends Component{
render(){
  return(
    <View style={styles.container}>
    <SafeAreaView  style={styles.androidSafeArea}/>
      <ImageBackground source={require("../assets/stars.gif")}style={styles.backgroundImage}>
      <View style={styles.titleBar}>
         
    <Text 
    style={styles.titleText}>STELLAR APP</Text>
    <Image source={require("../assets/main-icon.png")} style={styles.mainimg}></Image>
    </View>

    <TouchableOpacity style={styles.routeCard}
    onPress={()=>this.props.navigation.navigate("SpaceCrafts")}>
     <Text style={styles.routeText}>Space Crafts</Text>
     <Text style={styles.knowMore}>know More</Text>
     <Text style={styles.bgDigit}>1</Text>
     <Image source={require("../assets/space_crafts.png")} style={styles.img}></Image>
    </TouchableOpacity>

    <TouchableOpacity style={styles.routeCard}
    onPress={()=>this.props.navigation.navigate("StarMap")}>
     <Text style={styles.routeText}>Star Map</Text>
     <Text style={styles.knowMore}>know More</Text>
     <Text style={styles.bgDigit}>2</Text>
     <Image source={require("../assets/star_map.png")} style={styles.img}></Image>
    </TouchableOpacity>

    <TouchableOpacity style={styles.routeCard}
    onPress={()=>this.props.navigation.navigate("DailyPic")}>
     <Text style={styles.routeText}>Daily Pictures</Text>
     <Text style={styles.knowMore}>know More</Text>
     <Text style={styles.bgDigit}>3</Text>
     <Image source={require("../assets/daily_pictures.png")} style={styles.img}></Image>
    </TouchableOpacity> 
    </ImageBackground>
    </View>
  )
}
}
const styles=StyleSheet.create({

  titleText:{
    color:"white",
    fontSize:40,
    fontWight:"bold",
  },
  container:{
    flex:1,
  },
  androidSafeArea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0,
  },
  titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignItems:"center",
  },
  backgroundImage:{
    flex:1,
    resizeMode:"cover",
  },
   routeCard:{
      flex:0.25,
      marginLeft:400,
      marginRight:50,
      marginTop:50,
      borderRadius:30,
      backgroundColor:"white",
      width:600,
      justifyContent:'space-evenly',
   },
   routeText:{
    color:"black",
    fontSize:20,
    fontWight:"bold",
    marginTop:75,
    paddingLeft:30,
   },
   knowMore:{
       paddingLeft:30,
       fontSize:15,
       color:"orange",
   },
   bgDigit:{
       position:"Absolute",
       color:"lightgrey",
       fontSize:150,
       right:20,
       bottom:-15,
       zIndex:-1,
   },
  img:{
     position:"absolute",
     height:80,
     width:80,
     resizeMode:"contain",
     right:60,
     top:-40,
   },
   mainimg:{
    height:200,
    width:200,
    resizeMode:"contain",
    marginRight:50,
    marginLeft:50, 
    marginTop:10,  
  }
})