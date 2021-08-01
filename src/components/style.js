import {Colors, IOS, width} from '../commons';
import {StyleSheet} from 'react-native';

const containerStyle = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1},
});

const iconButtonStyle = StyleSheet.create({
  badge: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    top: -8,
    right: -4,
  },
});

const headerStyle = StyleSheet.create({
  iconMargin: {
    marginRight: 14,
  },
  iconContent: {
    justifyContent: 'flex-end',
  },
});

const buttonStyle = StyleSheet.create({
  primary: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 11,
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 11,
  },
});

const alertStyle = StyleSheet.create({
  modal: {
    justifyContent: 'flex-start',
  },
  content: {
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  red: {
    backgroundColor: Colors.error_light,
  },
  green: {
    backgroundColor: Colors.success_light,
  },
  blue: {
    backgroundColor: Colors.blue_light,
  },
  yellow: {
    backgroundColor: Colors.warning_light,
  },
});

const textInputStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: IOS ? 15 : 10,
    fontSize: 14,
    paddingRight: 40,
    color: Colors.black,
  },
  iconClose: {
    position: 'absolute',
    right: 18,
    top: 16,
  },
  phonePosition: {
    position: 'absolute',
    left: 16,
    top: 12,
  },
  phoneFlag: {
    width: 32,
    height: 24,
    borderRadius: 2,
    marginRight: 8,
  },
  input: {
    borderColor: '#A0A3BD',
    backgroundColor: Colors.white,
  },
  inputed: {
    borderColor: '#363636',
    backgroundColor: Colors.white,
  },
  errorInput: {
    borderColor: Colors.error_dark,
    backgroundColor: Colors.error_light,
  },
});

const dividerStyle = StyleSheet.create({
  divider: {
    flex: 0,
    borderWidth: 0.5,
    borderColor: '#EFEFEF',
    opacity: 0.5,
  },
});

const dwonloadStyle = StyleSheet.create({
  dwonload: {
    height: 48,
    width: width - 32,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const popupStyle = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});

export {
  popupStyle,
  dwonloadStyle,
  dividerStyle,
  textInputStyle,
  buttonStyle,
  containerStyle,
  iconButtonStyle,
  headerStyle,
  alertStyle,
};
