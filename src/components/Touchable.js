import React from 'react';
import {Pressable, View} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../commons';

const Touchable = props => {
  return (
    <Pressable
      disabled={props.disabled}
      style={props.style}
      android_ripple={{
        color: props.color ? props.color : Colors.ripple,
        borderless: props.borderless,
        radius: props.radius,
      }}
      onPress={props.onPress}
      {...props}>
      {({pressed}) => (
        <View style={pressed && {opacity: 0.7}}>{props.children}</View>
      )}
    </Pressable>
  );
};

Touchable.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  width: PropTypes.any,
  color: PropTypes.any,
  borderless: PropTypes.bool,
  radius: PropTypes.number,
};

export default Touchable;
