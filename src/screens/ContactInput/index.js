import React from 'react';
import {useForm} from 'react-hook-form';
import {Colors, wait} from '../../commons';
import {
  Alert,
  Button,
  Container,
  Content,
  Header,
  KeyboardContent,
  TextInput,
} from '../../components';
import {styles} from './style';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {POST_CONTACT, UPDATE_CONTACT} from '../../redux/actions';
import {POST_START_CONTACT, UPDATE_START_CONTACT} from '../../redux/types';

const ContactInput = ({navigation, route}) => {
  const {data} = route.params;
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const {loading, error, message} = useSelector(state => state.contact);
  const [file, setFile] = React.useState({
    uri: '',
    name: '',
    type: '',
  });
  const regex = /^[a-z0-9]+$/i;
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('First Name is required')
      .min(3, ({min}) => `First name must be at least ${min} characters`)
      .matches(regex, 'First name must only contain alpha-numeric characters'),
    lastName: yup
      .string()
      .required('Last Name is required')
      .min(3, ({min}) => `Last name must be at least ${min} characters`)
      .matches(regex, 'Last name must only contain alpha-numeric characters'),
    age: yup
      .number()
      .max(100, ({max}) => `Maximum age must be ${max}`)
      .required('Age is required')
      .typeError('Age is required'),
    photo: yup.string().required('Photo is required'),
  });

  const defaultValue = {
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  };

  const {
    control,
    formState: {errors},
    handleSubmit,
    getValues,
    reset,
    setValue,
  } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  function onSubmit(value) {
    dispatch({type: POST_START_CONTACT});
    const body = {
      firstName: value.firstName,
      lastName: value.lastName,
      age: Number(value.age),
      photo: file.uri,
    };
    if (data) {
      dispatch(
        UPDATE_CONTACT(
          body,
          reset,
          setVisible,
          setFile,
          data.id,
          setValue('photo', ''),
          navigation,
        ),
      );
    } else {
      dispatch(
        POST_CONTACT(body, reset, setVisible, setFile, setValue('photo', '')),
      );
    }
  }

  const Gallery = React.useCallback(() => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 0.8, includeBase64: true},
      async response => {
        if (response?.errorCode) {
          console.log('Error Code');
        } else if (response?.didCancel) {
          console.log('close gallery');
        } else if (response?.errorMessage) {
          console.log('error', response?.errorMessage);
        } else {
          if (response?.assets[0]) {
            const fileName = 'IMAGE_' + new Date().getTime() + '.jpg';
            setFile({
              uri: `data:image/png;base64,${response?.assets[0].base64}`,
              name: fileName,
              type: 'Image',
            });
            setValue('photo', fileName);
            reset(
              {
                firstName: getValues('firstName'),
                lastName: getValues('lastName'),
                age: getValues('age'),
                photo: getValues('photo'),
              },
              {keepErrors: false},
            );
          }
        }
      },
    );
  }, []);

  React.useEffect(() => {
    if (data !== null) {
      setValue('firstName', data.firstName);
      setValue('lastName', data.lastName);
      setValue('age', data.age.toString());
      setValue('photo', data.photo);
      setFile({
        uri: data.photo,
        name: 'IMAGE_' + new Date().getTime() + '.jpg',
      });
    }
  }, []);

  return (
    <Container>
      <Content flex={1} backgroundColor={Colors.primary_dark}>
        <Header
          back
          onBackPress={() => navigation.goBack()}
          title={data ? 'Update Contact' : 'Input Contact'}
        />
        <KeyboardContent>
          <ScrollView style={styles.container}>
            <Content paddingHorizontal={16} paddingTop={12}>
              <TextInput
                title="First Name"
                inputId="firstName"
                control={control}
                error={errors.firstName}
                placeholder="input first name"
                onPressClear={() =>
                  reset(
                    {
                      firstName: '',
                      lastName: getValues('lastName'),
                      age: getValues('age'),
                      photo: getValues('photo'),
                    },
                    {keepErrors: true},
                  )
                }
              />
              <TextInput
                title="Last Name"
                inputId="lastName"
                control={control}
                error={errors.lastName}
                placeholder="input last name"
                onPressClear={() =>
                  reset(
                    {
                      firstName: getValues('firstName'),
                      lastName: '',
                      age: getValues('age'),
                      photo: getValues('photo'),
                    },
                    {keepErrors: true},
                  )
                }
              />
              <TextInput
                title="Age"
                inputId="age"
                control={control}
                error={errors.age}
                placeholder="input age"
                keyboardType="number-pad"
                onPressClear={() =>
                  reset(
                    {
                      firstName: getValues('firstName'),
                      lastName: getValues('lastName'),
                      age: '',
                      photo: getValues('photo'),
                    },
                    {keepErrors: true},
                  )
                }
              />
              <TextInput
                upload
                title="Photo"
                inputId="photo"
                control={control}
                error={errors.photo}
                photoName={file.name}
                onPressUpload={() => Gallery()}
                onPressClear={() => {
                  reset(
                    {
                      firstName: getValues('firstName'),
                      lastName: getValues('lastName'),
                      age: getValues('age'),
                      photo: '',
                    },
                    {keepErrors: true},
                  );
                  setFile({});
                }}
              />
            </Content>
          </ScrollView>
          <Content style={styles.buttonInput}>
            <Button
              loading={loading}
              onPress={handleSubmit(onSubmit)}
              small
              title={data ? 'Update Contact' : 'Input Contact'}
            />
          </Content>
        </KeyboardContent>
      </Content>
      <Alert
        title={error ? 'Error' : data ? 'Update' : 'Input'}
        success={error ? false : data ? true : true}
        alert={error ? true : false}
        message={
          error
            ? message
            : data
            ? 'Update Contact Saved'
            : 'Input Contact Saved'
        }
        big
        visible={visible}
        onPress={() => setVisible(false)}
      />
    </Container>
  );
};

export default ContactInput;
