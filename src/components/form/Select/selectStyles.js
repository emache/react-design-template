// input styles
import {
    colors,
    spacing,
    defaultTextStyle,
    disabledTextStyle
} from "../../branding/designSystem";

//input labels
export const selectLabelStyle = `
    ${defaultTextStyle};
    margin-bottom: ${spacing.xs}px;
`;

//select containers
const selectBorderColor = colors.primary.base;
const selectBorderColorFocus = colors.accent.base;

export const selectStyleFocus = `
    border: 1px solid ${selectBorderColorFocus};
    outline: none;
`;

export const selectDisabledStyle = `
    background-color: ${colors.grey30};
    border-color: ${colors.grey70};
`;

export const selectStyle = `
    ${defaultTextStyle};
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: ${spacing.xs}px;
    margin-bottom: ${spacing.xs}px;
    border: 1px solid ${selectBorderColor};

    &:focus {
        ${selectStyleFocus};
    }

    &:disabled {
        ${selectDisabledStyle};
    }

    &::placeholder {
        ${disabledTextStyle};
    }
`;

export const selectErrorStyle = `
    border-color: ${colors.failure.base};
`;

export const selectSucessStyle = `
    border-color: ${colors.success.base};
`;
