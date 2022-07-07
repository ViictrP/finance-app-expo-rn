import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

interface LoadURLProps {
  url: string;
};
const LoadURL = ({ url }: LoadURLProps) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{backgroundColor: '#09090a'}}
        source={{ uri: url }}
      />
    </View>
  );
};

export default LoadURL;
