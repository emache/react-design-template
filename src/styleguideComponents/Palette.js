/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import Swatch from "./Swatch";
import { paletteStyle } from "./sharedStyles";
import styled from "styled-components/primitives";

type P = {
    color: string,
    name: string
};

const Palette = styled.View`
    ${paletteStyle};
`;

export default ({ color, name }: P) => (
    <Palette name={name}>
        {Object.keys(color).map(colorName => (
            <Swatch color={color[colorName]} name={colorName} key={colorName} />
        ))}
    </Palette>
);
