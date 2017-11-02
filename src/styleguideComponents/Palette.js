/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import Swatch from "./Swatch";
import styled from "styled-components/primitives";

type P = {
    name: string
};

const Palette = styled.View`
    width: 1200;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
`;

export default ({ color }: P) => (
    <Palette name="Palette">
        {Object.keys(color).map(name => (
            <Swatch color={color[name]} name={name} key={name} />
        ))}
    </Palette>
);

// export default Palette;
