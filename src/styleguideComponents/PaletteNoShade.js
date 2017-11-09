/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import SwatchNoShade from "./SwatchNoShade";
import { paletteStyle } from "./sharedStyles";
import styled from "styled-components/primitives";

type P = {
    name: string
};

const PaletteNoShade = styled.View`
    ${paletteStyle};
`;

export default ({ color, name }: P) => (
    <PaletteNoShade name={name}>
        {Object.keys(color).map(colorName => (
            <SwatchNoShade
                color={color[colorName]}
                name={colorName}
                key={colorName}
            />
        ))}
    </PaletteNoShade>
);
