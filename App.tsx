import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import LoadURL from './src/components/LoadUrl';

const App = () => {
  return (
    <View style={styles.container}>
      <LoadURL url='https://finance-app-react-chi.vercel.app' />
      {/* footer */}
      <View style={{height: 20, backgroundColor: '#18181b'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
});

export default App;
