import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_kisspng_league_of_legends_desktop_wallpaper_muay_thai_5b231472326122_1_link} from './assets/imageLinks.js'
const Page_Login  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page0}    >
			<View style = {noneModeStyles._Union}    >
			</View>
			<View style = {noneModeStyles._Image}    >
				<View style = {noneModeStyles._kisspng_league_of_legends_desktop_wallpaper_muay_thai_5b231472326122_1_container}    >
					<View style = {noneModeStyles._kisspng_league_of_legends_desktop_wallpaper_muay_thai_5b231472326122_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_kisspng_league_of_legends_desktop_wallpaper_muay_thai_5b231472326122_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_25}    >
				</View>
			</View>
			<View style = {noneModeStyles._Bot_o}    >
				<View style = {noneModeStyles._Rectangle}    >
				</View>
				<View style = {noneModeStyles._Discord_Logo_White_1}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles.style10}    >
							<View style = {noneModeStyles.style11}   >
								<Svg style={{height: 18, width: 24}} viewBox = "0 0 24 18">
									<Path fill = {"white"}     d = "M20.317 1.46816C18.7873 0.788615 17.147 0.287953 15.4319 0.00120288C15.4007 -0.0043313 15.3695 0.00949892 15.3534 0.03716C15.1424 0.400436 14.9087 0.87436 14.7451 1.24686C12.9004 0.97948 11.0652 0.97948 9.25832 1.24686C9.09465 0.86608 8.85248 0.400436 8.64057 0.03716C8.62449 0.0104218 8.59328 -0.00340839 8.56205 0.00120288C6.84791 0.287036 5.20756 0.787698 3.67693 1.46816C3.66368 1.47369 3.65233 1.48292 3.64479 1.4949C0.533392 5.99536 -0.31895 10.3852 0.0991801 14.7206C0.101072 14.7418 0.11337 14.7621 0.130398 14.775C2.18321 16.2346 4.17171 17.1207 6.12328 17.708C6.15451 17.7172 6.18761 17.7062 6.20748 17.6813C6.66913 17.0709 7.08064 16.4273 7.43348 15.7505C7.4543 15.7109 7.43442 15.6638 7.39186 15.6482C6.73913 15.4084 6.1176 15.1162 5.51973 14.7842C5.47244 14.7575 5.46865 14.692 5.51216 14.6607C5.63797 14.5694 5.76382 14.4744 5.88396 14.3785C5.90569 14.361 5.93598 14.3573 5.96153 14.3684C9.88928 16.1046 14.1415 16.1046 18.023 14.3684C18.0485 14.3564 18.0788 14.3601 18.1015 14.3776C18.2216 14.4735 18.3475 14.5694 18.4742 14.6607C18.5177 14.692 18.5149 14.7575 18.4676 14.7842C17.8697 15.1226 17.2482 15.4084 16.5945 15.6473C16.552 15.6629 16.533 15.7109 16.5538 15.7505C16.9143 16.4264 17.3258 17.0699 17.7789 17.6803C17.7978 17.7062 17.8319 17.7172 17.8631 17.708C19.8241 17.1207 21.8126 16.2346 23.8654 14.775C23.8834 14.7621 23.8948 14.7427 23.8967 14.7215C24.3971 9.70932 23.0585 5.35548 20.3482 1.49582C20.3416 1.48292 20.3303 1.47369 20.317 1.46816ZM8.02002 12.0808C6.8375 12.0808 5.86313 11.0297 5.86313 9.73884C5.86313 8.44798 6.8186 7.39687 8.02002 7.39687C9.23087 7.39687 10.1958 8.4572 10.1769 9.73884C10.1769 11.0297 9.22141 12.0808 8.02002 12.0808ZM15.9947 12.0808C14.8123 12.0808 13.8379 11.0297 13.8379 9.73884C13.8379 8.44798 14.7933 7.39687 15.9947 7.39687C17.2056 7.39687 18.1705 8.4572 18.1516 9.73884C18.1516 11.0297 17.2056 12.0808 15.9947 12.0808Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Login_with_Discord}   >
					Login with Discord
				</Text>
				<View style = {noneModeStyles._Line}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_17}    >
				<Text style = {noneModeStyles._Login}   >
					Login
				</Text>
				<Text style = {noneModeStyles._Create_groups_to_play_your_favorites_games_with_your_friends}   >
					Create groups to play your favorites games{'\n'}with your friends
				</Text>
			</View>
			<View style = {noneModeStyles._Iphone_top}    >
				<View style = {noneModeStyles._BG}    >
					<View style = {noneModeStyles.style19}    >
						<View style = {noneModeStyles.style20}   >
							<Svg style={{height: 30, width: 215}} viewBox = "0 0 215 30">
								<Path fill = {"#DCDCE5"}     d = "M0 0H215C212.931 0.603211 211.484 2.46837 211.414 4.62256L211.384 5.5618C211.384 19.0587 200.442 30 186.946 30H28.0544C14.5576 30 3.61621 19.0587 3.61621 5.5618L3.58579 4.62257C3.51603 2.46838 2.06919 0.603211 0 0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Right_Side}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles.style23}    >
							<View style = {noneModeStyles.style24}   >
								<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
									<Path fill = {"white"}   stroke = {"#DCDCE5"}  d = "M0.5 2.66666C0.5 1.47005 1.47005 0.5 2.66667 0.5H19.3333C20.53 0.5 21.5 1.47005 21.5 2.66667V8.66667C21.5 9.86329 20.53 10.8333 19.3333 10.8333H2.66667C1.47005 10.8333 0.5 9.86328 0.5 8.66667V2.66666Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style25}    >
							<View style = {noneModeStyles.style26}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"white"}     d = "M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style27}    >
							<View style = {noneModeStyles.style28}   >
								<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
									<Path fill = {"white"}     d = "M0 1.33333C0 0.596955 0.596954 0 1.33333 0H16.6667C17.403 0 18 0.596954 18 1.33333V6C18 6.73638 17.403 7.33333 16.6667 7.33333H1.33333C0.596954 7.33333 0 6.73638 0 6V1.33333Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Wifi}    >
					</View>
					<View style = {noneModeStyles._Mobile_Signal}    >
					</View>
				</View>
				<View style = {noneModeStyles._Left_Side}    >
					<View style = {noneModeStyles.style32}    >
						<View style = {noneModeStyles.style33}   >
							<Svg style={{height: 12, width: 29}} viewBox = "0 0 29 12">
								<Path fill = {"white"}     d = "M3.94526 11.3127C6.68751 11.3127 8.31642 9.16824 8.31642 5.53681C8.31642 4.16942 8.0549 3.01872 7.55427 2.12954C6.82948 0.747208 5.58164 0 4.00503 0C1.6588 0 0 1.57661 0 3.78834C0 5.86558 1.49442 7.37494 3.54924 7.37494C4.81202 7.37494 5.83569 6.78465 6.34379 5.76097H6.36621C6.36621 5.76097 6.3961 5.76097 6.40357 5.76097C6.41851 5.76097 6.47082 5.76097 6.47082 5.76097C6.47082 8.22676 5.53681 9.69876 3.9602 9.69876C3.03366 9.69876 2.31634 9.19065 2.06977 8.3762H0.149442C0.470741 10.1471 1.97263 11.3127 3.94526 11.3127ZM4.0125 5.84316C2.77214 5.84316 1.89044 4.96146 1.89044 3.72857C1.89044 2.52556 2.81697 1.6065 4.01998 1.6065C5.22298 1.6065 6.14952 2.54051 6.14952 3.75845C6.14952 4.96146 5.2454 5.84316 4.0125 5.84316Z"/>
								<Path fill = {"white"}     d = "M11.4699 11.2081C12.1798 11.2081 12.6655 10.7 12.6655 10.0275C12.6655 9.34757 12.1798 8.84694 11.4699 8.84694C10.7676 8.84694 10.2744 9.34757 10.2744 10.0275C10.2744 10.7 10.7676 11.2081 11.4699 11.2081ZM11.4699 5.60406C12.1798 5.60406 12.6655 5.10343 12.6655 4.43094C12.6655 3.75098 12.1798 3.25035 11.4699 3.25035C10.7676 3.25035 10.2744 3.75098 10.2744 4.43094C10.2744 5.10343 10.7676 5.60406 11.4699 5.60406Z"/>
								<Path fill = {"white"}     d = "M19.6596 11.0512H21.5052V9.04121H22.9623V7.4123H21.5052V0.268995H18.7854C16.88 3.13827 15.3632 5.53681 14.3918 7.32263V9.04121H19.6596V11.0512ZM16.1776 7.34505C17.433 5.13332 18.5538 3.36243 19.5849 1.83813H19.6895V7.45713H16.1776V7.34505Z"/>
								<Path fill = {"white"}     d = "M27.0722 11.0512H29V0.268995H27.0797L24.2627 2.24162V4.0947L26.9452 2.21173H27.0722V11.0512Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Iphone_down}    >
				<View style = {noneModeStyles._Rectangle_2}    >
				</View>
				<View style = {noneModeStyles._Line_2}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Login

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_Union: {
	width: 387,
	height: 359.044,
	position: "absolute",
	left: -6,
	top: 71.4861,
	},
_Image: {
	width: 375,
	height: 407,
	position: "absolute",
	left: 0,
	top: 72,
	},
_kisspng_league_of_legends_desktop_wallpaper_muay_thai_5b231472326122_1_container: {
	width: 327,
	height: 388,
	position: "absolute",
	left: 24,
	top: 0,
	},
_kisspng_league_of_legends_desktop_wallpaper_muay_thai_5b231472326122_1: {
	width: "100%",
	height: "100%",
	},
_Rectangle_25: {
	width: 375,
	height: 127,
	position: "absolute",
	left: 0.0000305176,
	top: 280,
	},
_Bot_o: {
	width: 274,
	height: 56,
	position: "absolute",
	left: 51,
	top: 692,
	},
_Rectangle: {
	width: 274,
	height: 56,
	backgroundColor: "rgb(229, 28, 68)",
	position: "absolute",
	top: 0,
	borderRadius: 8,
	},
_Discord_Logo_White_1: {
	width: 24,
	height: 18,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 19,
	},
_Group: {
	width: 24,
	height: 17.7112,
	position: "absolute",
	transform: [
		{translateY: 0.134766},
	],
	},
style10: {
	position: "absolute",
	},
style11: {
	},
_Login_with_Discord: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 96,
	top: 16,
	color: "rgb(221, 227, 240)",
	fontSize: 15,
	fontWeight: "500",
	fontFamily: "Inter",
	textAlign: "left",
	},
_Line: {
	width: 0,
	height: 56,
	position: "absolute",
	left: 56,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(153, 31, 54)",
	},
_Group_17: {
	width: 321,
	height: 186,
	position: "absolute",
	left: 27,
	top: 458,
	},
_Login: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 112,
	top: 0,
	color: "rgb(221, 227, 240)",
	fontSize: 40,
	fontWeight: "700",
	fontFamily: "Rajdhani",
	textAlign: "center",
	},
_Create_groups_to_play_your_favorites_games_with_your_friends: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 136,
	color: "rgb(221, 227, 240)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Inter",
	textAlign: "center",
	},
_Iphone_top: {
	width: 375,
	height: 46,
	position: "absolute",
	left: 0,
	top: -1.13687e-13,
	},
_BG: {
	width: 375,
	height: 46,
	position: "absolute",
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 80},
	],
	},
style20: {
	},
_Right_Side: {
	width: 66.6614,
	height: 11.336,
	position: "absolute",
	transform: [
		{translateX: 293.667},
		{translateY: 19.3307},
	],
	},
_Battery: {
	width: 24.3281,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 42.3334},
		{translateY: 0.00268555},
	],
	},
style23: {
	position: "absolute",
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 3.66667},
	],
	},
style26: {
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style28: {
	},
_Wifi: {
	width: 15.2724,
	height: 10.9656,
	position: "absolute",
	transform: [
		{translateX: 22.0271},
	],
	},
_Mobile_Signal: {
	width: 17,
	height: 10.6667,
	position: "absolute",
	transform: [
		{translateY: 0.335938},
	],
	},
_Left_Side: {
	width: 28.4261,
	height: 11.0889,
	position: "absolute",
	transform: [
		{translateX: 33.4535},
		{translateY: 19.1675},
	],
	},
style32: {
	position: "absolute",
	},
style33: {
	},
_Iphone_down: {
	width: 375,
	height: 34,
	position: "absolute",
	left: 0,
	top: 778,
	},
_Rectangle_2: {
	width: 375,
	height: 34,
	backgroundColor: "rgb(220, 220, 229)",
	position: "absolute",
	},
_Line_2: {
	width: 135,
	height: 5,
	backgroundColor: "rgb(102, 102, 102)",
	position: "absolute",
	transform: [
		{translateX: 120},
		{translateY: 21},
	],
	borderRadius: 100,
	},
})

