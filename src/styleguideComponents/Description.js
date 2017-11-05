import React from "react";
import { Text } from "react-sketchapp";
import { spacing, colors, typeSizes } from "../branding/brandName";

const Description = ({ children }) => (
    <Text
        name="Description"
        style={{
            color: colors.grey30,
            fontWeight: "regular",
            fontSize: typeSizes.body,
            fontFamily: "Arial"
        }}
    >
        {children}
    </Text>
);

export default Description;
