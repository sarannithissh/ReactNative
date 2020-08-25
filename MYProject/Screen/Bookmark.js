import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {
  View,
  Text,
  Button
} from 'react-native'

const Bookmark = ({navigation}) => {
  return(
<View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Text>Home</Text>
  <Button 
    title="go to Details"
    onPress={()=>navigation.navigate("Details")}
  />
</View>
  )
};


export default Bookmark