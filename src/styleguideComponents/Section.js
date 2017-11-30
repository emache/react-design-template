import React from "react";
import { View } from "react-sketchapp";
import { spacing } from "../branding/designSystem";
import styled from "styled-components/primitives";

const Section = styled.View`
    margin-bottom: ${spacing.m};
    margin-top: ${spacing.m};
    display: flex;
    flex-direction: column;
    &:last-child {
        margin-bottom: 0;
    }
`;

export default ({ name, children }) => (
    <Section name={`${name} Wrapper`}>{children}</Section>
);
