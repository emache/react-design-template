// input styles
import { colors, spacing } from "../../branding/designSystem";
import tinycolor from "tinycolor2";

export const primaryButtonColor = colors.primary.base;
export const primaryButtonBgColorHover = colors.primary.darker;
export const primaryButtonBgColorActive = tinycolor(
    colors.primary.darker
).darken(10);

export const secondaryButtonColor = colors.secondary.base;
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

    &:disabled {
        background-color: ${buttonBgColorDisabled};
        color: ${colors.grey70}
    }
`;

export const primaryButtonStyle = `
    ${baseButtonStyle};
    background-color: ${primaryButtonColor};
    color: ${colors.white};

    &:hover {
        background-color: ${primaryButtonBgColorHover};
    }

    &:active {
        background-color: ${primaryButtonBgColorActive};
    }
`;

export const primaryButtonInvertedStyle = `
    ${primaryButtonStyle};
    border: 1px solid ${primaryButtonColor};
    background-color: transparent;
    color: ${primaryButtonColor};

    &:hover {
        border: 1px solid ${primaryButtonBgColorHover};;
    }

    &:active {
        border: 1px solid ${primaryButtonBgColorActive};;
    }
`;

export const secondaryButtonStyle = `
    ${baseButtonStyle};
    background-color: ${secondaryButtonColor};
    color: ${colors.white};

    &:hover {
        background-color: ${secondaryButtonBgColorHover};
    }

    &:active {
        background-color: ${secondaryButtonBgColorActive};
    }
`;

export const secondaryButtonInvertedStyle = `
    ${secondaryButtonStyle};
    border: 1px solid ${secondaryButtonColor};
    background-color: transparent;
    color: ${primaryButtonColor};

    &:hover {
        border: 1px solid ${secondaryButtonBgColorHover};
    }

    &:active {
        border: 1px solid ${secondaryButtonBgColorActive};
    }
`;
