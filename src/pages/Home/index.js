import React, {useState} from "react";
import {View , FlatList , TouchableOpacity , Text , ActivityIndicator, SafeAreaView} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../../components/Searchbar";
import Style from "./styles";
import Colors from "../../styles/colors";
import Notes from "../../components/Rendernotes";


function Home(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  return(
    <SafeAreaView>
      {/* Heading */}
      <Text>Markit</Text>
      {/* Search */}
      <SearchBar data={data} onChange={setData}/>
      {/* Notes */}
      <FlatList />
      {/* Add To Do */}
      <TouchableOpacity >
        <AntDesign name="pluscircle" size={60} color={Colors.addButtons} />
      </TouchableOpacity>

    </SafeAreaView>
  ) 
}

export default Home