import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AdventureDetail from "./screens/AdventureDetail";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Onboarding from "./screens/Onboarding";
import PreferredLanguage from "./screens/CreateAccount/PreferredLanguage";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import AboutYou from "./screens/CreateAccount/AboutYou";
import Hi from "./screens/CreateAccount/Hi";
import TellUsAboutYourself from "./screens/CreateAccount/TellUsAboutYourself";
import Location from "./screens/Location";
import Album from "./screens/AddProfilePic/Album";
import VerifyPhoto from "./screens/AddProfilePic/VerifyPhoto";
import VerifyMobileAndEmail from "./screens/Verify/VerifyMobileAndEmail";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

function App() {
	const globalOptions = {
		headerShown: false,
	};
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="PreferredLanguage"
				screenOptions={globalOptions}
			>
				<Stack.Screen name="PreferredLanguage" component={PreferredLanguage} />
				<Stack.Screen name="CreateAccount" component={CreateAccount} />
				<Stack.Screen name="AboutYou" component={AboutYou} />
				<Stack.Screen name="Hi" component={Hi} />
				<Stack.Screen name="TellUsAboutYourself" component={TellUsAboutYourself} />
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Location" component={Location} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AdventureDetail" component={AdventureDetail} />
				<Stack.Screen name="Album" component={Album} />
				<Stack.Screen name="VerifyPhoto" component={VerifyPhoto} />
				<Stack.Screen name="VerifyMobileAndEmail" component={VerifyMobileAndEmail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
