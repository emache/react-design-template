// @flow
// Global Design System settings: shared colors, text, spacing, grid.
import { brandColors, greyScale } from "./sharedColors";

// Global color names
// Favor generic names to actual color names.
export const colors = {
    primary: brandColors.Night,
    secondary: brandColors.Peach,
    accent: brandColors.Sur,
    success: brandColors.Pear,
    warning: brandColors.Lemon,
    failure: brandColors.Tomato,
    black: greyScale.Black,
    grey70: greyScale.Grey70,
    grey30: greyScale.Grey30,
    grey10: greyScale.Grey10,
    grey03: greyScale.Grey3,
    white: greyScale.White
};

// Global font and typography settings
const fontFamilies = {
    header: "Arial",
    body: "Arial"
};

const fontWeights = {
    regular: "regular",
    bold: "bold"
};

// Base font size
const baseFontSize = 16;

// Sizes
export const typeSizes = {
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
export const primaryTextStyle = `
    color: ${colors.primary} `;

export const secondaryTextStyle = `
    color: ${colors.grey30} `;

export const disabledTextStyle = `
    color: ${colors.grey70} `;

export const accentTextStyle = `
    color: ${colors.accent.darker} `;

export const linkStyle = `
    color: ${colors.accent};
    text-decoration: underlined;

    &:hover {
        text-decoration: none ;
        font-weight: ${fontWeights.bold};
        color: ${colors.accent.darker};
    }`;

export const successTextStyle = `
    color: ${colors.success.base} `;

export const warningTextStyle = `
    color: ${colors.warning.darker} `;

export const failureTextStyle = `
    color: ${colors.failure.base} `;

// Typographic shared styles
export const defaultBody = `
    font-size: ${typeSizes.body};
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.regular};
    ${primaryTextStyle};
`;

export const smallTextStyle = `
    ${secondaryTextStyle};
    font-size: ${typeSizes.s};
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
`;

export const extraSmallTextSize = `
    ${secondaryTextStyle};
    font-size: ${typeSizes.xs};
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
`;

export const largeTextStyle = `
    ${accentTextStyle};
    font-size: ${typeSizes.l};
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.bold};
`;

// Heading styles
export const displayTexttyle = `
    ${accentTextStyle};
    font-size: ${typeSizes.display};
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
`;

export const h1TextStyle = `
    ${accentTextStyle};
    font-size: ${typeSizes.xxxl};
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
`;

export const h2TextStyle = `
    ${accentTextStyle};
    font-size: ${typeSizes.xxl};
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
`;

export const h3TextStyle = `
    ${accentTextStyle};
    font-size: ${typeSizes.xl};
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
`;
