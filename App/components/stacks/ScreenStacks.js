import React, { Component } from 'react';

// Components from react-navigation
import { 
	createStackNavigator,
	SafeAreaView
} from 'react-navigation';

// Vector icon imports
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Pages/Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import LogoHeader from './LogoHeader';
import NavigationDrawerStructure from './NavigationDrawerStructure';

// header bar
export const header = ({navigation}) => ({
	headerTitle: <LogoHeader/>,
	headerStyle: {
		backgroundColor: '#d31623',
		height: 60,
		marginTop: 5,
	},
	headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
});

// Stack Screen for Home
export const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);

// Stack Screen for Details
export const DetailsStack = createStackNavigator(
	{
		Details: DetailScreen,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center'
	}
);