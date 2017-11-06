// input styles
import { colors, spacing } from "../../branding/brandName";
import tinycolor from "tinycolor2";

export const buttonBgColor = colors.primary.base;
export const buttonBgColorHover = colors.primary.darker;
export const buttonBgColorActive = tinycolor(colors.primary).darken(10);

export const buttonStyle = `
    width: 300px;
    min-height: ${spacing.xs}px;
    padding: ${spacing.xs}px;
    background-color: ${buttonBgColor};
    margin: ${spacing.xs}px 0;
    text-align: center;
    align-items: center;
    color: ${colors.white};

    &:hover {
        background-color: ${buttonBgColorHover};
    }
    &:active {
        background-color: ${buttonBgColorActive};
        position: relative;
        top: 1px;
    }
`;
