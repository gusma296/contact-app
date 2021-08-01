import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Alert as Alerts,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Colors,
  getFirstString,
  height,
  validBase64,
  validURL,
  width,
} from '../../commons';
import {Alert, Container, Content, Header, Text} from '../../components';
import {DELETE_CONTACT, GET_CONTACT_DETAIL} from '../../redux/actions';
import {styles} from './style';

const ContactDetail = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const {loading, detail, error, message} = useSelector(state => state.contact);
  const {id, color} = route.params;
  const dispatch = useDispatch();
  const validUri = validURL(detail.photo);
  const validBase = validBase64(detail.photo || '');

  function onEditPress() {
    navigation.navigate('ContactInput', {
      data: detail,
    });
  }

  function onDeletePress() {
    Alerts.alert(
      'Delete Contact',
      'are you sure want to delete contact?',
      [
        {
          text: 'Delete',
          onPress: () =>
            dispatch(DELETE_CONTACT(detail.id, navigation, setVisible)),
        },
        {text: 'Cancel', onPress: () => {}},
      ],
      {cancelable: true},
    );
  }

  React.useEffect(() => {
    dispatch(GET_CONTACT_DETAIL(id, setVisible));
  }, []);

  return (
    <Container>
      <Content flex={1} backgroundColor={Colors.primary_dark}>
        <Header
          onBackPress={() => navigation.goBack()}
          title="Contact Detail"
          onEditPress={onEditPress}
          onDeletePress={onDeletePress}
          edit
          delete
          back
        />
        <Content style={styles.container}>
          {loading ? (
            <Content flex={1} center centerTop>
              <ActivityIndicator size={'large'} color={Colors.primary_dark} />
            </Content>
          ) : (
            <Content flex={1} centerTop>
              {validUri || validBase === 'data:image' ? (
                <ImageBackground
                  source={{uri: detail.photo}}
                  resizeMode="cover"
                  borderRadius={16}
                  style={styles.image}>
                  <Content style={styles.imageContent}>
                    <Content style={styles.cardInfo}>
                      <Content flex={1} width={width / 2}>
                        <Text color={Colors.black_charcoal} size={24} bold>
                          {detail.firstName + ' ' + detail.lastName}
                        </Text>
                      </Content>
                      <Content style={styles.textContact}>
                        <Content center>
                          <Text color={Colors.white} bold size={24}>
                            {detail.age}
                          </Text>
                          <Text color={Colors.white} size={10}>
                            Years Old
                          </Text>
                        </Content>
                      </Content>
                    </Content>
                  </Content>
                </ImageBackground>
              ) : (
                <Content
                  style={[
                    styles.content,
                    {
                      backgroundColor: color,
                    },
                  ]}>
                  <Text marginTop={height / 6} size={200} color={Colors.white}>
                    {getFirstString(detail.firstName) +
                      getFirstString(detail.lastName)}
                  </Text>
                  <Content style={styles.imageContent}>
                    <Content style={styles.cardInfo}>
                      <Content flex={1} width={width / 2}>
                        <Text color={Colors.black_charcoal} size={24} bold>
                          {detail.firstName + ' ' + detail.lastName}
                        </Text>
                      </Content>
                      <Content style={styles.textContact}>
                        <Content center>
                          <Text color={Colors.white} bold size={24}>
                            {detail.age}
                          </Text>
                          <Text color={Colors.white} size={10}>
                            Years Old
                          </Text>
                        </Content>
                      </Content>
                    </Content>
                  </Content>
                </Content>
              )}
            </Content>
          )}
        </Content>
      </Content>
      <Alert
        title={error ? 'Error' : 'Success'}
        success={error ? false : true}
        alert={error ? true : false}
        big
        message={error ? message : 'Delete Contact Success'}
        visible={visible}
        onPress={() => setVisible(false)}
      />
    </Container>
  );
};

export default ContactDetail;
