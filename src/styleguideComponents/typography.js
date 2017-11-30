import React from "react";
import { Text } from "react-sketchapp";
import styled from "styled-components/primitives";
import {
    spacing,
    colors,
    secondaryTextStyle,
    displayTextStyle,
    h2TextStyle
} from "../branding/designSystem";

const TitleText = styled.Text`
    ${displayTextStyle};
    color: ${colors.grey45};
    width: 1200px;
    padding-bottom: ${spacing.s}px;
    margin: ${spacing.m}px 0;
    border-top: 2px solid ${colors.grey45};
`;

const SecondaryTitleText = styled.Text`
    ${h2TextStyle};
    color: ${colors.grey45};
    margin-bottom: ${spacing.m}px;
    padding-bottom: ${spacing.xs}px;
`;

export const Annotation = styled.Text`
    ${secondaryTextStyle};
    margin-bottom: ${spacing.xxs}px;
    max-width: 700px;
`;

export const LargeAnnotation = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: ${spacing.xxs}px;
`;

export const Title = ({ children }) => (
    <TitleText style={{ borderBottomWidth: 2, borderColor: "black" }}>
        {children}
    </TitleText>
);

export const SecondaryTitle = ({ children }) => (
    <SecondaryTitleText
        style={{ borderBottomWidth: 2, borderColor: "grey", width: "50%" }}
    >
        {children}
    </SecondaryTitleText>
);

export default Title;
