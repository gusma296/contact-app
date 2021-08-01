import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {addAlertConnection} from '../redux/actions';

const checkConnection = () => {
  const [isConnected, setIsConnected] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setIsConnected(state.isConnected);
      } else {
        setIsConnected(false);
        dispatch(addAlertConnection());
      }
    });

    return unsubscribe();
  }, [fetch]);

  return {isConnected};
};

export default checkConnection;
