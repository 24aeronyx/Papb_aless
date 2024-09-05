import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {Feather} from "@expo/vector-icons"
import Style from "./style"

function renderNote(){
    return(
        <TouchableOpacity>
            style={Style.noteArea}
            onPress={() => navigation.navigate("Notes",{note : item, search: true})}
            <View
                style={{flexDirection: "row" , justifyContent: "space-between"}}
            >
                <Text style={Style.txtNoteTitle} numberOfLines={3} >Title</Text>
                <Feather name="bell" size={15} color="green" />
                <Text style={Style.txtNote} numberOfLines={6}>Description</Text>
            </View>
        </TouchableOpacity>
    )
}

export default renderNote