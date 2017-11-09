// Style guide and component guide styles
import {
    colors,
    spacing,
    displayTextStyle,
    defaultTextStyle
} from "../branding/designSystem";
import { render, Text, View, Artboard } from "react-sketchapp";
import styled from "styled-components/primitives";

export const titleContainerStyle = `
    width: 1200px;
    padding-bottom: ${spacing.s}px;
    margin: ${spacing.m}px 0;
    border-top: 2px solid ${colors.grey70};
`;

export const titleStyle = `
    ${displayTextStyle};
    color: ${colors.grey70};
`;

export const descriptionStyle = `
    ${defaultTextStyle};
`;

export const paletteStyle = `
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
`;

export const sectionStyle = `
    margin-bottom: ${spacing.xl};
    display: flex;
    flex-direction: column;
    width: 1200px;
`;

export const fontChipStyle = `
    width: 250px;
    height: 150px;
    padding: ${spacing.xs}px;
    border: 1px solid ${colors.grey70};
    align-items: center;
    margin: ${spacing.s}px;
`;

