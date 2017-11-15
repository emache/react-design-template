import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { checkboxStyle, checkboxWrapperStyle } from "./checkboxStyles";

const CheckboxBox = styled.div`
    ${checkboxStyle};
`;

const StyledCheckbox = styled.label`
    ${checkboxWrapperStyle};
`;

export const Checkbox = ({ value, children, name }: Props) => (
    <StyledCheckbox>
        {children}
        <input type="checkbox" value={value} name={name} />
        <CheckboxBox />
    </StyledCheckbox>
);

export default Checkbox;
