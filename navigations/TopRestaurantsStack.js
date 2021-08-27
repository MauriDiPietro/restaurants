import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRestaurants from '../screens/TopRestaurants';

const Stack = createStackNavigator();

const TopRestaurantsStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= 'toprestaurants'
                component={TopRestaurants}
                options={{title: "Top-Restaurants"}}
            />
        </Stack.Navigator>

    )
}

export default TopRestaurantsStack;