import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splashscreen from "../pages/Splashscreen";
import Onboardingscreen from "../pages/Onboardingscreen";
import Home from "../pages/Home";
import Notes from "../pages/Notes";

import Colors from "../styles/colors";

const Stack = createStackNavigator();

function Ruotes(){
    return(
        <Stack.Navigator>
            { /* <Stack.Screen name="Splash" component={Splashscreen} option={{headerShown: false}} /> */}
            { /* <Stack.Screen name="Onboarding" component={Onboardingscreen} option={{headerShown: false}} /> */}
            <Stack.Screen name="Home" component={Home} option={{headerShown: false}} />
            <Stack.Screen name="Notes" component={Notes} option={{title: "Add To Do", headerTintColor: 'white' , headerStyle:{backgroundColor : Colors.headers , elevation:0 }}} />
        </Stack.Navigator>
    )
} 
 
export default Ruotes;