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
import FormComponentsGuide from "./styleguideComponents/FormComponentsGuide";
import LoginForm from "./components/LoginForm/LoginForm";
import { fonts, coreColors } from "./branding/designSystem";
import { brandColors, greyScale } from "./branding/sharedColors";

const DesignSystem = () => (
    <Document>
        <Page name="Colors">
            <Artboard name="01 Colors" style={{ padding: 100 }}>
                <View name="document">
                    <Section title="Brand colors">
                        <Palette color={brandColors} name="Brand colours" />
                    </Section>
                    <Section title="Color usage">
                        <Palette color={coreColors} name="Color usage" />
                    </Section>

                    <Section title="Grey palette">
                        <PaletteNoShade color={greyScale} name="Grey palette" />
                    </Section>
                </View>
            </Artboard>
        </Page>
        <Page name="Typography">
            <Artboard name="02 Typography" style={{ padding: 100 }}>
                <TypeGuide />
            </Artboard>
        </Page>
        <Page name="Components - Forms">
            <Artboard name="01 Base elements" style={{ padding: 100 }}>
                <Section title="Base Form elements">
                    <FormComponentsGuide />
                </Section>
            </Artboard>
        </Page>
    </Document>
);

export default (context: any) => {
    render(<DesignSystem />, context.document.currentPage());
};

// <Page name="LoginForm">
//             <LoginForm />
//         </Page>
