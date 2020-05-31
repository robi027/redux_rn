import React from "react"
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Detail from "../screens/detail";
import Animate from "../screens/animate";

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        <Stack.Screen name="Animate" component={Animate} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
