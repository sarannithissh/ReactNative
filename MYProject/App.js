import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, } from '@react-navigation/drawer';
import {
  View,
 ActivityIndicator 
} from 'react-native'

import MainTab from './Screen/MainTab';
import Setting from './Screen/Setting';
import Support from './Screen/Support';
import Bookmark from './Screen/Bookmark'
import { DrawerContent } from './Screen/DrawerContent';
import RootStackScreen from './Screen/RootStackScreen';

import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();



const App = () => {
   const [isLoading, setIsLoading] = React.useState(true);
   const [userToken, setUserToken] = React.useState(null); 

  const initialloginState = {

    isLoading: true,
    userName: null,
    userToken: null,

  };
  



  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISITER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }

  }

  // const [loginstate, dispatch] = React.useReducer
  // (loginReducer,  initialloginState);

  const authContext = React.useMemo(() => ({
    signIn: () => {
        setUserToken('fgkj')
       setIsLoading(false)
      // let userToken;
      // userName = null;
      // if(userName == 'user' &&  password == 'pass'){
      //   userToken = 'dfgdfd';
      // }
     // dispatch({type:'Login',id:userName,token:userToken});
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('fgkj')
      setIsLoading(false)
    }

  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
     //dispatch({type:'REGISTER',token:'dfklj'});
    }, 1000);
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MainTab} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Bookmark" component={Bookmark} />
          </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
};




export default App;