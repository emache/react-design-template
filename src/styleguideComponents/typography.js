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

const TitleContainer = styled.View`
    width: 1200px;
    padding-bottom: ${spacing.s}px;
    margin: ${spacing.m}px 0;
    border-top: 2px solid ${colors.grey70};
`;

const TitleText = styled.Text`
    ${displayTextStyle};
    color: ${colors.grey70};
`;

const SecondaryTitleText = styled.Text`
    ${h2TextStyle};
    color: ${colors.grey70};
`;

const AnnotationText = styled.Text`
    ${secondaryTextStyle};
`;

export const Annotation = ({ children }) => (
    <AnnotationText>{children}</AnnotationText>
);

export const Title = ({ children }) => (
    <TitleContainer
        name="Title-container"
        style={{ borderBottomWidth: 2, borderColor: "black" }}
    >
        <TitleText>{children}</TitleText>
    </TitleContainer>
);

export const SecondaryTitle = ({ children }) => (
    <TitleContainer
        name="Title-container"
        style={{ borderBottomWidth: 2, borderColor: "grey", width: "50%" }}
    >
        <SecondaryTitleText>{children}</SecondaryTitleText>
    </TitleContainer>
);

export default Title;
