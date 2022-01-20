import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Profile = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("Profile");
	};
	const prevPress = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<Pressable onPress={prevPress} style={[styles.buttonStyles, styles.back]}>
				<Text style={[styles.setColorWhite, styles.back]}> {'<'} Back</Text>
			</Pressable>
			<Text style={[styles.setColorWhite, styles.title, styles.text]}>Add profile picture</Text>
            <Text style={[styles.setColorWhite, styles.text, styles.description]}> Add a profile picture to make it easy for your friend to find you. </Text>
			<Pressable onPress={nextPress} style={[styles.buttonStyles, styles.text]}>
				<Text>To Signup</Text>
			</Pressable>
			<Pressable style={[styles.picBox]}>
				<Text style={[styles.plus, styles.setColorWhite]}> + </Text>
			</Pressable>
			<Pressable style={[styles.buttonStyles, styles.uploadButton]}>
				<Text style={[styles.setColorWhite]}> Upload Photo </Text>
			</Pressable>
			<Pressable style={[styles.buttonStyles, styles.confirmPhoto]}>
				<Text style={[styles.setColorWhite, styles.confirmPhoto]}> CONFIRM PROFILE PHOTO</Text>
			</Pressable>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "black",
	},
	setColorWhite: {
		color: "#efefef",
	},
	buttonStyles: {
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		padding: 10,
	},
	picBox: {
		backgroundColor: "#363444", 
		borderWidth: 1.5,
		borderStyle: "dashed",
		borderColor: "#EFEFEF", 
		borderRadius: 20, 
		width: 148, 
		height: 148,
		marginBottom: "1.75%",
	},
	plus: {
		fontSize: 35, 
		textAlign: 'center',
		fontWeight: "normal",
		marginTop: "33%",
	},
	uploadButton: {
		display: "flex", 
		flexDirection: "row", 
		justifyContent: "space-between", 
		alignItems: "center", 
		paddingLeft: "2%", 
		paddingRight: "2%", 
		paddingBottom: "0.5%",
		paddingTop: "0.5%",
		borderWidth: 1.5,
		borderStyle: "solid",
		borderColor: "#EFEFEF",
		borderRadius: 25,
		marginBottom: "5%",
	},
	confirmPhoto: {
		backgroundColor: "#555464", 
		borderRadius: 25,  
		paddingLeft: 12, 
		paddingRight: 12,
		paddingBottom: 5,
		paddingTop: 5,
		alignItems: "center", 
		justifyContent: "space-between", 
		display: "flex", 
		flexDirection: "row",
	}, 
	back: {
		fontStyle: "normal",
		fontSize: 20,
		textAlign: "left",
		alignSelf: "flex-start",
	},
	title: {
		fontSize: 30,
		marginBottom: "1%",
	}, 
	description: {
		fontSize: 20,
	}
});