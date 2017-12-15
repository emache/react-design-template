// Typographic components
import React from "react";
import { Text } from "react-sketchapp";
import styled from "styled-components/primitives";
import {
    colors,
    spacing,
    primaryTextStyle,
    disabledTextStyle,
    defaultTextStyle,
    boldText,
    fontSize,
    fontFamilies,
    fontWeights,
} from "../../branding/designSystem";


export const LinkText = styled.Text`
  color: ${textColors.primary};
  text-decoration: underline;

  &:hover {
    text-decoration: none ;
    color: ${colors.accent.darker}
  }
`;

export const BodyText = styled.Text`
  font-size: ${fontSize.body}px;
  font-family: ${fontFamilies.body};
  font-weight: ${fontWeights.regular};
  ${primaryTextStyle};
  margin-bottom: ${spacing.xs}px
`;


// Typographic shared styles
export const BodyText = styled.Text `
    font-size: ${fontSize.body}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.regular};
    ${primaryTextStyle};
    margin-bottom: ${spacing.xs}px
`;

export const SmallText = styled.Text `
    ${secondaryTextStyle};
    font-size: ${fontSize.s}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.xs}px
`;

export const ExtraSmallText = styled.Text `
    ${secondaryTextStyle};
    font-size: ${fontSize.xs}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.xs}px
`;

export const LargeText = styled.Text `
    ${accentTextStyle};
    font-size: ${fontSize.l}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

// Heading styles
export const DisplayText = styled.Text `
    ${primaryTextStyle};
    font-size: ${fontSize.display}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.m}px
`;

export const Heading1 = styled.Text `
    ${primaryTextStyle};
    font-size: ${fontSize.xxxl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

export const Heading2 = styled.Text `
    ${primaryTextStyle};
    font-size: ${fontSize.xxl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

export const Heading3 = styled.Text `
    ${primaryTextStyle};
    font-size: ${fontSize.xl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;
