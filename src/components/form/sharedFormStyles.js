// Shared form styles
// Certain form elements share styles, those are gathered here.

import {
    colors,
    spacing,
    defaultTextStyle,
    disabledTextStyle
} from "../../branding/designSystem";


// Default form labels
export const formLabelStyle = `
    ${defaultTextStyle};
`;

// Default containers styles
const inputBorderColor = colors.primary.base;
const inputBorderColorFocus = colors.accent.base;


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
    background-color: ${colors.grey30};
    border-color: ${colors.grey70};
    pointer-events: none;
`;

export const formItemWrapper = `
    margin-bottom: ${spacing.xs}px;
`

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


