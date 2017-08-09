/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Swatch from './Swatch';

type P = {
    name: string
}

const Palette = ({color}: P) => (
    <View name='colour-palette'
        style={{
            width: '1200',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingLeft: 0,
            paddingRight: 0
        }}
    >
        {Object.keys(color).map(name =>
            <Swatch color={color[name]} name={name} key={name}/>
        )}
    </View>
);

export default Palette
