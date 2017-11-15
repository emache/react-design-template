// Shared form styles
// Certain form elements share styles, those are gathered here.

import {
    colors,
    spacing,
    primaryTextStyle,
    disabledTextStyle,
    defaultTextStyle,
    boldText,
    fontSize
} from "../../branding/designSystem";

// Default form labels
export const formLabelStyle = `
    ${defaultTextStyle};
    ${boldText};
    text-transform: uppercase;
    fontSize: ${fontSize.xs};
    width: 300px;
`;

// Default containers styles
export const inputBorderColor = colors.grey78;
export const inputBorderColorFocus = colors.primary.base;

export const containerStyleDefault = `
    box-sizing: border-box;
    border: 1px solid ${inputBorderColor};
    outline: none;
`;

export const containerStyleFocus = `
    border: 1px solid ${inputBorderColorFocus};
    outline: none;
`;

export const containerStyleDisabled = `
    background-color: ${colors.grey98};
    border-color: ${inputBorderColor};
    pointer-events: none;
`;

export const formItemWrapper = `
    margin-bottom: ${spacing.m}px;
`;

export const containerStyle = `
    ${defaultTextStyle};
    ${containerStyleDefault};

    &:focus {
        ${containerStyleFocus};
    }

    &:disabled {
        ${containerStyleDisabled};
    }

    &::placeholder {
        ${disabledTextStyle};
    }
`;

export const containerStyleError = `
    border-color: ${colors.failure.base};
`;

export const containerStyleSucess = `
    border-color: ${colors.success.base};
`;
