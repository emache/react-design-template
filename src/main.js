/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from "react";
import { render, Text, View, Artboard, Page, Document } from "react-sketchapp";
import Palette from "./styleguideComponents/Palette";
import PaletteNoShade from "./styleguideComponents/PaletteNoShade";
import TypeGuide from "./styleguideComponents/TypeGuide";
import Description from "./styleguideComponents/Description";
import Title from "./styleguideComponents/Title";
import Section from "./styleguideComponents/Section";
import LoginForm from "./components/LoginForm/LoginForm";
import { fonts, colors } from "./branding/designSystem";
import { brandColors, greyScale } from "./branding/sharedColors";

const DesignSystem = () => (
    <Document>
        <Page name="Colours">
            <Artboard name="01 Colours" style={{ padding: 100 }}>
                <View name="document">
                    <Title>Styleguide example</Title>

                    <Description>
                        Example styleguide generated using React-Sketchapp from
                        Airbnb.
                    </Description>

                    <Section title="Colour palette">
                        <Palette color={brandColors} name="Palette Shared" />
                    </Section>

                    <Section title="Grey palette">
                        <PaletteNoShade color={greyScale} name="Palette" />
                    </Section>
                </View>
            </Artboard>
        </Page>
    </Document>
);

export default (context: any) => {
    render(<DesignSystem />, context.document.currentPage());
};

// <LoginForm />
