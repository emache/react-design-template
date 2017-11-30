// Style guide and component guide styles
import { colors, spacing, defaultTextStyle } from "../branding/designSystem";
import { render, Text, View, Artboard } from "react-sketchapp";
import styled from "styled-components/primitives";

export const paletteStyle = `
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
`;

export const fontChipStyle = `
    width: 250px;
    height: 150px;
    padding: ${spacing.xs}px;
    border: 1px solid ${colors.grey70};
    align-items: center;
    margin-right: ${spacing.m}px;
`;
