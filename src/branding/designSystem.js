// Global Design System settings: shared colors, text, spacing, grid.
import { brandColors, greyScale } from "./sharedColors";
import tinycolor from "tinycolor2";

// Global color names
// Favor generic names to actual color names.
export const colors = {
    primary: brandColors.Aquamarine,
    secondary: brandColors.Sky,
    accent: brandColors.Lilac,
    success: brandColors.Pear,
    warning: brandColors.Lemon,
    failure: brandColors.Tomato,
    primaryText: brandColors.Night.base,
    black: greyScale.Black,
    grey45: greyScale.Grey45,
    grey59: greyScale.Grey59,
    grey78: greyScale.Grey78,
    grey84: greyScale.Grey84,
    grey91: greyScale.Grey91,
    grey95: greyScale.Grey95,
    grey98: greyScale.Grey98,
    white: greyScale.White
};

// Text colors only
export const textColors = {
    primary: colors.black,
    secondary: colors.grey,
    accent: colors.primary.base,
    success: colors.success.darker,
    warning: colors.warning.darker,
    failure: colors.failure.darker
};


// Global font and typography settings
export const fontFamilies = {
    header: "Arial",
    body: "Arial"
};

const fontWeights = {
    regular: "normal",
    bold: "bold"
};

// Base font size
const baseFontSize = 16;

// Sizes
export const fontSize = {
    xs: baseFontSize * 0.625, // 10
    s: baseFontSize * 0.75, // 12
    body: baseFontSize * 0.875, // 14
    l: baseFontSize, // 16
    xl: baseFontSize * 1.5, // 24
    xxl: baseFontSize * 2, // 32
    xxxl: baseFontSize * 2.625, // 42
    display: baseFontSize * 3 // 48
};

// Spacing, based off the base font-size.
export const spacing = {
    xxs: 0.5 * baseFontSize,
    xs: 1 * baseFontSize,
    s: 2 * baseFontSize,
    m: 3 * baseFontSize,
    l: 5 * baseFontSize,
    xl: 7 * baseFontSize,
    xxl: 11 * baseFontSize,
    xxxl: 13 * baseFontSize
};

//-------------------------
// Typographic styles

// Typographic colors
export const boldText = `
    font-weight: ${fontWeights.bold};
`;
export const primaryTextStyle = `
    color: ${colors.primaryText} `;

export const secondaryTextStyle = `
    color: ${tinycolor(colors.primaryText)
        .setAlpha(0.8)
        .toRgbString()} `;

export const disabledTextStyle = `
    color: ${tinycolor(colors.primaryText)
        .setAlpha(0.5)
        .toRgbString()}; `;

export const accentTextStyle = `
    color: ${colors.primary.base} `;

export const linkStyleHover = `
    text-decoration: none ;
    color: ${colors.accent.darker}
`;
export const linkStyle = `
    color: ${colors.primaryText};
    text-decoration: underline;

    &:hover {
        ${linkStyleHover};
    }`;

export const successTextStyle = `
    color: ${colors.success.darker} `;

export const warningTextStyle = `
    color: ${colors.warning.darker} `;

export const failureTextStyle = `
    color: ${colors.failure.darker} `;

// Typographic shared styles
export const defaultTextStyle = `
    font-size: ${fontSize.body}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.regular};
    ${primaryTextStyle};
    margin-bottom: ${spacing.xs}px
`;

export const smallTextStyle = `
    ${secondaryTextStyle};
    font-size: ${fontSize.s}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.xs}px
`;

export const extraSmallTextStyle = `
    ${secondaryTextStyle};
    font-size: ${fontSize.xs}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.xs}px
`;

export const largeTextStyle = `
    ${accentTextStyle};
    font-size: ${fontSize.l}px;
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

// Heading styles
export const displayTextStyle = `
    ${primaryTextStyle};
    font-size: ${fontSize.display}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.m}px
`;

export const h1TextStyle = `
    ${primaryTextStyle};
    font-size: ${fontSize.xxxl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

export const h2TextStyle = `
    ${primaryTextStyle};
    font-size: ${fontSize.xxl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

export const h3TextStyle = `
    ${primaryTextStyle};
    font-size: ${fontSize.xl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;
