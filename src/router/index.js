import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import DetailsNews from '../pages/DetailsNews';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="DetailsNews" component={DetailsNews} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;

