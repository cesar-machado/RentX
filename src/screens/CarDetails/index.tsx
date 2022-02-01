import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { BackButton } from '../../components/BackButton';

import { Container, Header } from './styles';

export function CarDetails() {
  return (
    <Container>
      <StatusBar translucent={false} style='light' />
      <Header>
        <BackButton color='red' onPress={() => {}} />
      </Header>
    </Container>
  );
}
