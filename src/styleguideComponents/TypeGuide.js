import React from "react";
import { View, Text } from "react-sketchapp";
import styled from "styled-components/primitives";
import { fontChipStyle } from "./sharedStyles";
import { SecondaryTitle } from "./typography";
import {
    displayTextStyle,
    defaultTextStyle,
    h1TextStyle,
    h2TextStyle,
    h3TextStyle,
    smallTextStyle,
    extraSmallTextStyle,
    largeTextStyle,
    colors,
    spacing,
    fontFamilies,
    fontSize,
    secondaryTextStyle,
    disabledTextStyle,
    accentTextStyle,
    linkStyle,
    successTextStyle,
    warningTextStyle,
    failureTextStyle
} from "../branding/designSystem";

const DisplayText = styled.Text`
    ${displayTextStyle};
`;

const DefaultText = styled.Text`
    ${defaultTextStyle};
`;

const H1Text = styled.Text`
    ${h1TextStyle};
`;

const H2Text = styled.Text`
    ${h2TextStyle};
`;

const H3Text = styled.Text`
    ${h3TextStyle};
`;

const LargeText = styled.Text`
    ${largeTextStyle};
`;
const SmallText = styled.Text`
    ${smallTextStyle};
`;

const ExtraSmallText = styled.Text`
    ${extraSmallTextStyle};
`;

const SecondaryText = styled.Text`
    ${defaultTextStyle};
    ${secondaryTextStyle};
`;

const DisabledText = styled.Text`
    ${defaultTextStyle};
    ${disabledTextStyle};
`;

const AccentText = styled.Text`
    ${defaultTextStyle};
    ${accentTextStyle};
`;

const LinkText = styled.Text`
    ${defaultTextStyle};
    ${linkStyle};
`;

const SuccessText = styled.Text`
    ${defaultTextStyle};
    ${successTextStyle};
`;

const WarningText = styled.Text`
    ${defaultTextStyle};
    ${warningTextStyle};
`;

const FailureText = styled.Text`
    ${defaultTextStyle};
    ${failureTextStyle};
`;

const FontChipContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const FontChip = styled.View`
    ${fontChipStyle};
`;

const Sample = styled.Text`
    font-family: ${props => props.font};
    color: ${colors.black};
    font-size: ${fontSize.display};
`;

const Legend = styled.Text`
    ${defaultTextStyle};
    margin-top: ${spacing.s};
`;

const TextSampleContainer = styled.View`
    margin-top: ${spacing.m};
`;

const TypeGuide = () => (
    <View name="TypeGuide">
        <SecondaryTitle>Fonts</SecondaryTitle>
        <FontChipContainer name="Typography guide">
            <FontChip name="Header font chip">
                <Sample font={fontFamilies.header}>Aa - Zz </Sample>
                <Legend>Header font: {fontFamilies.header}</Legend>
            </FontChip>
            <FontChip name="Body font chip">
                <Sample font={fontFamilies.body}>Aa - Zz </Sample>
                <Legend>Body font: {fontFamilies.body}</Legend>
            </FontChip>
        </FontChipContainer>

        <TextSampleContainer>
            <SecondaryTitle>Headings</SecondaryTitle>
            <DisplayText>The quick fox jumps over the lazy dog</DisplayText>
            <H1Text>The quick fox jumps over the lazy dog</H1Text>
            <H2Text>The quick fox jumps over the lazy dog</H2Text>
            <H3Text>The quick fox jumps over the lazy dog</H3Text>
            <LargeText>The quick fox jumps over the lazy dog</LargeText>

            <SecondaryTitle>Body text</SecondaryTitle>
            <DefaultText>The quick fox jumps over the lazy dog</DefaultText>
            <SecondaryText>
                Default text can also take different variations -- Body
                secondary
            </SecondaryText>

            <DisabledText>
                Default text can also take different variations -- body disabled
                / hint
            </DisabledText>

            <AccentText>
                Default text can also take different variations -- body accent
            </AccentText>

            <LinkText>
                Default text can also take different variations -- body link
            </LinkText>

            <SuccessText>
                Default text can also take different variations -- success
            </SuccessText>

            <WarningText>
                Default text can also take different variations -- warning
            </WarningText>

            <FailureText>
                Default text can also take different variations -- failure/error
            </FailureText>

            <SmallText>The quick fox jumps over the lazy dog</SmallText>
            <ExtraSmallText>
                The quick fox jumps over the lazy dog
            </ExtraSmallText>
        </TextSampleContainer>
    </View>
);

export default TypeGuide;
