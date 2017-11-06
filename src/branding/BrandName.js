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
    display: "Arial",
    body: "Georgia"
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
export const primaryText = `
    color: ${colors.primary} `;

export const secondaryText = `
    color: ${colors.grey30} `;

export const disabledText = `
    color: ${colors.grey70} `;

export const accentText = `
    color: ${colors.accent.darker} `;

export const linkText = `
    color: ${colors.accent};
    text-decoration: underlined; `;

export const successText = `
    color: ${colors.success.base} `;

export const warningText = `
    color: ${colors.warning.darker} `;

export const failureText = `
    color: ${colors.failure.base} `;

// Typographic shared styles
export const defaultFontStyle = `
    font-size: ${typeSizes.body};
    font-family: ${fontFamilies.body};
    font-weight: ${fontWeights.regular};
    ${primaryText};
`;

export const displayFontStyle = `
    ${accentText};
    font-size: ${typeSizes.display};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

export const h1FontStyle = `
    ${accentText};
    font-size: ${typeSizes.xxxl};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

export const h2FontStyle = `
    ${accentText};
    font-size: ${typeSizes.xxl};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

export const h3FontStyle = `
    ${accentText};
    font-size: ${typeSizes.xl};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

export const largeFontStyle = `
    ${accentText};
    font-size: ${typeSizes.l};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

export const smallFontSize = `
    ${secondaryText};
    font-size: ${typeSizes.s};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

export const extraSmallFontSize = `
    ${secondaryText};
    font-size: ${typeSizes.xs};
    font-family: ${fontFamilies.display};
    font-weight: ${fontWeights.bold};
`;

// export const fonts = {
//     headline: {
//         color: colors.accent,
//         fontSize: typeSizes.display,
//         fontFamily: fontFamilies.display,
//         fontWeight: fontWeights.bold,
//         marginBottom: spacing.m
//     },
//     "title-1": {
//         color: colors.primary,
//         fontSize: typeSizes.xxxl,
//         fontFamily: fontFamilies.display,
//         fontWeight: fontWeights.bold,
//         marginBottom: spacing.m
//     },
//     "title-2": {
//         color: colors.primary,
//         fontSize: typeSizes.xxl,
//         fontFamily: fontFamilies.display,
//         fontWeight: fontWeights.bold,
//         lineHeight: 36,
//         marginBottom: spacing.s
//     },
//     "title-3": {
//         color: colors.primary,
//         fontSize: typeSizes.xl,
//         fontFamily: fontFamilies.body,
//         fontWeight: fontWeights.regular,
//         marginBottom: spacing.s
//     },
//     "title-4": {
//         color: colors.primary,
//         fontSize: typeSizes.l,
//         fontFamily: fontFamilies.body,
//         fontWeight: fontWeights.regular,
//         marginBottom: spacing.xs
//     },
//     body: {
//         color: colors.primary,
//         fontSize: typeSizes.body,
//         fontFamily: fontFamilies.body,
//         fontWeight: fontWeights.regular,
//         marginBottom: spacing.xs
//     },
//     small: {
//         color: colors.secondary,
//         fontSize: typeSizes.s,
//         fontFamily: fontFamilies.body,
//         fontWeight: fontWeights.regular,
//         marginBottom: spacing.xxs
//     },
//     "extra-small": {
//         color: colors.secondary,
//         fontSize: typeSizes.xs,
//         fontFamily: fontFamilies.body,
//         fontWeight: fontWeights.regular
//     }
// };
