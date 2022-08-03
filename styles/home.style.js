import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 15,
		marginTop: 40,
	},
	headerText: {
		fontSize: 22,
		color: "black",
		fontFamily: "Nunito_600SemiBold",
		width: "60%",
	},
	headerImage: {
		height: 30,
		width: 30,
		borderRadius: 15,
	},
	searchContainer: {
		marginTop: 15,
		marginHorizontal: 15,
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		borderRadius: 25,
		opacity: 0.4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	searchInputContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	searchInput: {
		marginLeft: 10,
		fontFamily: "Nunito_600SemiBold",
		width: "75%",
		color: "black",
	},
});
