import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from  './SplashScreen'
import SignUpScreen from  './SignUpScreen';
import SiginScreen from  './SigninScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="SiginScreen" component={SiginScreen} />
    </RootStack.Navigator>

)

export default RootStackScreen;