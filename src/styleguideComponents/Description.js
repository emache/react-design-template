import React from "react";
import { Text } from "react-sketchapp";
import { descriptionStyle } from "./sharedStyles";
import styled from "styled-components/primitives";

const DescriptionText = styled.Text`
    ${descriptionStyle};
`;

const Description = ({ children }) => (
    <Text name="Description">{children}</Text>
);

export default Description;
