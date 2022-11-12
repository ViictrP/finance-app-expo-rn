import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import createInvoke from 'react-native-webview-invoke/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoadURLProps {
  url: string;
}

const LoadURL = ({ url }: LoadURLProps) => {
  let webView: WebView | null;
  const invoke = createInvoke(() => webView);

  const saveToken = async (token: string) => {
    await AsyncStorage.setItem('access_token', token);
  };

  const getToken = async () => {
    alert('getToken called');
    return await AsyncStorage.getItem('acces_token');
  };

  useEffect(() => {
    invoke.define('saveToken', saveToken);
    invoke.define('getToken', getToken);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={w => webView = w}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#09090a'}}
        onMessage={invoke.listener}
        source={{ uri: url }}
      />
    </View>
  );
};

export default LoadURL;
