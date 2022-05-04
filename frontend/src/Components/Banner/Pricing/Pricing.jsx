import React from "react";
import {
  GlobalStyle,
  ContainerPricing,
  Container,
  Title,
  Caption,
  PriceValue,
  Button,
  
} from "../Pricing/Styles";

export const Pricing = props => {
  const { icon: Icon, title, price, button, caption, features } = props;
  return (
    <ContainerPricing>
      <GlobalStyle />
      <Icon />
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
      <PriceValue>{price}</PriceValue>
      <Button>{button}</Button>
    </ContainerPricing>
    
  );
};

export const PricingContainer = () => {
  return (
    <Container>
      <Pricing
        img='https://p4.wallpaperbetter.com/wallpaper/710/234/443/superman-batman-dc-marvel-iron-man-captain-america-green-lantern-spider-man-wolverine-the-flash-hulk-hd-wallpaper-preview.jpg'  
        title="CONTRATÁ MARVEL+ Y STARPLUS+"
        price="ARS 995/mes (final)*"
        button="Buy Plugin"
        caption="Disfrutá MARVEL PLUS + por un precio único mensual."
        features={[
          "Ahorrá contratando los dos servicios juntos con esta oferta única.",
        ]}
      />
      <Pricing
        img='https://p4.wallpaperbetter.com/wallpaper/710/234/443/superman-batman-dc-marvel-iron-man-captain-america-green-lantern-spider-man-wolverine-the-flash-hulk-hd-wallpaper-preview.jpg'
        title="MARVELPLUS+ ANUAL"
        price="ARS 3.850/año (final)*"
        button="Buy Plugin"
        caption="Disfrutá MARVEL PLUS + por un precio único de manera anual"
        features={[
          "Por un precio único, todo un año de películas y series de  Series, Character y Comics.",
        ]}
      />
    </Container>
  );
};

export default Pricing;

