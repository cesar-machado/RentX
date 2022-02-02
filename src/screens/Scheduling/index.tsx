import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import ArrowSvg from '../../assets/arrow.svg';

import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  Title,
  RetalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Content,
} from './styles';
import { StatusBar } from 'react-native';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <BackButton color={theme.colors.shape} onPress={() => {}} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RetalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={true}>18/06/2021</DateValue>
          </DateInfo>
        </RetalPeriod>
      </Header>

      <Content>
        <Calendar></Calendar>
      </Content>

      <Footer>
        <Button title='confirmar' />
      </Footer>
    </Container>
  );
}
