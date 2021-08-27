import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import TopRestaurants from '../screens/TopRestaurants';
import Search from '../screens/Search';
import Account from '../screens/Account';

const Navigation = () =>{

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name='restaurants'
                    component={Restaurants}
                    options={{title: "Restaurants"}}
                />
                 <Tab.Screen 
                    name='favorites'
                    component={Favorites}
                    options={{title: "Favorites"}}
                />
                 <Tab.Screen 
                    name='toprestaurants'
                    component={TopRestaurants}
                    options={{title: "Top-Restaurants"}}
                />
                 <Tab.Screen 
                    name='search'
                    component={Search}
                    options={{title: "Search"}}
                />
                 <Tab.Screen 
                    name='account'
                    component={Account}
                    options={{title: "Account"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}



export default Navigation;