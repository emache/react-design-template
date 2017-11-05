// input styles
import { colors } from "../../branding/brandName";

export const buttonWidth = 300;
export const buttonHeight = 50;
export const buttonBorderColor = colors.failure.base;
export const buttonBgColor = colors.failure.base;
export const buttonBorderWidth = 1;

export const buttonStyle = `
    width: 300px;
    height: 50px;
    background-color: ${buttonBgColor};
    margin: 10px 0;

    &:hover {
        background-color: red;
    }
    &:active {
        background-color: pink;
        position: relative;
        top: 1px;
    }
`;
