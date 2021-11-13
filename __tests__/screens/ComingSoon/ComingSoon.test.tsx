/**
 * @format
 */

import 'react-native';
import React from 'react';
import ComingSoon from '../../../src/screens/ComingSoon/ComingSoon';

import renderer from 'react-test-renderer';

it('Coming soon renders correctly', () => {
  renderer.create(<ComingSoon />);
});
