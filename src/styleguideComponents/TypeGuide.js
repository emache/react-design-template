/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';

const TypeGuide = ({textStyle}) => (
    <View name="Typography guide" style={{margin:50}}>
        {Object.keys(textStyle).map(style =>
            <Text style={textStyle[style]} key={style} name={style}>
                {style}
            </Text>
            )
        }
    </View>
);

export default TypeGuide
