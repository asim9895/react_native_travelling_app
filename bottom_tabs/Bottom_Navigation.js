import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Location from "../screens/Location";
import Favourites from "../screens/Favourites";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Bottom_Navigation = () => {
	return (
		<Tab.Navigator
			screenOptions={({ navigation }) => ({
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					backgroundColor: "white",
					height: 60,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarHideOnKeyboard: true,
			})}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={(navigation) => ({
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View
								style={{
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 17,
										color: "black",
										fontFamily: "Nunito_800ExtraBold",
										marginBottom: -12,
									}}
								>
									Home
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: "red",
										fontFamily: "Nunito_800ExtraBold",
									}}
								>
									.
								</Text>
							</View>
						) : (
							<View>
								<AntDesign
									name="home"
									size={24}
									style={{ color: focused ? "black" : "grey" }}
								/>
							</View>
						),
				})}
			/>
			<Tab.Screen
				name="Location"
				component={Location}
				options={(navigation) => ({
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View
								style={{
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 17,
										color: "black",
										fontFamily: "Nunito_800ExtraBold",
										marginBottom: -12,
									}}
								>
									Location
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: "red",
										fontFamily: "Nunito_800ExtraBold",
									}}
								>
									.
								</Text>
							</View>
						) : (
							<View>
								<Ionicons
									name="compass-outline"
									size={24}
									style={{ color: focused ? "black" : "grey" }}
								/>
							</View>
						),
				})}
			/>
			<Tab.Screen
				name="Favourites"
				component={Favourites}
				options={(navigation) => ({
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View
								style={{
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 17,
										color: "black",
										fontFamily: "Nunito_800ExtraBold",
										marginBottom: -12,
									}}
								>
									Favourites
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: "red",
										fontFamily: "Nunito_800ExtraBold",
									}}
								>
									.
								</Text>
							</View>
						) : (
							<View>
								<AntDesign
									name="hearto"
									size={21}
									style={{ color: focused ? "black" : "grey" }}
								/>
							</View>
						),
				})}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={(navigation) => ({
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View
								style={{
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 17,
										color: "black",
										fontFamily: "Nunito_800ExtraBold",
										marginBottom: -12,
									}}
								>
									Profile
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: "red",
										fontFamily: "Nunito_800ExtraBold",
									}}
								>
									.
								</Text>
							</View>
						) : (
							<View>
								<AntDesign
									name="user"
									size={21}
									style={{ color: focused ? "black" : "grey" }}
								/>
							</View>
						),
				})}
			/>
		</Tab.Navigator>
	);
};

export default Bottom_Navigation;
