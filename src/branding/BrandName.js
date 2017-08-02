// Global Design System settings: shared colors, text, spacing, grid.
import brandColors from './SharedColors';

// Global color names
// Favor generic names to actual color names.
const colors = {
    primary: brandColors.Night,
    primary_lighter: brandColors.Night_lighter,
    primary_darker: brandColors.Night_darker,
    secondary: brandColors.Peach,
    accent: brandColors.Sur,
    success: brandColors.Pear,
    warning: brandColors.Lemon,
    failure: brandColors.Tomato,
    black: brandColors.Black,
    grey70: brandColors.Grey70,
    grey30: brandColors.Grey30,
    grey10: brandColors.Grey20,
    grey03: brandColors.Grey3,
    white: brandColors.White
};

export const styledColors = Object.keys(colors).map( elem =>
    {
        return {
            name: elem,
            value: colors[elem],
        }
    }
);


// Global typography settings
// Base font size
//// Typesizes

// Spacing, based off the base font-size.
// xs = 0.5 * base font size
// s
// m
// l
// xl
// xxl

// Font families
// Font weights

// Other typographic definitions
//// headline
//// title 1
//// title 2
//// title 3
//// title 4
//// body
