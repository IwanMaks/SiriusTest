import React from "react";
import {GalleryIcon} from "../svg/GalleryIcon";
import {StarColor} from "../svg/StarColor";
import {Home} from "../screens/Home";
import {CustomHeader} from "./CustomHeader";
import {Marked} from "../screens/Marked";
import {OwnImg} from "../screens/OwnImg";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../screens/RootStackPrams";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    if (route.name === 'Home') {
                        return <GalleryIcon color={color} />
                    } else if (route.name === 'Marked') {
                        return <StarColor color={color} />
                    } else return null
                },
                tabBarStyle: {
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    marginTop: -10
                },
                tabBarActiveTintColor: '#A10D99',
                tabBarInactiveTintColor: '#949494',
                tabBarLabelStyle: {
                    fontWeight: '600',
                    fontSize: 12,
                    lineHeight: 16
                }
            })}>
                <Tab.Screen name='Home' component={Home} options={{
                    title: 'Все Изображения',
                    tabBarLabel: 'Галерея',
                    header: props => <CustomHeader title={props.options.title}/>,
                }} />
                <Tab.Screen name='Marked' component={Marked} options={{
                    title: 'Избранное',
                    header: props => <CustomHeader title={props.options.title} />
                }} />
                <Tab.Screen name='Own' component={OwnImg} options={{
                    tabBarItemStyle: {display: 'none'},
                    tabBarStyle: {display: 'none'},
                    header: props => <CustomHeader title={props.options.title} />
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
