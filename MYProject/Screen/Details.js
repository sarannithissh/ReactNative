
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native'
const Details = ({navigation}) => {
  return(
<View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Text>Details</Text>
  <Button 
    title="go to Details"
    onPress={()=>navigation.navigate("Details")}
  />
    <Button 
    title="go to home"
    onPress={()=>navigation.navigate("Home")}
  />
</View>
  )
};


export default Details