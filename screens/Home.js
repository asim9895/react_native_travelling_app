import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { homeStyles } from "../styles/home.style";
import avatar from "../assets/avatar.png";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
			}}
		>
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
		</View>
	);
};

export default Home;
