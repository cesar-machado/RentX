import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImage,
  Details,
  Description,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Content,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={[
            'https://www.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746816155112682.png?s=fill&w=130&h=97&q=70&t=true)',
          ]}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>Porsche</Brand>
            <Name>Panamera</Name>
          </Description>
          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo. Surgiu do {''} lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}
