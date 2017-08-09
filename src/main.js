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
  <View name="document">
    <Title>Styleguide example</Title>
    <Description>
        Example styleguide generated using React-Sketchapp from Airbnb.
    </Description>

    <Section title="Color Palette">
        <Palette color={colors} name="Palette" />
    </Section>
    <Section title="Typography">
        <Description>Description of typographic styles</Description>
        <TypeGuide textStyle={fonts} name="typography" />
    </Section>
  </View>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};
