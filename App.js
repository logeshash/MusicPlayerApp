import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Player from './App/Screens/Player';
import CategoriesDetails from './App/Components/CategoriesDetails';

import Tabs from './App/config/router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  goToTabs() {
    this.props.navigation.navigate('Tabs');
  }

  render() {
    const zoomIn = {
      0: {
        scale: 0,
      },
      0.5: {
        scale: 0.5,
      },
      1: {
        scale: 1,
      },
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Animatable.Image
          animation={zoomIn}
          source={require('./App/Assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Music Player</Text>
        <Text style={styles.contentText}>Enjoy your music</Text>
        <TouchableOpacity style={styles.btnSignup}>
          <Text style={styles.textSignup}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={() => this.goToTabs()}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textSocial}>or continue with</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon
            name="facebook"
            size={40}
            color='#3b5998'
          />
          <Icon
            name="google"
            size={40}
            color='#3cba54'
            style={{marginLeft: 40}}
          />

          </View>
        <TouchableOpacity onPress={() => this.goToTabs()}>
          <Text style={styles.textSkip}>skip</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={CategoriesDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#C70039',
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 40
  },
  logo: {
    height: 70,
    width: 70,
    marginTop: 120,
    alignItems: 'baseline',
  },
  btn: {
    width: '60%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'verdana'
  },
  textSignup: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'verdana',
    fontWeight: 'bold',
    
  },
  textLogin: {
    color: '#C70039',
    fontSize: 20,
    fontFamily: 'verdana',
    fontWeight: 'bold',
    
  },
  textSkip: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'verdana',
    marginTop: 30,
    textDecorationLine: 'underline',
  },
  btnLogin: {
    width: '85%',
    height: 60,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    elevation: 15,
  },
  btnSignup: {
    width: '85%',
    height: 60,
    borderRadius: 20,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  contentText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 70
  },
  textSocial: {
    fontSize: 15,
    fontFamily: 'verdana',
    marginTop: 40,
    marginBottom: 15
  }
});