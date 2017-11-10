// input styles
import {
    colors,
    spacing,
    defaultTextStyle,
    secondaryText
} from "../../branding/designSystem";
import styled from "styled-components/primitives";

export const borderColor = colors.primary.base;
export const borderColorFocus = colors.accent.base;
export const borderWidth = 1;

export const InnerTextboxStyleFocus = `
    border: ${borderWidth}px solid ${borderColorFocus};
    outline: none;
`;

export const InnerTextboxStyle = `
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: ${spacing.xs}px;
    margin-bottom: ${spacing.xs}px;
    border: ${borderWidth}px solid ${borderColor};

    &:focus {
        ${InnerTextboxStyleFocus};
    }
`;

export const TextboxLabelStyle = `
    ${defaultTextStyle};
    font-weight: bold;
    color: ${colors.grey30};
    margin-bottom: ${spacing.xs}px;
`;
