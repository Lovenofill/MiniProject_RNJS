import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './components/Home';
import Product from './components/Products';
import Cart from './components/Cart';
import Account from './components/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tab>
      <Tab.Screen name="Home" component={() => <Home />} options={{
        headerShown: "",
        tabBarLabel: 'หน้าหลัก',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Product" component={() => <Product />} options={{
        headerShown: "",
        tabBarLabel: 'สินค้า',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="shopping" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Cart" component={() => <Cart />} options={{
        headerShown: "",
        tabBarLabel: 'ตะกร้า',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Account" component={() => <Account />} options={{
        headerShown: "",
        tabBarLabel: 'บัญชีของฉัน',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <View>
        <StatusBar style="auto" />
      </View>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardImg: {
    padding: 20
  },
  test: {
    padding: StatusBar.length
  }

});
