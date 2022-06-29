import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import { ThemeProvider } from './context-store/context';

// Initialize the store

const Tab = createBottomTabNavigator();

// Root Component

export default function App() {
  // Returns input and list for todo's
  // Using FlatList for optimised loading of items instead of using ScrollView

  return (
    <ThemeProvider>
      <>
        <StatusBar style='auto' />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Todo List') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Theme') {
                  iconName = focused ? 'ios-list' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#311b6b',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name='Todo List'
              component={HomeScreen}
              // options={{ tabBarBadge: todoList.length }}
            />
            <Tab.Screen name='Theme' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    </ThemeProvider>
  );
}
