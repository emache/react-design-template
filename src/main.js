/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import Palette from './styleguideComponents/Palette';
import { styledColors } from './branding/BrandName';

const Document = () => (
  <View>
    <Palette color={styledColors} name="palette" />
  </View>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};
