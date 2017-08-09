/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Swatch from './Swatch';

type P = {
    name: string
}

const Palette = ({color}: P) => (
    <View name='Palette2'
        style={{
            width: 500,
            flexWrap: 'wrap',
            flexDirection: 'row'
        }}
    >
        {Object.keys(color).map(name =>
            <Swatch color={color[name]} name={name} key={name}/>
        )}
    </View>
);

export default Palette
