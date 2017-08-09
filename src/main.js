/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, Text, View } from 'react-sketchapp';
import Palette from './styleguideComponents/Palette';
import TypeGuide from './styleguideComponents/TypeGuide';
import Description from './styleguideComponents/Description';
import Title from './styleguideComponents/Title';
import Section from './styleguideComponents/Section';
import { fonts, colors } from './branding/BrandName';

const Document = () => (
  <View>
    <Title>Styleguide example</Title>
    <Section title="Color Palette">
        <Palette color={colors} name="palette" />
    </Section>
    <TypeGuide textStyle={fonts} name="typography" />
    <Description>Test Annotation</Description>
  </View>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};
