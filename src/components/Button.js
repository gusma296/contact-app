import React from 'react';
import {Touchable, Content, Text} from '.';
import PropTypes from 'prop-types';
import {buttonStyle} from './style';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../commons';

const Button = props => {
  return (
    <Touchable
      style={props.style}
      onPress={props.onPress}
      disabled={props.disable}
      color={Colors.ripple_black}>
      <Content
        style={[
          props.secondary ? buttonStyle.secondary : buttonStyle.primary,
          props.disable
            ? {backgroundColor: Colors.primary_two}
            : {
                backgroundColor: props.secondary
                  ? Colors.white
                  : Colors.primary,
              },
          props.colorButton && {
            backgroundColor: props.colorButton,
          },
          props.small
            ? {paddingVertical: 14}
            : props.smaller
            ? {paddingVertical: 8}
            : props.medium
            ? {paddingVertical: 19.67}
            : {paddingVertical: 23.67},
          props.paddingHorizontal && {
            paddingHorizontal: props.paddingHorizontal,
          },
        ]}>
        {props.loading ? (
          <ActivityIndicator
            size="small"
            color={props.secondary ? Colors.primary : Colors.white}
          />
        ) : (
          <Text
            size={props.smaller ? 12 : 14}
            bold
            style={{paddingVertical: 1.5}}
            color={props.secondary ? Colors.primary : Colors.white}>
            {props.title}
          </Text>
        )}
      </Content>
    </Touchable>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  loading: PropTypes.bool,
  style: PropTypes.any,
  secondary: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  smaller: PropTypes.bool,
  colorButton: PropTypes.string,
  disable: PropTypes.bool,
  paddingHorizontal: PropTypes.number,
};

export default Button;
