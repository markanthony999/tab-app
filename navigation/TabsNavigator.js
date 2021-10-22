import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Page_1 from '../screens/Page_1';
import Page_2 from '../screens/Page_2';
import Page_3 from '../screens/Page_3';

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
	return (
		<Tabs.Navigator>
			<Tabs.Screen name="Home" component={Home} />
			<Tabs.Screen name="Page 1" component={Page_1} />
			<Tabs.Screen name="Page 2" component={Page_2} />
			<Tabs.Screen name="Page 3" component={Page_3} />
		</Tabs.Navigator>
	);
};
export default TabsNavigator;
