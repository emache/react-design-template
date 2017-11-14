// input styles
import {
    colors,
    spacing,
    defaultTextStyle,
    disabledTextStyle
} from "../../../branding/designSystem";
import tinycolor from "tinycolor2";

const radioSize = 20;
const innerSize = radioSize / 2;

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

export const radioBoxStyle = `
    position: absolute;
    top: 0px;
    left: 0;
    height: ${radioSize}px;
    width: ${radioSize}px;
    background: ${unselectedColor};
    border-radius: 50%;
    &:after {
        content: "";
        position: absolute;
        display: block;
        left: ${innerSize / 2}px;
        top: ${innerSize / 2}px;
        height: ${innerSize}px;
        width: ${innerSize}px;
        border-radius: 50%;
        background: ${innerColor};
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;

export const radioWrapperStyle = `
    input {
        opacity: 0;
    }

    display: block;
    position: relative;
    padding-left: ${radioSize + 10}px;
    cursor: pointer;
    line-height: ${radioSize}px;
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
        -webkit-transform: scale(0);
        transform: scale(0);
    }
}`;

// Rendering things for Sketch
export const radioCheckedSketch = `
    border: ${(radioSize - innerSize) / 2}px solid ${selectedColor};
    background: ${innerColor};
`;

export const radioHoverSketch = `
    border: 0;
    background: ${unselectedColorHover};
`;

export const radioCheckedHoverSketch = `
    border: ${(radioSize - innerSize) / 2}px solid ${selectedColorHover};
    background: ${innerColor};
`;

export const radioCheckedDisabledSketch = `
    border: ${(radioSize - innerSize) / 2}px solid ${disabledColor};
    background: ${innerColor};
`;

export const radioDisabledSketch = `
    border: 0;
    background: ${disabledColor};
`;
