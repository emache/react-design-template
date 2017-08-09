/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Title from './Title';

const Section = ({ title, children }) => (
    <View style={{ marginBottom: 96, flexDirection: 'row' }}>
        <View style={{ width: 200 }}>
            <Title>{title}</Title>
        </View>
        <View>
            {children}
        </View>
    </View>
);

export default Section;
