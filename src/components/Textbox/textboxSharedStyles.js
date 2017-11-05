// input styles
import { colors } from "../../branding/brandName";
import styled from "styled-components/primitives";

export const inputWidth = 300;
export const inputHeight = 50;
export const borderColor = colors.failure.base;
export const borderWidth = 1;

export const InnerTextboxStyle = `
    width: ${inputWidth}px;
    height: ${inputHeight}px;
    border: ${borderWidth}px solid ${borderColor};
`;
