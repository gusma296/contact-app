import React from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {Colors} from '../commons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {alertStyle} from './style';
import {IconButton, Text, Content} from '.';

const Alert = props => {
  const insets = useSafeAreaInsets();
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0}
      style={[
        alertStyle.modal,
        {
          paddingTop: insets.top + 60,
        },
      ]}
      isVisible={props.visible}>
      <Content
        style={[
          alertStyle.content,
          props.success && alertStyle.green,
          props.alert && alertStyle.red,
          props.info && alertStyle.blue,
          props.warning && alertStyle.yellow,
        ]}>
        <IconButton
          iconName={
            props.success ? 'check-circle' : props.info ? 'info' : 'error'
          }
          iconSize={24}
          iconColor={
            props.success
              ? Colors.success
              : props.alert
              ? Colors.error
              : props.info
              ? Colors.label
              : Colors.warning
          }
        />
        <Content flex={1} marginLeft={13}>
          <Text
            size={14}
            color={
              props.success
                ? Colors.success
                : props.alert
                ? Colors.error
                : props.info
                ? Colors.label
                : Colors.warning
            }
            bold>
            {props.title}
          </Text>
          {props.big && (
            <Text
              size={14}
              color={
                props.success
                  ? Colors.success
                  : props.alert
                  ? Colors.error
                  : props.info
                  ? Colors.label
                  : Colors.warning
              }
              bold>
              {props.message}
            </Text>
          )}
        </Content>
        <IconButton
          onPress={props.onPress}
          style={{justifyContent: 'flex-end'}}
          iconName="close"
          iconSize={14}
        />
      </Content>
    </Modal>
  );
};

Alert.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  alert: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  big: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
