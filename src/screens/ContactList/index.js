import React from 'react';
import {ActivityIndicator, BackHandler, ToastAndroid} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../commons';
import checkConnection from '../../commons/checkConnection';
import {Alert, Container, Content, Header, IconButton} from '../../components';
import {GET_CONTACT} from '../../redux/actions';
import Contact from './components/Contact';
import {styles} from './style';
import {useFocusEffect} from '@react-navigation/core';

const ContactList = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const {isConnected} = checkConnection();
  const dispatch = useDispatch();
  const {loading, list, error, message} = useSelector(state => state.contact);
  React.useEffect(() => {
    if (isConnected) {
      dispatch(GET_CONTACT(setVisible));
    }
    SplashScreen.hide();
  }, []);

  function onAddPress() {
    navigation.navigate('ContactInput', {
      data: null,
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      let currentCount = 0;
      const backAction = () => {
        if (currentCount < 1) {
          currentCount += 1;
          ToastAndroid.showWithGravityAndOffset(
            'Press again to exit',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            150,
          );
        } else {
          BackHandler.exitApp();
        }
        setTimeout(() => {
          currentCount = 0;
        }, 2000);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );

  return (
    <Container>
      <Content flex={1} backgroundColor={Colors.primary_dark}>
        <Header title={'Contact'} />
        <Content style={styles.container}>
          {loading ? (
            <Content flex={1} center centerTop>
              <ActivityIndicator size={'large'} color={Colors.primary_dark} />
            </Content>
          ) : (
            <Contact dispatch={dispatch} data={list} navigation={navigation} />
          )}
        </Content>
      </Content>
      <Alert
        title={'Error'}
        alert={error}
        big
        message={message}
        visible={visible}
        onPress={() => setVisible(false)}
      />
      <Content style={styles.buttonAdd}>
        <IconButton
          onPress={onAddPress}
          iconName="post-add"
          iconSize={38}
          iconColor={Colors.white}
        />
      </Content>
    </Container>
  );
};

export default React.memo(ContactList);
