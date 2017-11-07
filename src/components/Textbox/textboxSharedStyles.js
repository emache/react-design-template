// input styles
import {
    colors,
    spacing,
    defaultFontStyle,
    secondaryText
} from "../../branding/brandName";
import styled from "styled-components/primitives";

export const borderColor = colors.primary.base;
export const borderColorFocus = colors.accent.base;
export const borderWidth = 1;

export const InnerTextboxStyle = `
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: ${spacing.xs}px;
    margin-bottom: ${spacing.xs}px;
    border: ${borderWidth}px solid ${borderColor};

    &:focus {
        border-color: ${borderColorFocus};
        outline: none
    }
`;

export const TextboxLabelStyle = `
    ${defaultFontStyle};
    font-weight: bold;
    color: ${colors.grey30};
    margin-bottom: ${spacing.xs}px;
`;