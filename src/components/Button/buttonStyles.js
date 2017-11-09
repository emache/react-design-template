// input styles
import { colors, spacing } from "../../branding/designSystem";
import tinycolor from "tinycolor2";

export const primaryButtonBgColor = colors.primary.base;
export const primaryButtonBgColorHover = colors.primary.darker;
export const primaryButtonBgColorActive = tinycolor(
    colors.primary.darker
).darken(10);

export const secondaryButtonBgColor = colors.secondary.base;
export const secondaryButtonBgColorHover = colors.secondary.darker;
export const secondaryButtonBgColorActive = tinycolor(
    colors.secondary.darker
).darken(10);

export const buttonBgColorDisabled = colors.grey30;

const baseButtonStyle = `
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: ${spacing.xs}px;
    text-align: center;
    align-items: center;
    margin: ${spacing.xs}px 0;

    &:active {
        position: relative;
        top: 1px;
    }
`;

export const primaryButtonStyle = `
    ${baseButtonStyle};
    background-color: ${primaryButtonBgColor};
    color: ${colors.white};

    &:hover {
        background-color: ${primaryButtonBgColorHover};
    }

    &:active {
        background-color: ${primaryButtonBgColorActive};
    }

    &:disabled {
        background-color: ${buttonBgColorDisabled};
        color: ${colors.grey70}
    }
`;

export const secondaryButtonStyle = `
    ${baseButtonStyle};
    background-color: ${secondaryButtonBgColor};
    color: ${colors.white};

    &:hover {
        background-color: ${secondaryButtonBgColorHover};
    }

    &:active {
        background-color: ${secondaryButtonBgColorActive};
    }

    &:disabled {
        background-color: ${buttonBgColorDisabled};
        color: ${colors.grey70}
    }
`;
