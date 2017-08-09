import React from 'react';
import { Text } from 'react-sketchapp';
import { annotations } from '../branding/Annotations';

const Description = ({children }) => (
  <Text style={annotations.description} name="Description">
        {children}
  </Text>
);

export default Description;
