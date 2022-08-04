
import React from 'react';
import{ StyleSheet,
		Text,
		View,
		FlatList,
	} from 'react-native';
const DATA = [
{
	id:"1",
	title:"Data Structures"
},
{
	id:"2",
	title:"STL"
},
{
	id:"3",
	title:"C++"
},
{
	id:"4",
	title:"Java"
},
{
	id:"5",
	title:"Python"
},
{
	id:"6",
	title:"CP"
},
{
	id:"7",
	title:"ReactJs"
},
{
	id:"8",
	title:"NodeJs"
},
{
	id:"9",
	title:"MongoDb"
},
{
	id:"10",
	title:"ExpressJs"
},
{
	id:"11",
	title:"PHP"
},
{
	id:"12",
	title:"MySql"
},
];

const Item = ({title}) => {
return(
	<View style={styles.item}>
	<Text>{title}</Text>
	</View>
);
}

export default function App() {
	

const renderItem = ({item})=>(
<Item title={item.title}/>
);
return (
<View style={styles.container}>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	/>
</View>
);
}

const styles = StyleSheet.create({
container: {
	marginTop:30,
	padding:2,
},
item: {
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
},
});

