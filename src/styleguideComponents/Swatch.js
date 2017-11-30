import React from "react";
import { View, Text } from "react-sketchapp";
import styled from "styled-components/primitives";
import { Annotation, LargeAnnotation, Title, SecondaryTitle } from "./typography";

const colorChipSize = 100;

export const Swatch = styled.View`
    border: 1px solid #000000;
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 20px;
`;

export const LargeColorChip = styled.View`
    width: ${colorChipSize};
    height: ${colorChipSize};
    background-color: ${props => props.bgcolor};
`;

const SmallColorChip = styled.View`
    width: ${colorChipSize / 2};
    height: ${colorChipSize / 2};
    background-color: ${props => props.bgcolor};
`;

const SmallColorChipWrapper = styled.View`
    display: flex;
    flex-direction: row;
    height: ${colorChipSize / 2};
`;

export const AnnotationWrapper = styled.View`
    padding: 20px 0 0 20px;
`;

export default ({ color, name }) => {
  if (typeof(color) === 'object'){
    return (
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
  }
  else if (typeof(color) === 'string') {
    return (
      <Swatch name={`swatch-${name}`}>
          <LargeColorChip bgcolor={color} />
          <AnnotationWrapper name="labels">
              <LargeAnnotation>{name}</LargeAnnotation>
              <Annotation>Base color: {color}</Annotation>
          </AnnotationWrapper>
      </Swatch>
    )
  }
}
