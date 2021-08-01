import React from 'react';
import {ImageBackground, TextInput as PureTextInput} from 'react-native';
import {dwonloadStyle, textInputStyle} from './style';
import PropTypes from 'prop-types';
import {Content, IconButton, Text, Touchable} from '.';
import {Colors} from '../commons';
import {Controller} from 'react-hook-form';

const TextInput = props => {
  return (
    <>
      <Content style={props.style} marginBottom={16}>
        <Text marginBottom={8} size={14} lineHeight={18}>
          {props.title}
        </Text>
        <Content>
          <Controller
            control={props.control}
            name={props.inputId}
            render={({field: {onChange, value, onBlur}}) => (
              <>
                {props.upload ? (
                  <Touchable onPress={props.onPressUpload}>
                    <ImageBackground
                      style={dwonloadStyle.dwonload}
                      resizeMode="stretch"
                      source={require('../assets/images/download_border.png')}>
                      <IconButton
                        onPress={() =>
                          props.photoName && onChange(props.photoName)
                        }
                        iconName="file-upload"
                        iconSize={24}
                        iconColor={Colors.placeholder}
                      />
                      <Text
                        size={14}
                        color={Colors.placeholder}
                        marginLeft={16}>
                        {props.photoName
                          ? props.photoName
                          : 'Upload Photo Profile'}
                      </Text>
                    </ImageBackground>
                  </Touchable>
                ) : (
                  <PureTextInput
                    style={[
                      textInputStyle.container,
                      value ? textInputStyle.inputed : textInputStyle.input,
                      props.error && textInputStyle.errorInput,
                      props.textArea && {height: 128, paddingTop: 16},
                      props.phone && {paddingLeft: 124},
                    ]}
                    value={value}
                    multiline={props.textArea}
                    keyboardType={props.keyboardType}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.placeholder}
                    secureTextEntry={props.show}
                    onChangeText={text => onChange(text)}
                    onBlur={onBlur}
                    {...props}
                  />
                )}
                {value !== '' &&
                !props.dropdown &&
                !props.password &&
                !props.download &&
                !props.datepicker ? (
                  <IconButton
                    onPress={props.onPressClear}
                    style={textInputStyle.iconClose}
                    iconName="close"
                    iconSize={15}
                    iconColor={
                      props.error ? Colors.error_dark : Colors.placeholder
                    }
                  />
                ) : null}
              </>
            )}
          />

          {props.error && (
            <Text
              size={12}
              marginTop={10}
              marginBottom={8}
              color={Colors.error_dark}>
              {props.error.message}
            </Text>
          )}
        </Content>
      </Content>
    </>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  password: PropTypes.bool,
  show: PropTypes.bool,
  onPressShow: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.object,
  onPressClear: PropTypes.func,
  onChangeText: PropTypes.func,
  message: PropTypes.string,
  keyboardType: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  textArea: PropTypes.bool,
  style: PropTypes.any,
  upload: PropTypes.bool,
  onPressUpload: PropTypes.func,
  photoName: PropTypes.string,
};

export default TextInput;
