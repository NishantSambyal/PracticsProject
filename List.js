// App.js
import React, {Component} from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';

const DATA = [
  {
    IMG_URI:
      'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg',
    Rollno: '10',
    name: 'ABC',
  },
  {
    IMG_URI:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    Rollno: '20',
    name: 'XYZ',
  },
  {
    IMG_URI:
      'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg',
    Rollno: '10',
    name: 'ABC',
  },
  {
    IMG_URI:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    Rollno: '20',
    name: 'XYZ',
  },
];
class List extends Component {
  rowItem = ({item}) => {
    return (
      <View style={styles.viewContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.IMG_URI,
          }}
        />
        <Text>{item.name}</Text>
        <Text>{item.Rollno}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.viewContainer}>
          <FlatList
            data={DATA}
            renderItem={this.rowItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    marginLeft: 10,
    marginTop: 10,
  },
  // name:{
  //   marginBottom: 10,
  //   width: '70%',

  // },
});

export default List;
