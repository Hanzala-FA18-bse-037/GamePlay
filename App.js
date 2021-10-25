import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_Login from "./pages/Page_Login/Page_Login.js";
import Page_Front from "./pages/Page_Front/Page_Front.js";
const Tab = createBottomTabNavigator();
const Page_LoginStackNavigator = createStackNavigator();
const ScreenForPage_Login = () => {
	return (
		<Page_LoginStackNavigator.Navigator>
			<Page_LoginStackNavigator.Screen
				name = "Page_Login"
				component = {Page_Login}
				options = {{
					headerShown: false
				}}
			/>
		</Page_LoginStackNavigator.Navigator>
	)
};
const Page_FrontStackNavigator = createStackNavigator();
const ScreenForPage_Front = () => {
	return (
		<Page_FrontStackNavigator.Navigator>
			<Page_FrontStackNavigator.Screen
				name = "Page_Front"
				component = {Page_Front}
				options = {{
					headerShown: false
				}}
			/>
		</Page_FrontStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_Login"
							component = {ScreenForPage_Login}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Front"
							component = {ScreenForPage_Front}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

