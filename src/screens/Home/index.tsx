import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  Title,
  TotalCars,
} from './styles';

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail:
      'https://e7.pngegg.com/pngimages/262/890/png-clipart-audi-a5-2013-audi-rs-5-2014-audi-rs-5-sports-car-audi-sedan-car-thumbnail.png',
  };

  const carDataTwo = {
    brand: 'Porcshe',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 150,
    },
    thumbnail:
      'https://w7.pngwing.com/pngs/165/75/png-transparent-2018-porsche-panamera-4s-car-techart-porsche-compact-car-car-performance-car.png',
  };

  return (
    <Container>
      <StatusBar backgroundColor='transparent' style='light' translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carDataOne} />}
      />

      {/* <Car data={carDataTwo} /> */}
    </Container>
  );
}
