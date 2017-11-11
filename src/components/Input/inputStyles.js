// input styles
import {
    colors,
    spacing,
    defaultTextStyle,
    disabledTextStyle
} from "../../branding/designSystem";

//input labels
export const inputLabelStyle = `
    ${defaultTextStyle};
    margin-bottom: ${spacing.xs}px;
`;

//input containers
const inputBorderColor = colors.primary.base;
const inputBorderColorFocus = colors.accent.base;

export const inputStyleFocus = `
    border: 1px solid ${inputBorderColorFocus};
    outline: none;
`;

export const inputStyle = `
    ${defaultTextStyle};
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: ${spacing.xs}px;
    margin-bottom: ${spacing.xs}px;
    border: 1px solid ${inputBorderColor};

    &:focus {
        ${inputStyleFocus};
    }

    &:disabled {
        background-color: ${colors.grey30};
        border-color: ${colors.grey70};
    }

    &::placeholder {
        ${disabledTextStyle};
    }
`;

export const inputErrorStyle = `
    border-color: ${colors.failure.base};
`;

export const inputSucessStyle = `
    border-color: ${colors.success.base};
`;
