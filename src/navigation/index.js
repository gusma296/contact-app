import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactList, ContactInput, ContactDetail} from '../screens';
import {PopUp} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {GET_CONTACT, removeAlert} from '../redux/actions';

const Stack = createStackNavigator();

function MainStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ContactList">
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="ContactInput" component={ContactInput} />
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
    </Stack.Navigator>
  );
}

const Router = () => {
  const {isVisible, title, message, title_button} = useSelector(
    state => state.alert,
  );
  const dispatch = useDispatch();
  return (
    <>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
      <PopUp
        isVisible={isVisible}
        message={message}
        titleButton={title_button}
        title={title}
        onPress={() => {
          dispatch(removeAlert());
          dispatch(GET_CONTACT());
        }}
      />
    </>
  );
};

export default Router;
