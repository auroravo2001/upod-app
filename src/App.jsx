import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AdventureDetail from "./screens/AdventureDetail";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Onboarding from "./screens/Onboarding";
<<<<<<< HEAD
=======
import PreferredLanguage from "./screens/CreateAccount/PreferredLanguage";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import AboutYou from "./screens/CreateAccount/AboutYou";
import Hi from "./screens/CreateAccount/Hi";
>>>>>>> 93e0273 (add create-account and about you screens)

const Stack = createNativeStackNavigator();

function App() {
	const globalOptions = {
		headerShown: false,
	};
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Onboarding"
				screenOptions={globalOptions}
			>
<<<<<<< HEAD
=======
				<Stack.Screen name="PreferredLanguage" component={PreferredLanguage} />
				<Stack.Screen name="CreateAccount" component={CreateAccount} />
				<Stack.Screen name="AboutYou" component={AboutYou} />
				{/* <Stack.Screen name="Hi" component={Hi} /> */}
>>>>>>> 93e0273 (add create-account and about you screens)
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AdventureDetail" component={AdventureDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
