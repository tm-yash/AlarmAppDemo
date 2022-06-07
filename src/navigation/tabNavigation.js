import React from 'react';
import {Image,View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StopWatch from '../screens/StopWatch';
import Time from '../screens/Timer';
import AlarmClock from '../screens/AlarmClock';
import {Images} from '../assets/images/Images';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#212A35',
          height: 80,
          paddingVertical: 15,
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          borderTopWidth: 0,
          position: "absolute",
          right: 0,
          left: 0,
        },
      }}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={{marginTop:14}}>
              <Image
                source={focused ? Images.clock : Images.clockGray}
                resizeMode={'contain'}
                style={{width: 30, height: 30}}
              />
              </View>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={{marginTop:14}}>
              <Image
                source={focused ? Images.watch : Images.watchGray}
                resizeMode={'contain'}
                style={{width: 30, height: 30}}
              />
            </View>
          ),
        }}
        name="Alarm"
        component={AlarmClock}
      />
     
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={{marginTop:14}}>
              <Image
                source={focused ? Images.stopWatch : Images.stopWatchGray}
                resizeMode={'contain'}
                style={{width: 30, height: 30}}
              />
            </View>
          ),
        }}
        name="Stop"
        component={StopWatch}
      />
       <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={{marginTop:14}}>
              <Image
                source={focused ? Images.time : Images.timeGray}
                resizeMode={'contain'}
                style={{width: 30, height: 30}}
              />
            </View>
          ),
        }}
        name="Time"
        component={Time}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
