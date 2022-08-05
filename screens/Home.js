import {
	View,
	Text,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { homeStyles } from "../styles/home.style";
import avatar from "../assets/avatar.png";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { categories } from "../data/categories";
import { locations } from "../data/locations";

const Home = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
				marginBottom: 60,
			}}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Header starts */}
				<View style={homeStyles.header}>
					<Text style={homeStyles.headerText}>
						Where do you want to discover?
					</Text>

					<Image source={avatar} style={homeStyles.headerImage} />
				</View>
				{/* Header ends */}

				{/* search input starts */}
				<View style={homeStyles.searchContainer}>
					<View style={homeStyles.searchInputContainer}>
						<AntDesign name="search1" color={"black"} size={20} />
						<TextInput
							placeholder="Enter Search"
							placeholderTextColor={"black"}
							style={homeStyles.searchInput}
						/>
					</View>
					<View style={homeStyles.filters}>
						<AntDesign
							name="filter"
							color={"black"}
							size={20}
							style={{ marginRight: 7 }}
						/>
					</View>
				</View>
				{/* search input ends */}

				{/* categories starts */}
				<View style={{ marginTop: 20 }}>
					<Text style={homeStyles.categoriesHeader}>Categories</Text>

					<FlatList
						data={categories}
						horizontal
						showsHorizontalScrollIndicator={false}
						nestedScrollEnabled={true}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<View style={homeStyles.categoriesContainer}>
								<Image source={item.image} style={homeStyles.categoriesImage} />
								<Text style={homeStyles.categoriesText}>{item.name}</Text>
							</View>
						)}
					/>
				</View>
				{/* categories ends */}

				{/* locations starts */}
				<View style={{ marginTop: 20 }}>
					<FlatList
						data={locations}
						horizontal
						nestedScrollEnabled={true}
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={homeStyles.locationContainer}
								onPress={() => navigation.navigate("Details", { item })}
								activeOpacity={0.8}
							>
								<Image source={item.image} style={homeStyles.locationImage} />

								<View style={homeStyles.locationStars}>
									<AntDesign
										name="star"
										size={22}
										color="orange"
										style={{ marginRight: 7 }}
									/>
									<Text style={{ fontFamily: "Nunito_700Bold" }}>
										{item.stars}
									</Text>
								</View>
								<View style={homeStyles.locationFavourite}>
									<AntDesign name="hearto" size={18} color="black" />
								</View>

								<View style={homeStyles.locationAddress}>
									<Ionicons
										name="location-outline"
										size={22}
										color="orange"
										style={{ marginRight: 7 }}
									/>
									<Text
										style={{ fontFamily: "Nunito_700Bold", width: "90%" }}
										numberOfLines={1}
									>
										{item.location}
									</Text>
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>
				{/* locations ends */}
			</ScrollView>
		</View>
	);
};

export default Home;
