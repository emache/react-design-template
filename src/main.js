/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from "react";
import { render, Text, View, Artboard } from "react-sketchapp";
import Palette from "./styleguideComponents/Palette";
import PaletteNoShade from "./styleguideComponents/PaletteNoShade";
import TypeGuide from "./styleguideComponents/TypeGuide";
import Description from "./styleguideComponents/Description";
import Title from "./styleguideComponents/Title";
import Section from "./styleguideComponents/Section";
import LoginForm from "./components/LoginForm";
import { fonts, colors } from "./branding/brandName";
import { brandColors, greyScale } from "./branding/sharedColors";

const Document = () => (
    <Artboard name="Styleguide" style={{ padding: 100 }}>
        <View name="document">
            <Title>Styleguide example</Title>
            <LoginForm />
        </View>
    </Artboard>
);

export default (context: any) => {
    render(<Document />, context.document.currentPage());
};

// <Description>
//     Example styleguide generated using React-Sketchapp from Airbnb.
// </Description>

// <Section title="SharedColors">
//     <Palette color={brandColors} name="Palette Shared" />
// </Section>
// <Section title="NoShade">
//     <PaletteNoShade color={greyScale} name="Palette" />
// </Section>
// <Section title="Typography">
//     <Description>Description of typographic styles</Description>
//     <TypeGuide textStyle={fonts} name="typography" />
// </Section>
