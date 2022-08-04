import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	useFonts,
	Nunito_400Regular,
	Nunito_600SemiBold,
	Nunito_800ExtraBold,
	Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Location from "./screens/Location";
import Favourites from "./screens/Favourites";
import Profile from "./screens/Profile";
import Main from "./screens/Main";

const Stack = createStackNavigator();

const App = () => {
	// added fonts for use in the application

	let [fontLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
	});

	if (!fontLoaded) return null;

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				}}
			>
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={Details} />
				<Stack.Screen name="Location" component={Location} />
				<Stack.Screen name="Favourites" component={Favourites} />
				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
