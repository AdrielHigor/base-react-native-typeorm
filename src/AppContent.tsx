import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./NavigationStack";

import { styles } from './AppContent.style';

const AppContent = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
)

export default AppContent;