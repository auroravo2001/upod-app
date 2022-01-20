import React, { useState } from "react";
import {
	StyleSheet,
	Text,
    TextInput,
	SafeAreaView,
	useWindowDimensions,
	View, 
} from "react-native";

import BlueButton from "../../components/utils/createAcc/BlueButton";
import DropDownPicker from "react-native-dropdown-picker";

const VerifyMobileAndEmail = ({ navigation }) => {

    // blue button submit handler
	const onBlueButtonPress = () => navigation.push("VerifyMobileAndEmail");
	const { width } = useWindowDimensions();

	const identities = ["Male", "Female", "Nonbinary", "Prefer not to say"];
	const [genders, setGenders] = useState(
		identities.map((gender)=>({
			label: gender,
			value: (gender = "Prefer not to say") ? "" : gender,
		}))
	);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

	return (
		<SafeAreaView style={ styles.container }>
            <Text style={ styles.heading }>
                Verify your mobile {"&"} email
            </Text>
			<View style={ styles.colContainer }>
                <Text style={ styles.subHeading1 }>
                We also need to verify your phone number and email.
                </Text>
                <Text style={styles.labelText}>
					Country/Region
				</Text>
				<DropDownPicker style={styles.dropdown}
					open={open}
					value={value}
					items={genders}
					placeholder="Select your gender"
					translation={{PLACEHOLDER:"Select your gender",}}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setGenders}
					textStyle={styles.dropdownText}
					dropDownContainerStyle={styles.dropdown}
				/>
                <Text style={styles.labelText}>
					Phone Number
				</Text>
				<TextInput 
					style={ styles.input }
                    placeholder="Enter number here"
                    placeholderTextColor={"#EFEFEF"}
                    keyboardType="numeric"
				/>
                <Text style={styles.labelText}>
					Email
				</Text>
				<TextInput 
					style={ styles.input }
                    placeholder="Enter email here"
                    placeholderTextColor={"#EFEFEF"}
				/>
                <BlueButton 
					textContent={"SEND VERIFICATION CODE"}
					onPress={onBlueButtonPress}
				/>
			</View>
		</SafeAreaView>
	);
};

export default VerifyMobileAndEmail;

const styles = StyleSheet.create({
    container: {
		backgroundColor: "#1E1E1E",
		flex: 1,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	colContainer: {
		width: 275,
	},
	text: {
		color: "#EFEFEF",
		fontSize: 16,
		paddingTop: 35,
	},
	labelText: {
        color: "#EFEFEF",
		fontSize: 16,
		marginTop: 20,
        fontWeight: "700"
    },
	dropdownText: {
		color: "#EFEFEF",
		fontSize: 16,
		textAlign: "center"
	},
    smallText: {
        fontSize: 12,
        color: "#EFEFEF"
    },
    heading: {
        fontSize: 25,
        color: "#EFEFEF",
        fontWeight: "700",
        marginTop: 50,
		marginBottom: 9
    },
	subHeading1: {
        fontSize: 16,
		fontWeight: "500",
        color: "#EFEFEF",
		marginTop: 30,
		textAlign: "center",
    },
    subHeading2: {
        fontSize: 15,
		fontWeight: "500",
        color: "#EFEFEF",
		marginTop: 30,
        marginBottom: 25,
		textAlign: "center",
    },
    socialmediaWrapper: {
        marginTop: 20,
        marginBottom: 40,
    },
    socialmedia: {
        fontSize: 14,
		fontWeight: "bold",
        color: "#EFEFEF",
		textAlign: "center",
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: "#EFEFEF",
        paddingTop: 10,
        paddingBottom: 10,
        width: 215,
    },
    rowContainer: {
        marginTop: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    tinyLogo: {
        width: 40,
        height: 40,
    },
    dropdown: {
		marginTop: 20,
		width: 275,
		backgroundColor: "#363444",
		borderColor: "#363444",
        alignSelf: "center",
		marginBottom: 33,
	},
    input: {
        borderRadius: 10,
        height: 45,
        width: "100%",
        backgroundColor: "#363444",
        color: "#EFEFEF",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
		paddingLeft: 15,
    }
});