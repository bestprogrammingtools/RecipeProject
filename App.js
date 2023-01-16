import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text>Welcome to our application</Text>
      </View>
      <View style={styles.main}>
        <Text>Ak ikneba teksti romelic agwers chveni aplikaciis punkcias</Text>
      </View>
      <View style={styles.footer}>
        <Text>All rights reserved RecipeProject Team</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
