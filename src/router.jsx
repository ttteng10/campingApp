import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './components/CustomBottomTab';

import Splash from './pages/Splash';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAccount from './pages/NewAccount';
import FindPassword from './pages/FindPassword';
import CampingDetail from './pages/CampingDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Community from './pages/Community';
import CommunityDetail from './pages/CommunityDetail';
import Profile from './pages/Profile';
import Premium from './pages/Premium';
import Setting from './pages/Setting';
import AppInform from './pages/Appinform';
import AlarmPage from './pages/AlarmPage';
import ProfilePatch from './pages/ProfilePatch';
import CommunityAdd from './pages/CommunityAdd';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => <CustomBottomTab {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Articles" component={Articles} />
      <Tab.Screen name="Add" component={CommunityAdd} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NewAccount" component={NewAccount} />
      <Stack.Screen name="FindPassword" component={FindPassword} />
      <Stack.Screen name="CampingDetail" component={CampingDetail} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Premium" component={Premium} />
      <Stack.Screen name="Appinform" component={AppInform} />
      <Stack.Screen name="AlarmPage" component={AlarmPage} />
      <Stack.Screen name="ProfilePatch" component={ProfilePatch} />
    </Stack.Navigator>
  );
};

export default Router;
