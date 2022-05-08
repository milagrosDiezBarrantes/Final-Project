import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    margin: 0;
    padding: 0;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    user-select: none;
    background: linear-gradient(180deg, rgba(36, 46, 77, 0.9), rgba(137, 126, 121, 0.9));
  }
 
  `;

export const ContainerPricing = styled.div`
  top: 100px;
  display: flex;
  justify-content: center;
  width: 390px;
  background: #fff;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 11px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  user-select: none;
  margin-right: 10px;
  margin-bottom: 10px;
  :last-child {
    margin-right: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const LogoContainer = styled.div`
  
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  svg {
    fill: ${({ fill = "#ccc" }) => fill};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Caption = styled.div`
 
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: hsla(0, 0%, 7%, 0.7);
  margin-top: 2px;
  margin-bottom: 20px;
`;
export const PriceValue = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 20px;
`;
export const FeaturesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 32px;
`;
export const FeaturesItem = styled.div`
  display: flex;
  margin-bottom: 4px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 12px 50px;
  background: #5cd91e;
  border: none;
  outline: none;
  cursor: pointer;
  height: 48px;
  font-weight: 600;
  color: #fff;
  border-radius: 4px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
  }
`;
export const Feature = styled.div`
  display: flex;
  justify-content: center;
  i {
    margin-right: 5px;
    color: #5cd91e;
  }
`;
