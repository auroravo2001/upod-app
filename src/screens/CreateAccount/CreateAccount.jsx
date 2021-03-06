import React from "react";
import {
	StyleSheet,
	Text,
	View,
    TextInput,
} from "react-native";

import CreateAccount from "../../components/utils/createAcc/CreateAccount";
import BlueButton from "../../components/utils/createAcc/BlueButton";

const CreateAccountScreen = ({ navigation }) => {

	// blue button submit handler
	const onBlueButtonPress = () => navigation.push("AboutYou");

	return (
		<CreateAccount>	
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>
                    Email
                </Text>
                <TextInput
                    style={ styles.input }
                />
                <Text style={styles.labelText}>
                Password
                </Text>
                <TextInput 
                    style={ styles.input}
                    secureTextEntry
                />
            </View>
  			<Text style={ styles.smallText }>
                Password must be at least 8 characters in length.
            </Text>
            <BlueButton 
				textContent={"CREATE ACCOUNT"}
				onPress={onBlueButtonPress}
			/>
            <Text style={ styles.text }>
                Already have an account? 
				<Text style={styles.boldLink}> SIGN IN </Text>
            </Text>

		</CreateAccount>
	);
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
    inputContainer: {
        width: 275,
    },
    labelText: {
        color: "#EFEFEF",
		fontSize: 16,
		marginTop: 20,
        fontWeight: "700"
    },
	text: {
		color: "#EFEFEF",
		fontSize: 16,
		marginTop: 20
	},
	boldLink: {
		color: "#EFEFEF",
		fontSize: 16,
		fontWeight: "500"
	},
    smallText: {
        fontSize: 12,
        color: "#EFEFEF",
        marginBottom: 40
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
        paddingLeft: 15
    },
});