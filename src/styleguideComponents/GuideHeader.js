import React from "react";
import { View, Text } from "react-sketchapp";
import {
    spacing,
    colors,
    fontSize,
    defaultTextStyle
} from "../branding/designSystem";
import styled from "styled-components/primitives";

const GuideHeader = styled.View`
    background-color: ${colors.primary.darker};
    width: 1440px;
    min-height: 300px;
    padding: 100px;
`;

const Title = styled.Text`
    font-size: ${fontSize.display}px;
    color: ${colors.white};
    margin-bottom: ${spacing.s}px;
`;

const Description = styled.Text`
    ${defaultTextStyle};
    color: ${colors.white};
    width: 700px;
    line-height: 20;
`;

export default ({ title, children }) => (
    <GuideHeader name={`Header Wrapper`}>
        <Title>{title}</Title>
        <Description> {children} </Description>
    </GuideHeader>
);
