import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	useFonts,
	Nunito_400Regular,
	Nunito_600SemiBold,
	Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

const App = () => {
	// added fonts for use in the application

	let [fontLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_600SemiBold,
		Nunito_800ExtraBold,
	});

	if (!fontLoaded) return null;

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
