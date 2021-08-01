import React from 'react';
import Modal from 'react-native-modal';
import {Button, Content, Text} from '.';
import {popupStyle} from './style';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../commons';

const PopUp = props => {
  const {title, message, titleButton, onPress, isVisible} = props;
  return (
    <Modal
      style={popupStyle.container}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isVisible}
      backdropOpacity={0.5}>
      <Content style={popupStyle.content}>
        <Icon
          style={{alignSelf: 'center'}}
          name="wifi"
          color={Colors.primary_dark}
          size={80}
        />
        <Text marginBottom={8} center size={20} bold>
          {title}
        </Text>
        <Content paddingHorizontal={24}>
          <Text lineHeight={20} marginBottom={16} center>
            {message}
          </Text>
        </Content>
        <Button small onPress={onPress} title={titleButton} />
      </Content>
    </Modal>
  );
};

PopUp.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onPress: PropTypes.func,
  titleButton: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default PopUp;
