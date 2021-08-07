import React from 'react';
import navigationService from '../../services/navigationService';

import * as S from './ComingSoon.style';

const ComingSoon = () => (
  <S.Container>
    <S.Title>EM BREVE</S.Title>
    <S.Button onPress={() => navigationService.back()} />
  </S.Container>
);

export default ComingSoon;