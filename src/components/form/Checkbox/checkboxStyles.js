// checkbox styles
import {
    colors,
    defaultTextStyle,
    disabledTextStyle,
    spacing
} from "../../../branding/designSystem";
import tinycolor from "tinycolor2";
import {
    inputBorderColor,
    inputBorderColorFocus,
    containerStyle,
    containerStyleFocus,
    formLabelStyle,
    formItemWrapper,
    containerStyleDisabled
} from "../sharedFormStyles";

const checkboxSize = 20;
const unselectedColor = inputBorderColor;
const unselectedColorHover = inputBorderColorFocus;
const selectedColor = colors.accent.base;
const selectedColorHover = colors.accent.darker;
const disabledColor = colors.grey30;
const innerColor = colors.white;
const tickWidth = 2;

const labelTextStyle = `
    ${defaultTextStyle};
`;

export const checkboxStyle = `
    position: absolute;
    top: 0;
    left: 0;
    height: ${checkboxSize}px;
    width: ${checkboxSize}px;
    ${containerStyle};
    box-sizing: content-box;
    &:after {
        content: "";
        opacity: 1;
        position: absolute;
        display: block;
        top:${checkboxSize / 6}px;
        left: ${3 * checkboxSize / 8}px;
        width: ${checkboxSize / 4 - tickWidth}px;
        height: ${checkboxSize / 2 - tickWidth}px;
        border: solid ${innerColor};
        border-width: 0 ${tickWidth}px ${tickWidth}px 0;
        transform: rotate(45deg);
    }
`;

export const checkboxWrapperStyle = `
    input {
        opacity: 0;
    }

    display: block;
    position: relative;
    padding-left: ${checkboxSize + 10}px;
    cursor: pointer;
    line-height: ${checkboxSize}px;
    ${labelTextStyle}
    margin-bottom: ${spacing.xs}px;

    &:hover input ~ div,
    input:focus ~ div {
        ${containerStyleFocus};
    }

    input:checked ~ div {
        background: ${selectedColor};
        border: ${selectedColor};
    }

    &:hover input:not([disabled]):checked ~ div,
    input:checked:focus ~ div {
        background: ${selectedColorHover};
        border: ${selectedColorHover};
    }

    input:disabled ~ div {
        ${containerStyleDisabled}
    }

    input:disabled {
        ${disabledTextStyle};
    }

    input:not(:checked) ~ div:after {
        opacity: 0;
    }
}`;

// Rendering things for Sketch

export const checkboxHoverSketch = `
    border: 0;
    background: ${unselectedColorHover};
`;

export const checkboxDisabledSketch = `
    border: 0;
    background: ${disabledColor};
`;
