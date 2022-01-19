import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Profile = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("Signup");
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
		border: "1.5px dashed #EFEFEF", 
		boxSizing: "border-box", 
		borderRadius: "20px", 
		width: "148px", 
		height: "148px",
		marginBottom: "1.75%",
	},
	plus: {
		fontSize: "35px", 
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
		border: "1.5px solid #EFEFEF", 
		boxSizing: "border-box", 
		borderRadius: "25px",
		marginBottom: "5%",
	},
	confirmPhoto: {
		backgroundColor: "#555464", 
		borderRadius: "25px",  
		paddingLeft: "12px", 
		paddingRight: "12px",
		paddingBottom: "5px",
		paddingTop: "5px",
		alignItems: "center", 
		justifyContent: "space-between", 
		display: "flex", 
		flexDirection: "row",
	}, 
	back: {
		fontStyle: "normal",
		fontSize: "20px",
		textAlign: "left",
		alignContent: "left",
		marginRight: "250px",

	},
	title: {
		fontSize: '30px',
		marginBottom: "1%",
	}, 
	description: {
		fontSize: '20px',
	}
});