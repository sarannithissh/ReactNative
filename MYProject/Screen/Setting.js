import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  Settings
} from 'react-native'

const Setting = ({navigation}) => {
  return(
<View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Text>Setting</Text>
  <Button 
    title="go to Details"
    onPress={()=>navigation.navigate("Details")}
  />
</View>
  )
};


export default Setting