// checkbox styles
import {
    colors,
    spacing,
    defaultTextStyle,
    disabledTextStyle
} from "../../branding/designSystem";
import tinycolor from "tinycolor2";

const checkboxSize = 20;
const innerSize = checkboxSize / 2;

const unselectedColor = colors.grey70;
const unselectedColorHover = tinycolor(unselectedColor).darken(10);
const selectedColor = colors.accent.base;
const selectedColorHover = colors.accent.darker;
const disabledColor = colors.grey30;
const innerColor = colors.white;

const labelTextStyle = `
    ${defaultTextStyle};
    margin-bottom: 15px;
`;

export const checkboxStyle = `
    position: absolute;
    top: 0;
    left: 0;
    height: ${checkboxSize}px;
    width: ${checkboxSize}px;
    background: ${unselectedColor};
    &:after {
        content: "";
        opacity: 1;
        position: absolute;
        display: block;
        top: 4px;
        left: 8px;
        width: 3px;
        height: 8px;
        border: solid ${innerColor};
        border-width: 0 2px 2px 0;
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

    &:hover input ~ div,
    input:focus ~ div {
        background: ${unselectedColorHover};
    }

    input:checked ~ div {
        background: ${selectedColor};
    }

    &:hover input:not([disabled]):checked ~ div,
    input:checked:focus ~ div {
        background: ${selectedColorHover};
    }

    input:disabled ~ div {
        background: ${disabledColor};
        pointer-events: none;
    }

    input:disabled {
        ${disabledTextStyle};
    }

    input:not(:checked) ~ div:after {
        opacity: 0;
    }
}`;

// Rendering things for Sketc

export const checkboxHoverSketch = `
    border: 0;
    background: ${unselectedColorHover};
`;

export const radioDisabledSketch = `
    border: 0;
    background: ${disabledColor};
`;
