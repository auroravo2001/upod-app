import React, { useEffect, useState } from "react";
import { 
    StyleSheet, 
    Text, 
    TextInput,
    SafeAreaView, 
    View, 
    Pressable, 
    StatusBar, 
    Platform 
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import LocationList from "../../components/utils/location/LocationList";

const Location = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("Home");
	};
	const prevPress = () => {
		navigation.goBack();
	};

    const [text, onChangeText] = useState("");
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [locationSelected, setLocationSelected] = useState(false);
    const [confirmBtnBg, setConfirmBtnBg] = useState('#555464');

    const handleSelected = (selected) => { 
        setLocationSelected(selected);
        if (locationSelected) {
            setConfirmBtnBg('#56C1FF');
        } else {
            setConfirmBtnBg('#555464');
        }
    }

    useEffect(() => {
        const getData = async () => {
          const data = require('../../components/utils/location/locationDB.json');
          setData(data.locations.slice(0,5));
          setIsPending(false);
        };
        getData();
    }, []);
    
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Pressable onPress={prevPress} style={styles.button}>
                    <AntDesign name="left" size={15} color="white">
                        <Text>Back</Text>
                    </AntDesign>
                </Pressable>
                <View style={styles.prompt}>
                    <Text style={[styles.promptText, styles.textHeader, {fontSize: 23}]}> Where are you located? </Text>
                    <Text style={styles.promptText}> Enter your location to find event and experiences near you. </Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="location-sharp" size={24} color="#fff" style={styles.iconStyle}/>
                        <TextInput style={{flex: 1, color: "white"}}
                            onChangeText={onChangeText}
                            value={text}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <Text style={styles.promptText}> Use My Current Location </Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={[styles.listText, styles.textHeader, {padding: 15, fontSize: 20}]}> Popular Locations </Text>
                {isPending ? <Text>Loading...</Text> :  <LocationList searchPhrase={text} data={data} handleSelected={handleSelected}/>}
                <Pressable onPress={nextPress} style={[styles.button, styles.confirmButton, {backgroundColor: confirmBtnBg}]}>
                    <Text style={{color:"white", textTransform: "uppercase"}}>Confirm Location</Text>
                </Pressable>
            </View>
		</SafeAreaView>
	);
};

export default Location;

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: "#1E1E1E",
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},

    topContainer: {
        backgroundColor: "#100E1C",
        flex: 0.7, 
    },

    bottomContainer: {
        flex: 1,
    },

    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#363444",
        borderWidth: 1,
        height: 45,
        borderRadius: 10,
        borderColor: "transparent",
        margin: 12,
    },

    prompt: {
        alignItems: "center",
		justifyContent: "center",
    },

    textHeader: {
        fontWeight: "bold", 
    },

    promptText: {
        color: "white",
        padding: 13,
        fontSize: 15,
    },

    listText: { 
        color: "white",
    },

    iconStyle: {
        padding: 10,
        alignItems: "center",    
    },

	button: {
		padding: 15,
        paddingBottom: 15,
	},

    confirmButton: {
        borderRadius: 50,
        width: "50%",
        borderWidth: 1,
        alignItems: "center",
        borderColor: "transparent",
        alignSelf: "center",
    },
});