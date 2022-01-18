import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Album = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("Home");
	};
	const prevPress = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Album</Text>
		</View>
	);
};

export default Album;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#1E1E1E",
	},
	text: {
		textAlign: "center",
		color: "#EFEFEF",
		fontSize: 25,
		fontWeight: "700"
	},
});
