import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './screens/firstScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import secondScreen from './screens/secondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (

   
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FirstScreen' >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name='SecondScreen' component={secondScreen} />
        <Stack.Screen name='ThirdScreen' component={ThirdScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
    
  );
}


