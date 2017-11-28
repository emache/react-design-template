import React from "react";
import { View } from "react-sketchapp";
import Swatch from "./Swatch";
import { paletteStyle } from "./sharedStyles";
import styled from "styled-components/primitives";

const PaletteNoShade = styled.View`
    ${paletteStyle};
`;

export default ({ color, name }) => (
    <PaletteNoShade name={name}>
        {Object.keys(color).map(colorName => (
            <Swatch
                color={color[colorName]}
                name={colorName}
                key={colorName}
            />
        ))}
    </PaletteNoShade>
);
