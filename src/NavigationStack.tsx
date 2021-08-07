import React from 'react';
import ComingSoon from './screens/ComingSoon/ComingSoon';
import { createStack } from './services/navigationService';

const Stack = createStack();
const AuthStack = createStack();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="ComingSoon" component={ComingSoon} />
  </AuthStack.Navigator>
)

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Auth" component={AuthNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;