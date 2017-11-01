// @flow
// Global Design System settings: shared colors, text, spacing, grid.
import brandColors from "./SharedColors";

// Global color names
// Favor generic names to actual color names.
export const colors = {
    primary: brandColors.Night,
    secondary: brandColors.Peach,
    accent: brandColors.Sur,
    success: brandColors.Pear,
    warning: brandColors.Lemon,
    failure: brandColors.Tomato,
    black: brandColors.Black,
    grey70: brandColors.Grey70,
    grey30: brandColors.Grey30,
    grey10: brandColors.Grey10,
    grey03: brandColors.Grey3,
    white: brandColors.White
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

// Typographic styles
export const fonts = {
    headline: {
        color: colors.accent,
        fontSize: typeSizes.display,
        fontFamily: fontFamilies.display,
        fontWeight: fontWeights.bold,
        marginBottom: spacing.m
    },
    "title-1": {
        color: colors.primary,
        fontSize: typeSizes.xxxl,
        fontFamily: fontFamilies.display,
        fontWeight: fontWeights.bold,
        marginBottom: spacing.m
    },
    "title-2": {
        color: colors.primary,
        fontSize: typeSizes.xxl,
        fontFamily: fontFamilies.display,
        fontWeight: fontWeights.bold,
        lineHeight: 36,
        marginBottom: spacing.s
    },
    "title-3": {
        color: colors.primary,
        fontSize: typeSizes.xl,
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular,
        marginBottom: spacing.s
    },
    "title-4": {
        color: colors.primary,
        fontSize: typeSizes.l,
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular,
        marginBottom: spacing.xs
    },
    Body: {
        color: colors.primary,
        fontSize: typeSizes.body,
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular,
        marginBottom: spacing.xs
    },
    small: {
        color: colors.secondary,
        fontSize: typeSizes.s,
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular,
        marginBottom: spacing.xxs
    },
    "extra-small": {
        color: colors.secondary,
        fontSize: typeSizes.xs,
        fontFamily: fontFamilies.body,
        fontWeight: fontWeights.regular
    }
};
