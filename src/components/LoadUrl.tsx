import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import createInvoke from 'react-native-webview-invoke/native';
import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'access_token';

interface LoadURLProps {
  url: string;
}

const LoadURL = ({ url }: LoadURLProps) => {
  let webView: WebView | null;
  const invoke = createInvoke(() => webView);

  const saveToken = async (token: string) => {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
  };

  const getToken = async () => {
    const token = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
    return token || '';
  };

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  };

  useEffect(() => {
    invoke.define('saveToken', saveToken);
    invoke.define('getToken', getToken);
    invoke.define('deleteToken', deleteToken);
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
