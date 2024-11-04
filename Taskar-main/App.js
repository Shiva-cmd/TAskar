import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import SearchScreen from './src/screen/SearchScreen';
import Home from 'react-native-vector-icons/Feather';
import User from 'react-native-vector-icons/FontAwesome';
import UserScreen from './src/screen/UserScreen';
import CommunityScreen from './src/screen/CommunityScreen';
import CreateScreen from './src/screen/CreateScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const Icon = ({color, size, name}) => {
  return <Home name={name} color={color} size={size} />;
};
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
          sceneContainerStyle={{
            height: 'auto',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon color={color} size={size} name="home" />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon color={color} size={size} name="search" />
              ),
            }}
          />
          <Tab.Screen
            name="create "
            component={CreateScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon color={color} size={size} name="plus-circle" />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={CommunityScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon color={color} size={size} name="users" />
              ),
            }}
          />
          <Tab.Screen
            name="Me"
            component={UserScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <User color={color} size={size} name="user-circle" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
