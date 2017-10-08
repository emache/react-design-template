/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';

// A color is defined as an object that has
// - a name
// - a hex value or rgba value

// A color swatch should have:
// - shape with a color fill
// - a paragraph/header/label: color name
// - a paragraph/header/label: color hex value
// - a paragraph/header/label: color rgba value

const SWATCH_WIDTH = 100;

const Swatch = ({color, name}) => (
    <View name={`swatch-${name}`} style={{ margin: 50}}>
        <View name="color-chip"
              style={{
                width: SWATCH_WIDTH,
                height: SWATCH_WIDTH,
                backgroundColor: color.base,
        }}>
        </View>

        <View style={{
            width: SWATCH_WIDTH,
            height: SWATCH_WIDTH/2,
            flexDirection: 'row'
        }}>
            <View style={{
                width: SWATCH_WIDTH/2,
                height: SWATCH_WIDTH/2,
                backgroundColor: color.brighter
            }}>

            </View>

            <View style={{
                width: SWATCH_WIDTH/2,
                height: SWATCH_WIDTH/2,
                backgroundColor: color.darker
            }}>
            </View>

        </View>

    </View>
);

export default Swatch;
// Label: name
// Label: color value in rgb or hex
