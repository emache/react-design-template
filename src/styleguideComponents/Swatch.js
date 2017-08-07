/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import type { Colors } from '../processColor';

// A color is defined as an object that has
// - a name
// - a hex value or rgba value

// A color swatch should have:
// - shape with a color fill
// - a paragraph/header/label: color name
// - a paragraph/header/label: color hex value
// - a paragraph/header/label: color rgba value

const SWATCH_WIDTH = 100;

const Swatch = ({color}: Color) => (
    <View name={`Swatch-${color.name}`} style={{ margin: 50}}>
        <View style={{
            width: SWATCH_WIDTH,
            height: SWATCH_WIDTH,
            backgroundColor: color.value,
        }}>
        </View>
    </View>
);

export default Swatch;
// Label: name
// Label: color value in rgb or hex
