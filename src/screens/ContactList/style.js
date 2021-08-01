import {StyleSheet} from 'react-native';
import {Colors} from '../../commons';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_light,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.placeholder_light,
    marginRight: 16,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
  },
  flatlistContent: {
    paddingBottom: 24,
  },
  buttonItem: {
    paddingHorizontal: 16,
  },
  buttonAdd: {
    position: 'absolute',
    bottom: 46,
    right: 36,
    elevation: 5,
    backgroundColor: Colors.primary,
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
