/* @flow */
import React from "react";
import { View, Text } from "react-sketchapp";
import styled from "styled-components/primitives";
import {
    Swatch,
    LargeColorChip,
    Annotation,
    LargeAnnotation,
    AnnotationWrapper
} from "./Swatch";

const SWATCH_WIDTH = 100;

const SwatchNoShade = ({ color, name }) => (
    <Swatch name={`swatch-${name}`}>
        <LargeColorChip bgcolor={color} />
        <AnnotationWrapper name="labels">
            <LargeAnnotation>{name}</LargeAnnotation>
            <Annotation>Base color: {color}</Annotation>
        </AnnotationWrapper>
    </Swatch>
);

export default SwatchNoShade;
