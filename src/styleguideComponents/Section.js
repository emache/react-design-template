/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Title from './Title';
import { spacing } from '../branding/BrandName';

const Section = ({ title, children }) => (
    <View name={`${title} Wrapper`} style={{
        marginBottom: spacing.xl,
        flexDirection: 'column',
        width: 1200
    }}>
        <Title>{title}</Title>
        {children}
    </View>
);

export default Section;
