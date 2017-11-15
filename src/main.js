/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from "react";
import { render, View, Artboard, Page, Document } from "react-sketchapp";
import Palette from "./styleguideComponents/Palette";
import PaletteNoShade from "./styleguideComponents/PaletteNoShade";
import TypeGuide from "./styleguideComponents/TypeGuide";
import FormComponentsGuide from "./styleguideComponents/FormComponentsGuide";
import LoginForm from "./components/LoginForm/LoginForm";
import { fonts, coreColors, spacing } from "./branding/designSystem";
import { brandColors, greyScale } from "./branding/sharedColors";
import {
    Annotation,
    Title,
    SecondaryTitle
} from "./styleguideComponents/typography";
import GuideHeader from "./styleguideComponents/GuideHeader";
import Section from "./styleguideComponents/Section";

import styled from "styled-components/primitives";

const Container = styled.View`
    display: flex;
    flex-direction: column;
    min-width: 1200px;
    padding: 100px;
    bottom-margin: 0;
`;

const DesignSystem = () => (
    <Document>
        <Page name="Colors">
            <Artboard
                name="01 Brand colors"
                style={{ position: "absolute", left: 0, top: 0 }}
            >
                <GuideHeader title="Brand colors">
                    Each color in the sharedColors file includes a lighter, base
                    and darker shade. If lighter or darker shades aren't
                    specified manually, we generate them automatically.
                </GuideHeader>

                <Container title="Brand colors">
                    <SecondaryTitle>Brand colors</SecondaryTitle>
                    <Palette color={brandColors} name="Brand colours" />
                </Container>
            </Artboard>
            <Artboard
                name="02 UI Colors"
                style={{ position: "absolute", left: 1540, top: 0 }}
            >
                <GuideHeader title="Color guidelines">
                    We define several layers of naming for colors, starting from
                    their basic names, and wrapping them around more abstract
                    names such as primary, secondary, etc. The whole brand
                    palette is defined upfront, followed by the UI/product
                    palette which may or may not be the same as the brand
                    palette, and finally - greyscale.{"\n"}
                    Greys shades are named with a number which relates to their
                    brightness levels, thus helping identifying which ones is
                    lighter or darker.
                </GuideHeader>

                <Container>
                    <Section title="Color usage">
                        <SecondaryTitle>UI colors</SecondaryTitle>
                        <Palette color={coreColors} name="Color usage" />
                    </Section>
                    <Section title="Grey palette">
                        <SecondaryTitle>Grey palette</SecondaryTitle>
                        <PaletteNoShade color={greyScale} name="Grey palette" />
                    </Section>
                </Container>
            </Artboard>
        </Page>
        <Page name="Typography">
            <Artboard name="02 Typography">
                <GuideHeader title="Typographic elements">
                    Typographic guidelines and styles. {"\n"}
                    These include default global spacing attributes attached to
                    header elements.
                </GuideHeader>
                <Container name="Typography guide">
                    <TypeGuide />
                </Container>
            </Artboard>
        </Page>
        <Page name="Components - Forms">
            <Artboard name="01 Form Base elements">
                <GuideHeader title="Form: base elements">
                    Basic elements for forms and their different states, if
                    applicable. {"\n"}
                    Note that certain elements cannot be rendered yet due to the
                    fact react-sketchapp does not yet support SVG renders. (this
                    affects dropdowns and checkboxes)
                </GuideHeader>
                <Container name="Base Form elements">
                    <FormComponentsGuide />
                </Container>
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
