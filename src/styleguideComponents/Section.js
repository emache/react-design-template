import React from "react";
import { View } from "react-sketchapp";
import { spacing } from "../branding/designSystem";
import styled from "styled-components/primitives";

const Section = styled.View`
    margin-bottom: ${spacing.xl};
    display: flex;
    flex-direction: column;
    width: 1200px;
`;

export default ({ title, children }) => (
    <Section name={`${title} Wrapper`}>{children}</Section>
);
