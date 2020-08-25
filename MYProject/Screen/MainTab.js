import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
} from 'react-native'

import Home from "./Home";
import Details from "./Details";
import Export from "./Export";
import Profile from "./Profile";
import EditProfileScreen from './EditProfile';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const MainTab = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
     
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
            tabBarColor:'#009387',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Export"
        component={Export}
        options={{
          tabBarLabel: 'Export',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={Home} options={{
        title: 'OverView',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => { navigation.openDrawer() }}
          >
          </Icon.Button>
        )
      }} />
  
  
    </HomeStack.Navigator>
  );
  
  const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <DetailsStack.Screen name="Detail" component={Details} 
        options={{  headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => { navigation.openDrawer() }}
          >
          </Icon.Button>
        )}}
      />
  
    </DetailsStack.Navigator>
  );
  
  
  const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#ffffff",
        elevation:0
      },
     
    }}>
      <ProfileStack.Screen name="Profile" component={Profile} 
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={20}
                backgroundColor="#ffffff"
                color="#000000"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={20}
                backgroundColor="#ffffff"
                color="#000000"
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
          
      
      />


          <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>

  );
  export default MainTab;