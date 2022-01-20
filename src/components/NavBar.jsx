import React from "react";
import { Pressable, Text, View, Image } from "react-native";

import homeIcon from "../../assets/nav-bar/home icon.png";

const NavBar = () => {
	return (
		<View>
			<Pressable>
				<Image source={homeIcon} />
				<Text>Home</Text>
			</Pressable>
		</View>
	);
};

export default NavBar;