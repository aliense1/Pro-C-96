import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import PostCard from "./PostCard";
import {FlatList} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-web";
import { Platform } from "react-native";

let posts = require("./temp_post.json")

export default class HomeScreen extends React.Component{

renderItem = ({item:post}) => {
  return <PostCard post={post}/>;
};


  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View styel={styles.appTitle}>
          <Text style={styles.appTitleText}>Spectagram</Text>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
           keyExtractor={this.keyExtractor}
           data={posts}
           renderItem={this.renderItem}
           />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor : 'purple',   
  },
   droidSafeArea : {
    marginTop: Platform.OS ==="android" ? StatusBar.currentHeight : 35
  },
  appTitle: {
    flex : 0.07,
    padding : 5,
    flexDirection : "row",
    justifyContent :"center"
  },
 appTitleText:{
  color:"white",
  fontSize:28,
 },
 cardContainer:{
  flex: 0.93
 }
})
