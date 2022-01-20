import React from "react";
import {
  FlatList,
  SafeAreaView,
} from "react-native";
import Item from "./LocationItem";

const LocationList = ({searchPhrase, data, handleSelected}) => {
  // the filter
  const renderItems = (({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item city={item.city} state={item.state} country={item.country} handleSelected={handleSelected}/>;
    }
    // filter of city
    if (item.city.toLowerCase().includes(searchPhrase.toLowerCase().trim().replace(/\s/g, ""))) {
      return <Item city={item.city} state={item.state} country={item.country} handleSelected={handleSelected}/>;
    }
    // filter of state
    if (item.state.toLowerCase().includes(searchPhrase.toLowerCase().trim().replace(/\s/g, ""))) {
        return <Item city={item.city} state={item.state} country={item.country} handleSelected={handleSelected}/>;
    }
    // filter of country
    if (item.country.toLowerCase().includes(searchPhrase.toLowerCase().trim().replace(/\s/g, ""))) {
        return <Item city={item.city} state={item.state} country={item.country} handleSelected={handleSelected} />;
    }     
  });

  return (
    <SafeAreaView>
        <FlatList
            keyExtractor={(item, index) => {
                return index.toString();
            }}
            data={data}
            renderItem={renderItems}
        />
    </SafeAreaView>
  );
};

export default LocationList;