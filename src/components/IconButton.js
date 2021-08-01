import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IOS, Colors} from '../commons';

const IconButton = props => {
  return (
    <Pressable
      android_ripple={{color: Colors.ripple_black, borderless: true}}
      style={({pressed}) => [
        props.style,
        {
          opacity: pressed && IOS ? 0.6 : 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Icon
        style={{padding: 4}}
        color={props.iconColor}
        size={props.iconSize}
        name={props.iconName}
      />
    </Pressable>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
  badgeValue: PropTypes.number,
  style: PropTypes.any,
  disabled: PropTypes.bool,
};

export default IconButton;
