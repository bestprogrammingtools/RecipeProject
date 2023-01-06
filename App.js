import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={[styles.textStyle, styles.textStyleBackground]}>
        Chveni Pirveli Tekstis Komponenti
      </Text>
    </SafeAreaView>
  );
};

export default App;
