/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, Text, View } from 'react-sketchapp';
import Palette from './styleguideComponents/Palette';
import TypeGuide from './styleguideComponents/TypeGuide';
import { styledColors, fonts } from './branding/BrandName';

const Document = () => (
  <View>
    <Palette color={styledColors} name="palette" />
    <TypeGuide textStyle={fonts} name="typography" />
  </View>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};
