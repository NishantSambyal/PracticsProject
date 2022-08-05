// App.js
import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

const DATA = [ 
  {
  IMG_URI : "https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg",
    Rollno : "10",
	  name: "ABC"
  },
  {
  IMG_URI :'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  Rollno: "20",
  name: "XYZ"
  }
]
class List extends Component {
    render () {
     return (
    <View style={styles.mainContainer}>
      <View style={styles.viewContainer}>
      <Image style={styles.image} source={{ uri:IMG_URI }} />
      <FlatList
      data={DATA}
      renderItem={}
      keyExtractor={}
      />

      
</View>
    
    </View>
  );
  
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  viewContainer:{
  flexDirection:"row",
  alignItems:"center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    marginLeft: 10,
    marginTop:10,
  },
  // name:{
  //   marginBottom: 10,
  //   width: '70%',

  // },
});

export default List;