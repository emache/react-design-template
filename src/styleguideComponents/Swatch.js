/* @flow */
import React from "react";
import { View, Text } from "react-sketchapp";
import styled from "styled-components/primitives";

const ColorChipSize = 100;

export const Swatch = styled.View`
    border: 1px solid #000000;
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 20px;
`;

export const LargeColorChip = styled.View`
    width: ${ColorChipSize};
    height: ${ColorChipSize};
    background-color: ${props => props.bgcolor};
`;

const SmallColorChip = styled.View`
    width: ${ColorChipSize / 2};
    height: ${ColorChipSize / 2};
    background-color: ${props => props.bgcolor};
`;

const SmallColorChipWrapper = styled.View`
    display: flex;
    flex-direction: row;
    height: ${ColorChipSize / 2};
`;
export const Annotation = styled.Text`
    color: #000000;
    font-size: 12px;
    font-family: Arial;
    margin-bottom: 10px;
`;

export const LargeAnnotation = styled.Text`
    ${Annotation} font-size: 18px;
    font-weight: bold;
`;

export const AnnotationWrapper = styled.View`
    padding: 20px 0 0 20px;
`;

export default ({ color, name }) => (
    <Swatch name={`swatch-${name}`}>
        <View name="color-chips">
            <LargeColorChip name="color-base" bgcolor={color.base} />
            <SmallColorChipWrapper>
                <SmallColorChip name="lighter" bgcolor={color.lighter} />
                <SmallColorChip name="darker" bgcolor={color.darker} />
            </SmallColorChipWrapper>
        </View>
        <AnnotationWrapper name="labels">
            <LargeAnnotation>{name}</LargeAnnotation>
            <Annotation>Base color: {color.base}</Annotation>
            <Annotation>
                {name}.lighter: {color.lighter}
            </Annotation>
            <Annotation>
                {name}.darker: {color.darker}
            </Annotation>
        </AnnotationWrapper>
    </Swatch>
);
