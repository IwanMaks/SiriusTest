import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from "./src/screens/Home";
import {Marked} from "./src/screens/Marked";
import {OwnImg} from "./src/screens/OwnImg";
import {CustomHeader} from "./src/navigation/CustomHeader";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {GalleryIcon} from "./src/svg/GalleryIcon";
import {StarColor} from "./src/svg/StarColor";
import {Provider} from "react-redux";
import store from "./src/store";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
  );
};

export default App;
