import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
// import { FontAwesome } from "@expo/vector-icons"; 

function LocationItem ({ city, state, country, handleSelected}) {

  const [pressed, setPressed] = useState(false);
  const [bgColor, setBgColor] = useState('#1E1E1E');

  const handleClicked = () => {
    setPressed(!pressed);
    if (pressed) {
        setBgColor('#363444');
    } else {
        setBgColor('#1E1E1E');
    }
    handleSelected(pressed);
  }

  return (
    <View>
        <Pressable onPress ={handleClicked} style={[styles.data, {backgroundColor: bgColor}]}>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.details}>{state}, {country}</Text>
            {/* {pressed ? <FontAwesome name="check" size={24} color="#56C1FF"/> : <Text/>} */}
        </Pressable>
    </View>
  );
}

export default LocationItem;

const styles = StyleSheet.create({
    
    data: {
        paddingTop: 5,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    
    city: {
        color: "white",
        fontSize: 15,
    },

    details: {
        color: "white",
        fontSize: 13,
    }
});
