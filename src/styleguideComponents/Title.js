import React from 'react';
import { Text, View } from 'react-sketchapp';
import { annotations } from '../branding/Annotations';
import { spacing } from '../branding/BrandName';

const Title = ({children }) => (
    <View
        style={{
            width: 1000,
            paddingBottom: spacing.s,
            marginBottom: spacing.xl,
            borderBottomWidth: 2,
            borderColor: '#000'
        }}
    >
        <Text style={annotations.header} name="Header">
            {children}
        </Text>
    </View>
);

export default Title;
