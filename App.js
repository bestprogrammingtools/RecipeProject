import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text>Welcome to our application</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text>Es aris chveni aplikaciis agwera</Text>
        </View>
        <View style={styles.footer}>
          <Text>All rights reserved Recipe Project Team</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
