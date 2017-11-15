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

// The core colors are only created for the purpose of generating a Palette in the style guide
export const coreColors = {
    primary: brandColors.Night,
    secondary: brandColors.Peach,
    accent: brandColors.Sur,
    success: brandColors.Pear,
    warning: brandColors.Lemon,
    failure: brandColors.Tomato
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
export const primaryTextStyle = `
    color: ${colors.primary.base} `;

export const secondaryTextStyle = `
    color: ${colors.grey70} `;

export const disabledTextStyle = `
    color: ${colors.grey30} `;

export const accentTextStyle = `
    color: ${colors.accent.darker} `;

export const linkStyleHover = `
    text-decoration: none ;
    font-weight: ${fontWeights.bold};
    color: ${colors.accent.darker}
`;
export const linkStyle = `
    color: ${colors.accent.base};
    text-decoration: underline;

    &:hover {
        ${linkStyleHover};
    }`;

export const successTextStyle = `
    color: ${colors.success.base} `;

export const warningTextStyle = `
    color: ${colors.warning.darker} `;

export const failureTextStyle = `
    color: ${colors.failure.base} `;

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
    ${accentTextStyle};
    font-size: ${fontSize.display}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.m}px
`;

export const h1TextStyle = `
    ${accentTextStyle};
    font-size: ${fontSize.xxxl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

export const h2TextStyle = `
    ${accentTextStyle};
    font-size: ${fontSize.xxl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;

export const h3TextStyle = `
    ${accentTextStyle};
    font-size: ${fontSize.xl}px;
    font-family: ${fontFamilies.header};
    font-weight: ${fontWeights.bold};
    margin-bottom: ${spacing.s}px
`;
