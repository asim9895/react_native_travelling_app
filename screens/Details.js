import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { detailStyles } from "../styles/details.style";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { people } from "../data/people";
import MapView from "react-native-maps";

let window_height = Dimensions.get("window").height;

const Details = ({ route, navigation }) => {
	const { item } = route.params;
	console.log(window_height);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
			}}
		>
			{/* Absolute fixed icons and buttons starts */}
			<View style={detailStyles.backIcon}>
				<MaterialIcons
					name="arrow-back-ios"
					size={22}
					color={"black"}
					style={{ marginLeft: 5 }}
				/>
			</View>

			<View style={detailStyles.favouriteIcon}>
				<AntDesign name="hearto" size={18} color="black" />
			</View>

			<View style={detailStyles.bookNowButton}>
				<Text style={detailStyles.bookNowButtonText}>Book Now</Text>
			</View>
			{/* Absolute fixed icons and button ends */}

			<ScrollView showsVerticalScrollIndicator={false} m style={{ flex: 1 }}>
				<Image
					source={item.image}
					style={{ width: "100%", height: window_height / 1.8 }}
				/>

				<View style={detailStyles.body}>
					<View style={[detailStyles.row, { justifyContent: "space-between" }]}>
						<View style={[detailStyles.column, { alignItems: "flex-start" }]}>
							<Text
								style={{
									fontFamily: "Nunito_600SemiBold",
									fontSize: 22,
									marginBottom: 5,
								}}
							>
								Grand Canyon
							</Text>

							<View style={detailStyles.row}>
								<Ionicons
									name="location-outline"
									size={20}
									color="orange"
									style={{ marginRight: 7 }}
								/>
								<Text
									style={{
										fontFamily: "Nunito_600SemiBold",
										fontSize: 17,
										color: "grey",
									}}
								>
									Arizona
								</Text>
							</View>
						</View>
						<View style={[detailStyles.column, { alignItems: "flex-end" }]}>
							<Text
								style={{
									fontFamily: "Nunito_600SemiBold",
									fontSize: 22,
									marginBottom: 5,
								}}
							>
								<Text style={{ fontSize: 20, color: "orange" }}>$ </Text>9.90
							</Text>

							<Text
								style={{
									fontFamily: "Nunito_600SemiBold",
									fontSize: 16,
									color: "grey",
								}}
							>
								/per person
							</Text>
						</View>
					</View>

					<View style={{ marginTop: 15, marginBottom: 15 }}>
						<Text
							style={{
								fontSize: 16,
								lineHeight: 20,
								fontFamily: "Nunito_600SemiBold",
								color: "grey",
								textAlign: "justify",
								opacity: 0.8,
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Text>
					</View>

					{/* categories starts */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<View>
								<FlatList
									data={people}
									horizontal
									showsHorizontalScrollIndicator={false}
									nestedScrollEnabled={true}
									keyExtractor={(item) => item.id}
									renderItem={({ item, index }) => (
										<View>
											<Image
												source={item.image}
												style={{
													width: 27,
													height: 27,
													borderRadius: 15,
													marginLeft: index === 0 ? 0 : -7,
													borderWidth: 1,
													borderColor: "white",
												}}
											/>
										</View>
									)}
								/>
							</View>
							<View
								style={{
									backgroundColor: "grey",
									paddingHorizontal: 7,
									paddingVertical: 5,
									borderRadius: 20,
									marginLeft: -10,
								}}
							>
								<Text style={{ fontSize: 12, color: "white" }}>3+ members</Text>
							</View>
						</View>

						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<AntDesign
								name="star"
								size={22}
								color="orange"
								style={{ marginRight: 7 }}
							/>
							<Text>4.3</Text>
						</View>
					</View>

					<View
						style={{
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
							height: 200,
							backgroundColor: "red",
							marginTop: 20,
							borderRadius: 30,
							overflow: "hidden",
						}}
					>
						<MapView
							initialRegion={{
								latitude: 37.78825,
								longitude: -122.4324,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
							style={{
								...StyleSheet.absoluteFillObject,
								height: 200,
								borderRadius: 50,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Details;
