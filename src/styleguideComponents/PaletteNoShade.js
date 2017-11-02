/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import SwatchNoShade from "./SwatchNoShade";

type P = {
    name: string
};

const PaletteNoShade = ({ color }: P) => (
    <View
        name="colour-palette"
        style={{
            width: "1200",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingLeft: 0,
            paddingRight: 0
        }}
    >
        {Object.keys(color).map(name => (
            <SwatchNoShade color={color[name]} name={name} key={name} />
        ))}
    </View>
);

export default PaletteNoShade;
